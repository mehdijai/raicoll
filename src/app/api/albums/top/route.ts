import { albums } from "@/lib/data";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ albums: albums.splice(0, 3) }, { status: 200 });
}
