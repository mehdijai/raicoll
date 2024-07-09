import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET() {
  const songs = await prisma.song.findMany({
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
