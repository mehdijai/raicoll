import { songs } from "@/lib/data";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ songs: songs.slice(0, 9) }, { status: 200 });
}
