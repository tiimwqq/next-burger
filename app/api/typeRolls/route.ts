import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
    const rollTypes = await prisma.rollType.findMany();
    return NextResponse.json(rollTypes)
}