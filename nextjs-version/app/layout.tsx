import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import './globals.css';

const cairo = Cairo({
  variable: '--font-cairo',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'منصة طلاب دار العلوم',
  description:
    'منصة طلاب دار العلوم هي منصة تهدف إلى التعريف بكلية دار العلوم جامعة القاهرة وتسهيل الوصول إلى المصادر التعليمية الأساسية الخاصة بالكلية.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} antialiased`}>{children}</body>
    </html>
  );
}
