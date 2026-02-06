import {
  Trophy,
  GraduationCap,
  BarChart3,
  Search,
  ArrowLeft,
  BookOpen,
  Users,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Trophy,
    title: "ترتيب النتائج",
    description:
      "اعرف ترتيبك بين زملائك في كل فصل دراسي واطّلع على تقدمك الأكاديمي.",
  },
  {
    icon: BarChart3,
    title: "إحصائيات الأداء(قريبًا) ",
    description:
      "رسوم بيانية توضح أداءك الأكاديمي عبر الفصول الدراسية المختلفة.",
  },
  {
    icon: Search,
    title: "بحث سريع",
    description: "ابحث عن نتائجك بسهولة عبر رقم الجلوس.",
  },
  {
    icon: BookOpen,
    title: "المصادر التعليمية",
    description: "وصول مباشر لمصادر تعليمية متنوعة تخص مواد كلية دار العلوم.",
  },
];

const stats = [
  { value: "4", label: "فرق دراسية", icon: GraduationCap },
  { value: "+2000", label: "طالب مستفيد", icon: Users },
];

export default function LandingSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-16 pb-12">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-1.5 text-sm font-tajawal gap-2"
          >
            <Star className="size-3.5 fill-current" />
            الفصل الدراسي الأول — ٢٠٢٦
          </Badge>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-reem-kufi leading-tight mb-6">
            اكتشف ترتيبك
            <span className="block mt-2 bg-linear-to-l from-primary/80 to-primary bg-clip-text text-transparent">
              بين زملائك
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground font-tajawal max-w-2xl mb-10 leading-relaxed">
            منصة طلاب دار العلوم تساعدك على معرفة ترتيبك بين زملائك في الكلية،
            ومتابعة أدائك الأكاديمي بسهولة خلال كل فصل دراسي.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 font-tajawal">
            <Button size="lg" className="text-lg px-8 py-6 cursor-pointer">
              اعرف ترتيبك الآن
              <ArrowLeft className="size-5 mr-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 cursor-pointer"
            >
              تصفح النتائج
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col border items-center gap-2 p-6 rounded-2xl bg-muted/50"
            >
              <stat.icon className="size-8 text-primary mb-1" />
              <span className="text-3xl font-bold font-reem-kufi">
                {stat.value}
              </span>
              <span className="text-muted-foreground font-tajawal text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h3 className="text-3xl sm:text-4xl font-bold font-reem-kufi text-center mb-4">
          ماذا نقدم لك؟
        </h3>
        <p className="text-muted-foreground font-tajawal text-center mb-12 max-w-xl mx-auto">
          أدوات مصممة خصيصًا لمساعدة طلاب دار العلوم على التفوق والنجاح
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative flex flex-col items-center text-center p-8 rounded-2xl border bg-card transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-5 flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="size-7" />
              </div>
              <h4 className="text-xl font-bold font-reem-kufi mb-3">
                {feature.title}
              </h4>
              <p className="text-muted-foreground font-tajawal text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
