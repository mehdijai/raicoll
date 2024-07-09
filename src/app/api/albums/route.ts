import prisma from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET() {
  const albums = await prisma.album.findMany({
    include: {
      artists: true,
    },
  });
  return NextResponse.json({ albums }, { status: 200 });
}
