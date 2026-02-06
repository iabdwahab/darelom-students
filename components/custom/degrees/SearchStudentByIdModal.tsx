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

// TODO: Replace with your real data fetching logic
interface StudentResult {
  name: string;
  seatNumber: string;
  year: string;
  semester: string;
  gpa: string;
  rank: number;
  totalStudents: number;
  subjects: { name: string; grade: string }[];
}

export default function SearchStudentByIdModal() {
  const [open, setOpen] = useState(false);
  const [seatNumber, setSeatNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<StudentResult | null>(null);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    if (!seatNumber.trim()) {
      setError("يرجى إدخال رقم الجلوس");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);
    setSearched(true);

    try {
      // TODO: Replace with actual API call
      // const res = await fetch(`/api/students/${seatNumber}`);
      // const data = await res.json();
      // setResult(data);

      // Simulated delay for demo
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulated result — replace with real data
      setResult({
        name: "محمد أحمد عبد الله",
        seatNumber: seatNumber,
        year: "الفرقة الثانية",
        semester: "الفصل الدراسي الأول — ٢٠٢٦",
        gpa: "٣.٤٥",
        rank: 12,
        totalStudents: 350,
        subjects: [
          { name: "النحو والصرف", grade: "A" },
          { name: "البلاغة", grade: "B+" },
          { name: "الأدب العربي", grade: "A-" },
          { name: "علم اللغة", grade: "B" },
          { name: "الدراسات الإسلامية", grade: "A" },
        ],
      });
    } catch {
      setError("حدث خطأ أثناء البحث. يرجى المحاولة مرة أخرى.");
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

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size="lg" className="text-lg px-8 py-6 cursor-pointer">
          اعرف ترتيبك الآن
          <Search className="size-5 mr-1" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md font-tajawal">
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
              <p className="text-lg font-bold font-reem-kufi">{result.name}</p>
              <p className="text-sm text-muted-foreground">
                {result.year} • {result.semester}
              </p>
            </div>

            {/* Rank & GPA */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-muted/50 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold font-reem-kufi">
                  {result.rank}
                  <span className="text-sm text-muted-foreground font-tajawal">
                    {" "}
                    / {result.totalStudents}
                  </span>
                </p>
                <p className="text-xs text-muted-foreground mt-1">الترتيب</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold font-reem-kufi">
                  {result.gpa}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  المعدل التراكمي
                </p>
              </div>
            </div>

            {/* Subjects */}
            <div className="space-y-2">
              <p className="font-bold text-sm">المواد الدراسية</p>
              <div className="rounded-xl border overflow-hidden">
                {result.subjects.map((subject, i) => (
                  <div
                    key={subject.name}
                    className={`flex items-center justify-between px-4 py-2.5 text-sm ${
                      i !== result.subjects.length - 1 ? "border-b" : ""
                    }`}
                  >
                    <span>{subject.name}</span>
                    <span className="font-bold font-reem-kufi text-base">
                      {subject.grade}
                    </span>
                  </div>
                ))}
              </div>
            </div>

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
