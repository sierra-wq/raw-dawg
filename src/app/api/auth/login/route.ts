import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { login as shopifyLogin, getCustomer, attachCustomerToCart } from "@/store/authStore";

export async function POST(req: Request) {
  const { email, password, cartId } = await req.json();

  try {
    const data = await shopifyLogin(email, password);
    const errs = data?.customerAccessTokenCreate?.userErrors ?? [];
    if (errs.length) return NextResponse.json({ ok: false, errors: errs }, { status: 400 });

    const token = data.customerAccessTokenCreate.customerAccessToken.accessToken;

    cookies().set("customer_token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
    });

    // optionally attach cart
    if (cartId) {
      try {
        await attachCustomerToCart(token, cartId);
      } catch {
        // ignore attach failures
      }
    }
    const customer = await getCustomer(token);
    return NextResponse.json({ ok: true, customer , token}, { status: 200 });
  } catch (error) {
    cookies().delete("customer_token");
    return NextResponse.json({ ok: false, errors: [{ message: "Login failed" }] }, { status: 500 });
  }




}