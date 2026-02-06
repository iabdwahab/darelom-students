import type { Metadata } from "next";
import { Reem_Kufi, Aref_Ruqaa_Ink, Tajawal } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const reemKufi = Reem_Kufi({
  variable: "--font-reem-kufi",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const arefRuqaaInk = Aref_Ruqaa_Ink({
  variable: "--font-aref-ruqaa-ink",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "منصة طلاب دار العلوم",
  description:
    "منصة تم إنشاؤها عام 2024 بهدف معاونة الطلاب للوصول للمصادر التعليمية المختلفة الخاصة بكلية دار العلوم - جامعة القاهرة.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${reemKufi.variable} ${arefRuqaaInk.variable} ${tajawal.variable} ${arefRuqaaInk.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
