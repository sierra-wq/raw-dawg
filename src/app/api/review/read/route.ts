import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/mongodb";
import { Review } from "@/lib/mongodb";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const productId = searchParams.get("productId");

  if (!productId) {
    return NextResponse.json({ ok: false, error: "Missing productId" }, { status: 400 });
  }

  await connectMongo();

  const reviews = await Review.find({ productId })
    .sort({ createdAt: -1 })
    .lean();

  return NextResponse.json({ ok: true, reviews });
}

