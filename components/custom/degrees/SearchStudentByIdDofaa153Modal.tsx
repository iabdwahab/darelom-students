"use client";

import { useState } from "react";
import { Search, Loader2, GraduationCap } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import type { Tables, Json } from "@/types/supabase";

type Dofaa153Row = Tables<"dofaa_153">;

type GradeDegree = {
  total: number;
  percentage: string;
};

type GradesDegrees = {
  grade1?: GradeDegree;
  grade2?: GradeDegree;
  grade3?: GradeDegree;
};

const GRADE_LABELS: Record<string, string> = {
  grade1: "الفرقة الأولى",
  grade2: "الفرقة الثانية",
  grade3: "الفرقة الثالثة",
};

function parseGradesDegrees(json: Json | null): GradesDegrees {
  if (!json || typeof json !== "object" || Array.isArray(json)) return {};

  const result: GradesDegrees = {};
  const obj = json as Record<string, unknown>;

  (["grade1", "grade2", "grade3"] as const).forEach((key) => {
    const value = obj[key];
    if (value && typeof value === "object" && "total" in value && "percentage" in value) {
      result[key] = value as GradeDegree;
    }
  });

  return result;
}

function validateSeatNumber(value: string): string | null {
  if (!value.trim()) return "يرجى إدخال رقم الجلوس";
  if (!/^\d+$/.test(value.trim())) return "رقم الجلوس يجب أن يكون أرقام فقط";
  return null;
}

export default function SearchStudentByIdDofaa153Modal() {
  const [open, setOpen] = useState(false);
  const [seatNumber, setSeatNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Dofaa153Row | null>(null);
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
      const res = await fetch(`/api/students/${seatNumber.trim()}/dofaa_153`);

      if (res.status === 401) {
        setError("تم حجب إظهار النتيجة.");
        return;
      } else if (res.status === 404) {
        setError("لا توجد نتائج لرقم الجلوس المُدخل.");
        return;
      }

      if (res.status === 500) {
        setError("حدث خطأ في الخادم. يرجى المحاولة لاحقًا.");
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

  const gradesDegrees = result ? parseGradesDegrees(result.grades_degrees) : {};
  const gradeEntries = Object.entries(gradesDegrees) as [keyof GradesDegrees, GradeDegree][];

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size="lg" className="text-lg px-8 py-6 cursor-pointer">
          ترتيب الدفعة 153 الإجمالي
          <Search className="size-5 mr-1" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md font-tajawal max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-right">
          <DialogTitle className="font-reem-kufi text-xl flex items-center gap-2 justify-center">
            <GraduationCap className="size-6" />
            البحث برقم الجلوس
          </DialogTitle>
          <DialogDescription className="text-center">أدخل رقم جلوس الفرقة الثالثة 2026</DialogDescription>
        </DialogHeader>

        {/* Search Input */}
        <div className="space-y-3 mt-2">
          <Label htmlFor="seat-number-dofaa153" className="font-tajawal">
            رقم الجلوس
          </Label>
          <div className="flex gap-2">
            <Input
              id="seat-number-dofaa153"
              type="text"
              inputMode="numeric"
              placeholder="مثال: 12345"
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
            <Button onClick={handleSearch} disabled={loading} className="cursor-pointer shrink-0">
              {loading ? <Loader2 className="size-4 animate-spin" /> : <Search className="size-4" />}
              بحث
            </Button>
          </div>
          {error && <p className="text-destructive text-sm text-center">{error}</p>}
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
              <p className="text-lg font-bold font-reem-kufi">{result.name}</p>
              <p className="text-sm text-muted-foreground">رقم الجلوس: {result.seatnumber}</p>
            </div>

            {/* Rank, Total Grade & Percentage */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {result.rank != null && (
                <div className="bg-muted/50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold font-reem-kufi">#{result.rank}</p>
                  <p className="text-xs text-muted-foreground mt-1">الترتيب</p>
                </div>
              )}
              {result.total_degree != null && (
                <div className="bg-muted/50 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold font-reem-kufi">{result.total_degree}</p>
                  <p className="text-xs text-muted-foreground mt-1">المجموع الكلي</p>
                </div>
              )}
              {result.percentage != null && (
                <div className="bg-muted/50 rounded-xl col-span-2 md:col-span-1 p-4 text-center">
                  <p className="text-2xl font-bold font-reem-kufi">{result.percentage}</p>
                  <p className="text-xs text-muted-foreground mt-1">النسبة</p>
                </div>
              )}
            </div>

            <span className="text-red-700 text-sm mb-2 text-center block">المجموع الكلي من 4100.</span>
            {/* Grades Breakdown */}
            {gradeEntries.length > 0 && (
              <div className="space-y-2">
                <p className="font-bold text-sm">تفاصيل الفرق الدراسية</p>
                <div className="rounded-xl border overflow-hidden">
                  {gradeEntries.map(([key, grade], i) => (
                    <div
                      key={key}
                      className={`flex items-center justify-between px-4 py-2.5 text-sm ${i !== gradeEntries.length - 1 ? "border-b" : ""}`}
                    >
                      <span>{GRADE_LABELS[key] ?? key}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-muted-foreground text-xs">{grade.percentage}</span>
                        <span className="font-bold font-reem-kufi text-base">{grade.total}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Disclaimer */}
            <p className="text-[11px] text-muted-foreground/60 text-center leading-relaxed">هذه النتائج استرشادية فقط ولا تُعد وثائق رسمية</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
