import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { logout as shopifyLogout } from "@/store/authStore";

export async function POST() {
  const token = cookies().get("customer_token")?.value;

  if (token) {
    try {
       const { customerAccessTokenDelete} = await shopifyLogout(token);
        if ( customerAccessTokenDelete?.userErrors && customerAccessTokenDelete.userErrors.length) {
          console.error("Logout error:", customerAccessTokenDelete?.userErrors);
          return NextResponse.json({ ok: false, errors: customerAccessTokenDelete?.userErrors || [{ message: "Failed to revoke token" }] }, { status: 500 });
        }
        console.log("Logout successful, token revoked:", customerAccessTokenDelete?.deletedCustomerAccessTokenId);
        cookies().delete("customer_token");
        return NextResponse.json({ ok: true, deletedCustomerAccessTokenId: customerAccessTokenDelete?.deletedCustomerAccessTokenId }, { status: 200 });
        
    } catch (error) {
      console.error("Logout error:", error);
        return NextResponse.json({ ok: false, errors: error instanceof Error ? [{ message: error.message }] : [{ message: "An unknown error occurred" }] }, { status: 500 });
      // ignore revoke failures
    }
  }

  cookies().delete("customer_token");
  return NextResponse.json({ ok: true, message: "No token found, but any existing token has been deleted" }, { status: 200 });
}