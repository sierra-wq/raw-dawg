import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { resetCustomerPassword } from "@/store/authStore";

export async function POST(req: Request) {

    const { email } = await req.json();

    try {
        const customerReset = await resetCustomerPassword(email);

        if (customerReset.userErrors && customerReset.userErrors.length) {
            return NextResponse.json({ ok: false, errors: customerReset.userErrors }, { status: 400 });
        }

        return NextResponse.json({ ok: true, message: "Password reset email sent" }, { status: 200 });


    } catch (error) {
        console.error("Password reset error:", error);
        return NextResponse.json({ ok: false, errors: error instanceof Error ? [{ message: error.message }] : [{ message: "An unknown error occurred" }] }, { status: 500 });
    }


    
}
