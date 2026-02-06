import { Trophy, Medal, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// TODO: Replace with real data
interface HonorStudent {
  rank: number;
  name: string;
  percentage: string;
}

const grades: { id: string; label: string; students: HonorStudent[] }[] = [
  {
    id: "1",
    label: "الفرقة الأولى",
    students: [
      { rank: 1, name: "أحمد محمد علي", percentage: "٩٨.٥٪" },
      { rank: 2, name: "فاطمة عبد الرحمن", percentage: "٩٧.٠٪" },
      { rank: 3, name: "عمر حسن إبراهيم", percentage: "٩٥.٥٪" },
      { rank: 4, name: "نورا سعيد محمد", percentage: "٩٤.٠٪" },
      { rank: 5, name: "يوسف أحمد حسين", percentage: "٩٣.٠٪" },
      { rank: 6, name: "مريم خالد عبد الله", percentage: "٩٢.٠٪" },
      { rank: 7, name: "علي محمود سعد", percentage: "٩١.٠٪" },
      { rank: 8, name: "سارة إبراهيم عمر", percentage: "٩٠.٠٪" },
      { rank: 9, name: "حسن عبد المنعم", percentage: "٨٩.٠٪" },
      { rank: 10, name: "هدى محمد أحمد", percentage: "٨٨.٠٪" },
    ],
  },
  {
    id: "2",
    label: "الفرقة الثانية",
    students: [
      { rank: 1, name: "محمد حسن عبد الله", percentage: "٩٨.٠٪" },
      { rank: 2, name: "ريم أحمد سعيد", percentage: "٩٦.٥٪" },
      { rank: 3, name: "خالد عمر محمود", percentage: "٩٥.٠٪" },
      { rank: 4, name: "آية محمد إبراهيم", percentage: "٩٣.٥٪" },
      { rank: 5, name: "عبد الرحمن حسين", percentage: "٩٢.٥٪" },
      { rank: 6, name: "سلمى عبد الله خالد", percentage: "٩١.٥٪" },
      { rank: 7, name: "إبراهيم سعد محمد", percentage: "٩٠.٥٪" },
      { rank: 8, name: "دينا محمود عمر", percentage: "٨٩.٥٪" },
      { rank: 9, name: "أسامة علي حسن", percentage: "٨٨.٥٪" },
      { rank: 10, name: "لمياء عبد المنعم", percentage: "٨٧.٥٪" },
    ],
  },
  {
    id: "3",
    label: "الفرقة الثالثة",
    students: [
      { rank: 1, name: "ياسمين حسن علي", percentage: "٩٨.٢٪" },
      { rank: 2, name: "عبد الله محمد سعيد", percentage: "٩٦.٨٪" },
      { rank: 3, name: "رنا أحمد محمود", percentage: "٩٥.٢٪" },
      { rank: 4, name: "حسام عمر إبراهيم", percentage: "٩٣.٨٪" },
      { rank: 5, name: "نادية محمد خالد", percentage: "٩٢.٨٪" },
      { rank: 6, name: "طارق حسين سعد", percentage: "٩١.٨٪" },
      { rank: 7, name: "هبة عبد الله علي", percentage: "٩٠.٨٪" },
      { rank: 8, name: "مصطفى سعيد أحمد", percentage: "٨٩.٨٪" },
      { rank: 9, name: "شيماء علي محمد", percentage: "٨٨.٨٪" },
      { rank: 10, name: "كريم محمود حسن", percentage: "٨٧.٨٪" },
    ],
  },
  {
    id: "4",
    label: "الفرقة الرابعة",
    students: [
      { rank: 1, name: "منى إبراهيم عمر", percentage: "٩٩.٠٪" },
      { rank: 2, name: "أحمد خالد محمد", percentage: "٩٧.٢٪" },
      { rank: 3, name: "سمر حسن عبد الله", percentage: "٩٥.٨٪" },
      { rank: 4, name: "عمرو سعيد إبراهيم", percentage: "٩٤.٢٪" },
      { rank: 5, name: "إسراء محمد علي", percentage: "٩٣.٢٪" },
      { rank: 6, name: "وليد أحمد حسين", percentage: "٩٢.٢٪" },
      { rank: 7, name: "رقية عبد المنعم", percentage: "٩١.٢٪" },
      { rank: 8, name: "حسام محمود سعد", percentage: "٩٠.٢٪" },
      { rank: 9, name: "فرح عمر خالد", percentage: "٨٩.٢٪" },
      { rank: 10, name: "بلال حسن محمد", percentage: "٨٨.٢٪" },
    ],
  },
];

function RankIndicator({ rank }: { rank: number }) {
  if (rank === 1)
    return <Trophy className="size-4 text-yellow-500 fill-yellow-500" />;
  if (rank === 2)
    return <Medal className="size-4 text-gray-400 fill-gray-400" />;
  if (rank === 3)
    return <Medal className="size-4 text-amber-600 fill-amber-600" />;
  return (
    <span className="text-xs text-muted-foreground font-reem-kufi w-4 text-center">
      {rank}
    </span>
  );
}

export default function HonorRollSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Award className="size-8 text-primary" />
          <h2 className="text-3xl sm:text-4xl font-bold font-reem-kufi">
            لوحة الشرف
          </h2>
          <Award className="size-8 text-primary" />
        </div>
        <p className="text-muted-foreground font-tajawal max-w-xl mx-auto">
          أوائل الطلاب في كل فرقة دراسية — الفصل الدراسي الأول ٢٠٢٦
        </p>
      </div>

      {/* 2×2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {grades.map((grade) => (
          <div
            key={grade.id}
            className="rounded-2xl border bg-card overflow-hidden"
          >
            {/* Card Header */}
            <div className="bg-muted/50 px-5 py-4 border-b flex items-center justify-between">
              <h3 className="font-bold font-reem-kufi text-lg">
                {grade.label}
              </h3>
              <Badge variant="secondary" className="font-tajawal text-xs">
                أعلى ١٠
              </Badge>
            </div>

            {/* Student List */}
            <ul className="divide-y">
              {grade.students.map((student) => (
                <li
                  key={student.rank}
                  className={`flex items-center gap-3 px-5 py-3 font-tajawal transition-colors ${
                    student.rank <= 3 ? "bg-primary/3" : "hover:bg-muted/30"
                  }`}
                >
                  {/* Rank */}
                  <div className="flex items-center justify-center w-6 shrink-0">
                    <RankIndicator rank={student.rank} />
                  </div>

                  {/* Name */}
                  <span
                    className={`flex-1 text-sm ${
                      student.rank <= 3 ? "font-bold" : ""
                    }`}
                  >
                    {student.name}
                  </span>

                  {/* Percentage */}
                  <span className="font-reem-kufi text-sm text-muted-foreground shrink-0">
                    {student.percentage}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <p className="text-[11px] text-muted-foreground/60 text-center mt-6 leading-relaxed font-tajawal">
        هذه النتائج استرشادية فقط ولا تُعد وثائق رسمية
      </p>
    </section>
  );
}
