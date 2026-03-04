import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getCustomer } from "@/store/authStore";

export async function GET() {
  const token = cookies().get("customer_token")?.value;
  console.log("GET /api/auth/me called, token:", token);
  if (!token) return NextResponse.json({ authenticated: false, customer: null });

  try {
    const customer = await getCustomer(token);
    return NextResponse.json({ authenticated: true, customer });
  } catch(error) {
   cookies().delete("customer_token");
   console.error("Failed to fetch customer data, token may be invalid. Token has been deleted." , error);
    return NextResponse.json({ authenticated: false, customer: null  }, { status: 401 });
  }
}