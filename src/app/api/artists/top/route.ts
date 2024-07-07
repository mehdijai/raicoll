import { artists } from "@/lib/data";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ artists: artists.slice(0, 2) }, { status: 200 });
}
