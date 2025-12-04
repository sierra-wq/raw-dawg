import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body  =
    await req.json();

    console.log("the data for the call ", body);
    const { productId, customerId, customerName, rating, review } = body;
  const id = customerId.split("/").pop();
  const key = `reviews/${productId}/${id}.json`;

  const data = {
    productId,
    id,
    customerName,
    rating,
    review,
    date: new Date().toISOString(),
  };

  await put(key, JSON.stringify(data), {
    access: "public",
    contentType: "application/json",
  });

  return NextResponse.json({ success: true });
}
