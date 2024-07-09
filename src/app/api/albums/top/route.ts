import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET() {
  const albums = await prisma.album.findMany({
    take: 3,
    include: {
      artists: true,
    },
  });
  return NextResponse.json({ albums }, { status: 200 });
}
