import { Trophy, Medal, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// TODO: Replace with real data
interface HonorStudent {
  rank: number;
  name: string;
  percentage: string;
  seatnumber: number;
}

const grades: { id: string; label: string; students: HonorStudent[] }[] = [
  // {
  //   id: "1",
  //   label: "الفرقة الأولى",
  //   students: [
  //     { rank: 1, name: "أحمد محمد علي", percentage: "٩٨.٥٪" },
  //     { rank: 2, name: "فاطمة عبد الرحمن", percentage: "٩٧.٠٪" },
  //     { rank: 3, name: "عمر حسن إبراهيم", percentage: "٩٥.٥٪" },
  //     { rank: 4, name: "نورا سعيد محمد", percentage: "٩٤.٠٪" },
  //     { rank: 5, name: "يوسف أحمد حسين", percentage: "٩٣.٠٪" },
  //     { rank: 6, name: "مريم خالد عبد الله", percentage: "٩٢.٠٪" },
  //     { rank: 7, name: "علي محمود سعد", percentage: "٩١.٠٪" },
  //     { rank: 8, name: "سارة إبراهيم عمر", percentage: "٩٠.٠٪" },
  //     { rank: 9, name: "حسن عبد المنعم", percentage: "٨٩.٠٪" },
  //     { rank: 10, name: "هدى محمد أحمد", percentage: "٨٨.٠٪" },
  //   ],
  // },
  {
    id: "2",
    label: "الفرقة الثانية",
    students: [
      {
        name: "شهد محمد حامد أحمد",
        seatnumber: 20068,
        percentage: "99.00%",
        rank: 1,
      },
      {
        name: "سالم محمد عطا الله محمد محمد",
        seatnumber: 20256,
        percentage: "99.00%",
        rank: 1,
      },
      {
        name: "حسين محمود حسين محمد محمد",
        seatnumber: 20031,
        percentage: "98.67%",
        rank: 2,
      },
      {
        name: "وعد عاصم عبدالرحمن عبدالعزيز",
        seatnumber: 20135,
        percentage: "98.50%",
        rank: 3,
      },
      {
        name: "ملك هانى محمد عبدالعال سيد",
        seatnumber: 20112,
        percentage: "98.00%",
        rank: 4,
      },
      {
        name: "محمد محمد عطية محمد إبراهيم",
        seatnumber: 20096,
        percentage: "97.83%",
        rank: 5,
      },
      {
        name: "نوران محمد ممدوح محمد",
        seatnumber: 20129,
        percentage: "97.33%",
        rank: 6,
      },
      {
        name: "الشيماء رجب خليفة أحمد",
        seatnumber: 20016,
        percentage: "96.67%",
        rank: 7,
      },
      {
        name: "سارة عماد عبدالمجيد ياسين المصري",
        seatnumber: 20053,
        percentage: "96.33%",
        rank: 8,
      },
      {
        name: "عبدالرحمن محمد رمضان عبدالنبي العطفى",
        seatnumber: 20077,
        percentage: "96.33%",
        rank: 8,
      },
      {
        name: "محمد سمير محمد فهمي فرج",
        seatnumber: 20093,
        percentage: "96.33%",
        rank: 8,
      },
      {
        name: "منة عصام محمد عبدالهادى حسن",
        seatnumber: 20116,
        percentage: "96.33%",
        rank: 8,
      },
      {
        name: "حبيبة عزت صديق محمد عثمان",
        seatnumber: 20027,
        percentage: "96.17%",
        rank: 9,
      },
      {
        name: "جنى يحيى عبدالنبى عبدالحميد",
        seatnumber: 20024,
        percentage: "95.83%",
        rank: 10,
      },
    ],
  },
  {
    id: "3",
    label: "الفرقة الثالثة",
    students: [
      {
        name: "إيمان محمود قرشى حسنين حسن",
        seatnumber: 30037,
        percentage: "95.50%",
        rank: 1,
      },
      {
        name: "سندس أحمد شوقى فرغلى إسماعيل",
        seatnumber: 30104,
        percentage: "95.33%",
        rank: 2,
      },
      {
        name: "ياسمين محمد حسنى محمد عبدالحميد",
        seatnumber: 30221,
        percentage: "94.50%",
        rank: 3,
      },
      {
        name: "آلاء سامر خالد فتحي",
        seatnumber: 30003,
        percentage: "94.33%",
        rank: 4,
      },
      {
        name: "شهد صلاح الدين على عبدالباقى",
        seatnumber: 30112,
        percentage: "94.33%",
        rank: 4,
      },
      {
        name: "سامية حسام حفني خلف",
        seatnumber: 30094,
        percentage: "94.17%",
        rank: 5,
      },
      {
        name: "حبيبة هشام حنفى عبدالوهاب",
        seatnumber: 30052,
        percentage: "94.00%",
        rank: 6,
      },
      {
        name: "منةالله مصطفى السيد الجارحى",
        seatnumber: 30188,
        percentage: "94.00%",
        rank: 6,
      },
      {
        name: "زهراء مصطفى طه عبدالجواد",
        seatnumber: 30088,
        percentage: "93.83%",
        rank: 7,
      },
      {
        name: "عمر محمد سعيد محمد بدوى",
        seatnumber: 30139,
        percentage: "93.83%",
        rank: 7,
      },
      {
        name: "منةالله هشام دسوقى أحمد نور الدين",
        seatnumber: 30189,
        percentage: "93.50%",
        rank: 8,
      },
      {
        name: "آلاء عيد وداعه محمد على",
        seatnumber: 30004,
        percentage: "93.17%",
        rank: 9,
      },
      {
        name: "أحمد عبدالجواد أحمد سلامة هيكل",
        seatnumber: 30012,
        percentage: "92.67%",
        rank: 10,
      },
    ],
  },
  {
    id: "4",
    label: "الفرقة الرابعة",
    students: [
      {
        name: "روضة وليد محمد عبدالعزيز",
        seatnumber: 40103,
        percentage: "98.17%",
        rank: 1,
      },
      {
        name: "تسنيم عبدربه عبدالله محمود البعلى",
        seatnumber: 40066,
        percentage: "98.00%",
        rank: 2,
      },
      {
        name: "نسمة محمد خيرى حسن",
        seatnumber: 40234,
        percentage: "97.67%",
        rank: 3,
      },
      {
        name: "محمد صابر على السنوسى خليل",
        seatnumber: 40182,
        percentage: "97.00%",
        rank: 4,
      },
      {
        name: "مها جمعه صلاح عبدالتواب",
        seatnumber: 40221,
        percentage: "96.50%",
        rank: 5,
      },
      {
        name: "أحمد إبراهيم مصطفى عبدالله مصطفى",
        seatnumber: 40017,
        percentage: "96.00%",
        rank: 6,
      },
      {
        name: "على جمال حامد عبدالقادر سليمان",
        seatnumber: 40152,
        percentage: "95.83%",
        rank: 7,
      },
      {
        name: "سارة أحمد عبدالعزيز أحمد قمر",
        seatnumber: 40109,
        percentage: "95.67%",
        rank: 8,
      },
      {
        name: "محمد عبدالباسط محمد النجدي علي عبدالرحيم",
        seatnumber: 40183,
        percentage: "95.67%",
        rank: 8,
      },
      {
        name: "أحمد سامح أحمد ريحان فرج",
        seatnumber: 40018,
        percentage: "95.33%",
        rank: 9,
      },
      {
        name: "مريم محمود رجب تهامى",
        seatnumber: 40204,
        percentage: "95.33%",
        rank: 9,
      },
      {
        name: "مريم أحمد محمد سعداوى",
        seatnumber: 40191,
        percentage: "95.17%",
        rank: 10,
      },
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
