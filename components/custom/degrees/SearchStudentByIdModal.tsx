"use client";

import { useState } from "react";
import { Search, Loader2, GraduationCap } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import type { Tables, Json } from "@/types/supabase";

type DegreeRow = Tables<"degrees_2026_term1">;

type SubjectDegree = {
  subject_name: string;
  subject_degree: number;
  subject_degree_before_compassion: string | number;
};

function parseSubjectDegrees(json: Json | null): SubjectDegree[] {
  if (!json || !Array.isArray(json)) return [];
  return json.filter(
    (item): item is SubjectDegree =>
      typeof item === "object" &&
      item !== null &&
      "subject_name" in item &&
      "subject_degree" in item,
  );
}

const GRADE_LABELS: Record<number, string> = {
  1: "الفرقة الأولى",
  2: "الفرقة الثانية",
  3: "الفرقة الثالثة",
  4: "الفرقة الرابعة",
};

function getGradeFromSeatNumber(seatNumber: number): number | null {
  if (seatNumber >= 10001 && seatNumber <= 19999) return 1;
  if (seatNumber >= 20001 && seatNumber <= 29999) return 2;
  if (seatNumber >= 30001 && seatNumber <= 39999) return 3;
  if (seatNumber >= 40001 && seatNumber <= 49999) return 4;
  return null;
}

function validateSeatNumber(value: string): string | null {
  if (!value.trim()) return "يرجى إدخال رقم الجلوس";
  if (!/^\d{5}$/.test(value.trim()))
    return "رقم الجلوس يجب أن يكون ٥ أرقام فقط";
  const num = parseInt(value.trim(), 10);
  const grade = getGradeFromSeatNumber(num);
  if (!grade) return "رقم الجلوس غير صالح";
  return null;
}

export default function SearchStudentByIdModal() {
  const [open, setOpen] = useState(false);
  const [seatNumber, setSeatNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DegreeRow | null>(null);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    const validationError = validateSeatNumber(seatNumber);
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);
    setSearched(true);

    try {
      const res = await fetch(`/api/students/${seatNumber.trim()}/degrees`);

      if (res.status === 404) {
        setError("لا توجد نتائج لرقم الجلوس المُدخل");
        return;
      }

      if (!res.ok) {
        setError("حدث خطأ أثناء جلب البيانات. يرجى المحاولة لاحقًا.");
        return;
      }

      const data = await res.json();
      setResult(data);
    } catch {
      setError("تعذر الاتصال بالخادم. يرجى التحقق من اتصالك بالإنترنت.");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenChange = (value: boolean) => {
    setOpen(value);
    if (!value) {
      setSeatNumber("");
      setResult(null);
      setError("");
      setSearched(false);
    }
  };

  const subjects = result ? parseSubjectDegrees(result.student_degrees) : [];
  const takhallofat = result
    ? parseSubjectDegrees(result.student_takhallofat_degrees)
    : [];
  const grade = result?.student_seatnumber
    ? getGradeFromSeatNumber(Number(result.student_seatnumber))
    : null;

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size="lg" className="text-lg px-8 py-6 cursor-pointer">
          اعرف ترتيبك الآن
          <Search className="size-5 mr-1" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md font-tajawal max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-right">
          <DialogTitle className="font-reem-kufi text-xl flex items-center gap-2 justify-center">
            <GraduationCap className="size-6" />
            البحث برقم الجلوس
          </DialogTitle>
          <DialogDescription className="text-center">
            أدخل رقم الجلوس للاطلاع على ترتيبك ونتائجك
          </DialogDescription>
        </DialogHeader>

        {/* Search Input */}
        <div className="space-y-3 mt-2">
          <Label htmlFor="seat-number" className="font-tajawal">
            رقم الجلوس
          </Label>
          <div className="flex gap-2">
            <Input
              id="seat-number"
              type="text"
              inputMode="numeric"
              placeholder="مثال: ١٢٣٤٥"
              value={seatNumber}
              onChange={(e) => {
                setSeatNumber(e.target.value);
                setError("");
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
              className="text-center text-lg font-reem-kufi"
              dir="ltr"
            />
            <Button
              onClick={handleSearch}
              disabled={loading}
              className="cursor-pointer shrink-0"
            >
              {loading ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <Search className="size-4" />
              )}
              بحث
            </Button>
          </div>
          {error && (
            <p className="text-destructive text-sm text-center">{error}</p>
          )}
        </div>

        {/* Results */}
        {loading && (
          <div className="flex items-center justify-center py-8">
            <Loader2 className="size-8 animate-spin text-muted-foreground" />
          </div>
        )}

        {!loading && searched && !result && !error && (
          <div className="text-center py-6 text-muted-foreground">
            <p>لا توجد نتائج لرقم الجلوس المُدخل</p>
          </div>
        )}

        {result && !loading && (
          <div className="space-y-4 mt-2">
            <Separator />

            {/* Student Info */}
            <div className="text-center space-y-1">
              <p className="text-lg font-bold font-reem-kufi">
                {result.student_name}
              </p>
              <p className="text-sm text-muted-foreground">
                رقم الجلوس: {result.student_seatnumber}
              </p>
              {grade && (
                <p className="text-sm text-muted-foreground">
                  {GRADE_LABELS[grade]}
                </p>
              )}
            </div>

            {/* Rank, Total Grade & Percentage */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {result.rank != null && (
                <div className="bg-muted/50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold font-reem-kufi">
                    #{result.rank}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">الترتيب</p>
                </div>
              )}
              {result.total_degree != null && (
                <div className="bg-muted/50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold font-reem-kufi">
                    {result.total_degree}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    المجموع الكلي
                  </p>
                </div>
              )}
              {result.percentage != null && (
                <div className="bg-muted/50 rounded-xl col-span-2 md:col-span-1 p-4 text-center">
                  <p className="text-2xl font-bold font-reem-kufi">
                    {result.percentage}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">النسبة</p>
                </div>
              )}
            </div>

            {result.student_totalgrade && (
              <div className="text-center text-sm text-muted-foreground">
                التقدير:{" "}
                <span className="font-bold">{result.student_totalgrade}</span>
              </div>
            )}

            {/* Subjects */}
            {subjects.length > 0 && (
              <div className="space-y-2">
                <p className="font-bold text-sm">المواد الدراسية</p>
                <div className="rounded-xl border overflow-hidden">
                  {subjects.map((subject, i) => (
                    <div
                      key={subject.subject_name}
                      className={`flex items-center justify-between px-4 py-2.5 text-sm ${
                        i !== subjects.length - 1 ? "border-b" : ""
                      }`}
                    >
                      <span>{subject.subject_name}</span>
                      <span className="font-bold font-reem-kufi text-base">
                        {subject.subject_degree}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Takhallofat Degrees */}
            {takhallofat.length > 0 && (
              <div className="space-y-2">
                <p className="font-bold text-sm">درجات التخلفات</p>
                <div className="rounded-xl border overflow-hidden">
                  {takhallofat.map((subject, i) => (
                    <div
                      key={subject.subject_name}
                      className={`flex items-center justify-between px-4 py-2.5 text-sm ${
                        i !== takhallofat.length - 1 ? "border-b" : ""
                      }`}
                    >
                      <span>{subject.subject_name}</span>
                      <span className="font-bold font-reem-kufi text-base">
                        {subject.subject_degree}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Disclaimer */}
            <p className="text-[11px] text-muted-foreground/60 text-center leading-relaxed">
              هذه النتائج استرشادية فقط ولا تُعد وثائق رسمية
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
