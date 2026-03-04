import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getCustomer, updateCustomer } from "@/store/authStore";

export async function POST(req: Request) {

  const customerData = await req.json();
  const token = cookies().get("customer_token")?.value;

  if (token) {
    try {
      const customer = await getCustomer(token);
        if (customer) {
          const {customerUpdate} = await updateCustomer(token, customerData);
          if(customerUpdate?.userErrors && customerUpdate?.userErrors.length) {
            return NextResponse.json({ ok: false, errors: customerUpdate.userErrors }, { status: 400 });
          }
          return NextResponse.json({ ok: true, customer: customerUpdate.customer }, { status: 200 });
        }


    } catch(error) {
        console.error("Update customer error:", error);
        return NextResponse.json({ ok: false, errors: error instanceof Error ? [{ message: error.message }] : [{ message: "An unknown error occurred" }] }, { status: 500 });
  
    }
  }

  return NextResponse.json({ ok: false, message: "No token found" }, { status: 401 });
}