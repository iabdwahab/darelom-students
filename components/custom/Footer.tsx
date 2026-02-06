import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30 mt-16">
      <div className="container mx-auto px-4 pt-10 pb-4 font-tajawal text-center text-muted-foreground text-sm leading-loose space-y-4">
        <p className="font-bold text-foreground text-base">تنويه هام</p>
        <p>
          النتائج والترتيبات المعروضة على هذه المنصة{" "}
          <span className="font-bold text-destructive">
            لا تُعد وثائق رسمية
          </span>
          {"، "}
          ولا يمكن الاعتماد عليها كبديل عن النتائج الرسمية الصادرة من الكلية.
        </p>

        <p>
          الهدف من تواجد النتائج على هذه المنصة هو تمكين الطلاب من متابعة أدائهم
          الأكاديمي بشكل مستمر، ومعرفة ترتيبهم بين زملائهم؛ مما يساعدهم على
          تحسين أدائهم في الفصول الدراسية القادمة.
        </p>

        <Separator className="" />
        <p>
          هذه المنصة هي مبادرة شخصية من أحد طلاب كلية دار العلوم — جامعة
          القاهرة.
        </p>
      </div>
    </footer>
  );
}
