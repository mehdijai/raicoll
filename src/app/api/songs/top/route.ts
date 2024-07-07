import { songs } from "@/lib/data";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ songs: songs.splice(0, 3) }, { status: 200 });
}
