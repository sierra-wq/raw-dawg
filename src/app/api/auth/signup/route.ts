import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { signup } from "@/store/authStore";

export async function POST(req: Request) {

    const { email, password, firstName, lastName, phone, acceptsMarketing } = await req.json();
    const token = cookies().get("customer_token")?.value;

    console.log("Signup request received with data:", { email, firstName, lastName, phone, acceptsMarketing });
    console.log("Token from cookies:", token);
    if (!token) {
        try {
            const {customerCreate} = await signup({ email, password, firstName, lastName, phone, acceptsMarketing });

            if (customerCreate.userErrors && customerCreate.userErrors.length) {
                return NextResponse.json({ ok: false, errors: customerCreate.userErrors }, { status: 400 });
            }
            console.log("Customer created:", customerCreate.customer);
            if (customerCreate.customer) {
                const loginResponse = await fetch("http://localhost:3000/api/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                });
               
                const { ok, customer } = await loginResponse.json();
                console.log("Login response:", ok , customer);
                if (ok) {
                    return NextResponse.json({ ok: true, customer }, { status: 200 });
                }
            }




        } catch (error) {
            console.error("Signup error:", error);
            return NextResponse.json({ ok: false, errors: error instanceof Error ? [{ message: error.message }] : [{ message: "An unknown error occurred" }] }, { status: 500 });
        }
    }

    return NextResponse.json({ ok: false, message: "Already signed up" }, { status: 400 });
}
