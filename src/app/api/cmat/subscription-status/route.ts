import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ exam: "cmat", premiumActive: false, dailyQuestionsUsed: 0, dailyQuestionsLimit: 10 });
}
