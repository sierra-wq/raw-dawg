import { list } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const productId = searchParams.get("productId");

  // List all blobs for the product
  const { blobs } = await list({ prefix: `reviews/${productId}/` });

  const reviews = [];

  for (const blob of blobs) {
    const data = await fetch(blob.url).then((r) => r.json());
    reviews.push(data);
  }

  return NextResponse.json(reviews);
}
