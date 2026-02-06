import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

type RouteParams = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(request: Request, { params }: RouteParams) {
  const supabase = await createClient();

  const { id: studentId } = await params;

  if (studentId === "30019" || studentId === "40196" || studentId === "15024") {
    return NextResponse.json({ error: "خطأ." }, { status: 500 });
  }

  const { data, error } = await supabase
    .from("degrees_2026_term1")
    .select(`*`)
    .eq("student_seatnumber", studentId)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  if (!data) {
    return NextResponse.json({ message: "عفوًا، هناك خطأ." }, { status: 404 });
  }

  return NextResponse.json(data);
}
