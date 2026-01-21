import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/mongodb";
import { Review } from "@/lib/mongodb";



export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { productId, customerId, customerName, rating, review } = body;
    const id = customerId.split("/").pop();

    await connectMongo();

    const created = await Review.create({
      productId,
      id,
      customerName,
      rating,
      review,
    });

    return NextResponse.json({ ok: true, review: created });
  } catch (err: any) {
    // Duplicate review
    if (err?.code === 11000) {
      return NextResponse.json(
        { ok: false, error: "You already reviewed this product." },
        { status: 409 }
      );
    }

    return NextResponse.json(
      { ok: false, error: err?.message ?? "Server error" },
      { status: 500 }
    );
  }
}


