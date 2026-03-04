import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/mongodb";
import {Subscriber} from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    await connectMongo();

    const { email, source } = await req.json();

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();

    await Subscriber.create({
      email: normalizedEmail,
      source: source || "unknown",
    });

   
    return NextResponse.json({ ok: true, message : "Subscribed successfully"  }, { status: 200 });

  } catch (err: any) {
    // Duplicate email error
    if (err.code === 11000) {
      return NextResponse.json({
        ok: false,
        message: "Already subscribed",
      });
    }

    return NextResponse.json({ ok: false, errors: err instanceof Error ? [{ message: err.message }] : [{ message: "An unknown error occurred , Please try again later" }] }, { status: 500 });
        
  }
}