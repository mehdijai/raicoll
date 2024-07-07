import { artists } from "@/lib/data";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ artists: artists.splice(0, 3) }, { status: 200 });
}
