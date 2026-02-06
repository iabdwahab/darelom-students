import Link from "next/link";

export default function Header() {
  return (
    <header className="flex border-b items-center justify-center container mx-auto py-5">
      <h1 className="text-5xl font-bold font-reem-kufi text-center">
        <Link href="/">منصة طلاب دار العلوم</Link>
      </h1>
    </header>
  );
}
