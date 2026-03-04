import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { resetPasswordByUrlApi } from "@/store/authStore";

export async function POST(req: Request) {

    const {password , resetUrl} = await req.json();
    try {
    const customerResetByUrl = await resetPasswordByUrlApi(password, resetUrl);
    if (customerResetByUrl.userErrors && customerResetByUrl.userErrors.length) {
      return NextResponse.json({ ok: false, errors: customerResetByUrl.userErrors }, { status: 400 });
    }
        
    return NextResponse.json({ ok: true, customer: customerResetByUrl?.customer, message: "Password reset successfully" }, { status: 200 });
    
  } catch (error) {
    console.error("Password reset error:", error);
    return NextResponse.json({ ok: false, errors: error instanceof Error ? [{ message: error.message }] : [{ message: "An unknown error occurred" }] }, { status: 500 });
  }

}
