import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ exam: "cmat", message: "Dashboard endpoint — connect to Supabase for live data", sections: ["Quantitative Techniques & Data Interpretation","Logical Reasoning","Language Comprehension","General Awareness"] });
}
