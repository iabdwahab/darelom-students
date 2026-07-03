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
  //     {
  //       name: "جنى محمد كمال خشوعى محمد ضيف الله",
  //       seatnumber: 10021,
  //       percentage: "95.63%",
  //       rank: 1,
  //     },
  //     {
  //       name: "مريم إبراهيم محمد إمام مرسى",
  //       seatnumber: 10104,
  //       percentage: "92.88%",
  //       rank: 2,
  //     },
  //     {
  //       name: "بسمة السيد رياض أحمد الشافعى",
  //       seatnumber: 10015,
  //       percentage: "92.13%",
  //       rank: 3,
  //     },
  //     {
  //       name: "عبدالعزيز أحمد فاروق حسن أحمد",
  //       seatnumber: 15027,
  //       percentage: "91.25%",
  //       rank: 4,
  //     },
  //     {
  //       name: "مازن أيمن عبدالله أحمد محمد",
  //       seatnumber: 15038,
  //       percentage: "91.00%",
  //       rank: 5,
  //     },
  //     {
  //       name: "رقية عبدالحي مصطفي عبدالحي مصطفى",
  //       seatnumber: 10034,
  //       percentage: "90.88%",
  //       rank: 6,
  //     },
  //     {
  //       name: "جومانة أشرف أحمد محمد المرسى",
  //       seatnumber: 10022,
  //       percentage: "90.25%",
  //       rank: 7,
  //     },
  //     {
  //       name: "سهام إسلام صبري نصر عبدالصمد",
  //       seatnumber: 15023,
  //       percentage: "89.63%",
  //       rank: 8,
  //     },
  //     {
  //       name: "سلمى وليد محمود محمد أحمد",
  //       seatnumber: 10045,
  //       percentage: "89.50%",
  //       rank: 9,
  //     },
  //     {
  //       name: "مروة محمود محمد حسن سليمان",
  //       seatnumber: 10103,
  //       percentage: "89.50%",
  //       rank: 9,
  //     },
  //     {
  //       name: "ملك عصام عبدالشاعر",
  //       seatnumber: 10112,
  //       percentage: "89.13%",
  //       rank: 10,
  //     },
  //   ],
  // },
  {
    id: "2",
    label: "الفرقة الثانية",
    students: [
    {
        "name": "حسين محمود حسين محمد محمد",
        "seatnumber": 20031,
        "rank": 1,
        "percentage": "98.14%"
    },
    {
        "name": "وعد عاصم عبدالرحمن عبدالعزيز",
        "seatnumber": 20135,
        "rank": 2,
        "percentage": "97.64%"
    },
    {
        "name": "سالم محمد عطا الله محمد محمد",
        "seatnumber": 20256,
        "rank": 3,
        "percentage": "96.79%"
    },
    {
        "name": "جنى يحيى عبدالنبى عبدالحميد",
        "seatnumber": 20024,
        "rank": 4,
        "percentage": "95.79%"
    },
    {
        "name": "شهد محمد حامد أحمد",
        "seatnumber": 20068,
        "rank": 4,
        "percentage": "95.79%"
    },
    {
        "name": "محمود محمد محمود السعيد وهيدى",
        "seatnumber": 20100,
        "rank": 5,
        "percentage": "95.57%"
    },
    {
        "name": "منة عصام محمد عبدالهادى حسن",
        "seatnumber": 20116,
        "rank": 6,
        "percentage": "95.50%"
    },
    {
        "name": "عبدالرحمن محمد عبدالستار أحمد",
        "seatnumber": 20078,
        "rank": 7,
        "percentage": "95.43%"
    },
    {
        "name": "سارة عماد عبدالمجيد ياسين المصري",
        "seatnumber": 20053,
        "rank": 8,
        "percentage": "95.07%"
    },
    {
        "name": "فاطمة حسن عبده عيد جاد",
        "seatnumber": 20082,
        "rank": 8,
        "percentage": "95.07%"
    },
    {
        "name": "إياد هانى عبدالمنعم محمد جمعة",
        "seatnumber": 20019,
        "rank": 9,
        "percentage": "95.00%"
    },
    {
        "name": "حبيبة عزت صديق محمد عثمان",
        "seatnumber": 20027,
        "rank": 10,
        "percentage": "94.86%"
    }
],
  },
  {
    id: "3",
    label: "الفرقة الثالثة",
    students: [
    {
        "name": "عمر محمد سعيد محمد بدوى",
        "seatnumber": 30139,
        "percentage": "95.29%",
        "rank": 1
    },
    {
        "name": "إيمان محمود قرشى حسنين حسن",
        "seatnumber": 30037,
        "percentage": "94.36%",
        "rank": 2
    },
    {
        "name": "ياسمين محمد حسنى محمد عبدالحميد",
        "seatnumber": 30221,
        "percentage": "93.71%",
        "rank": 3
    },
    {
        "name": "سندس أحمد شوقى فرغلى إسماعيل",
        "seatnumber": 30104,
        "percentage": "93.36%",
        "rank": 4
    },
    {
        "name": "منةالله مصطفى السيد الجارحى",
        "seatnumber": 30188,
        "percentage": "93.00%",
        "rank": 5
    },
    {
        "name": "سامية حسام حفني خلف",
        "seatnumber": 30094,
        "percentage": "92.79%",
        "rank": 6
    },
    {
        "name": "حبيبة هشام حنفى عبدالوهاب",
        "seatnumber": 30052,
        "percentage": "92.64%",
        "rank": 7
    },
    {
        "name": "آلاء سامر خالد فتحي",
        "seatnumber": 30003,
        "percentage": "92.14%",
        "rank": 8
    },
    {
        "name": "شيماء سعيد أحمد عبدالشافى",
        "seatnumber": 30116,
        "percentage": "92.07%",
        "rank": 9
    },
    {
        "name": "شهد صلاح الدين على عبدالباقى",
        "seatnumber": 30112,
        "percentage": "92.00%",
        "rank": 10
    }
],
  },
  {
    id: "4",
    label: "الفرقة الرابعة",
    students: [
    {
        "name": "نسمة محمد خيرى حسن",
        "seatnumber": 40234,
        "rank": 1,
        "percentage": "97.57%"
    },
    {
        "name": "تسنيم عبدربه عبدالله محمود البعلى",
        "seatnumber": 40066,
        "rank": 2,
        "percentage": "96.86%"
    },
    {
        "name": "على جمال حامد عبدالقادر سليمان",
        "seatnumber": 40152,
        "rank": 3,
        "percentage": "96.07%"
    },
    {
        "name": "مريم أحمد محمد سعداوى",
        "seatnumber": 40191,
        "rank": 4,
        "percentage": "95.21%"
    },
    {
        "name": "ناريمان السيد عبدالحميد جمعة",
        "seatnumber": 40226,
        "rank": 5,
        "percentage": "95.00%"
    },
    {
        "name": "محمد صابر على السنوسى خليل",
        "seatnumber": 40182,
        "rank": 6,
        "percentage": "94.64%"
    },
    {
        "name": "روضة وليد محمد عبدالعزيز",
        "seatnumber": 40103,
        "rank": 7,
        "percentage": "94.57%"
    },
    {
        "name": "أحمد إبراهيم مصطفى عبدالله مصطفى",
        "seatnumber": 40017,
        "rank": 8,
        "percentage": "94.50%"
    },
    {
        "name": "مريم محمود رجب تهامى",
        "seatnumber": 40204,
        "rank": 9,
        "percentage": "94.14%"
    },
    {
        "name": "ندى أحمد عبده شبل حسن",
        "seatnumber": 40229,
        "rank": 10,
        "percentage": "93.36%"
    }
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
          أوائل الطلاب في كل فرقة دراسية — العام الدراسي ٢٠٢٦
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
                  key={student.seatnumber}
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
