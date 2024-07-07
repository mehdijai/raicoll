import { songs } from "@/lib/data";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ songs }, { status: 200 });
}
