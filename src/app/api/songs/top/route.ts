import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET() {
  const songs = await prisma.song.findMany({
    take: 3,
    include: {
      album: {
        include: {
          artists: true,
        },
      },
    },
  });
  return NextResponse.json({ songs }, { status: 200 });
}
