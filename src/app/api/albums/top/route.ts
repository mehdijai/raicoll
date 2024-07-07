import { albums } from "@/lib/data";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ albums: albums.slice(0, 2) }, { status: 200 });
}
