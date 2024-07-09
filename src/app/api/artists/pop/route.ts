import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET() {
  const artists = await prisma.artist.findMany({
    take: 10,
  });
  return NextResponse.json({ artists }, { status: 200 });
}
