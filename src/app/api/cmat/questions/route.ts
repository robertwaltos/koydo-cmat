import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ exam: "cmat", message: "Questions endpoint — connect to Supabase for question bank", categories: ["Quantitative Techniques & Data Interpretation","Logical Reasoning","Language Comprehension","General Awareness"] });
}
