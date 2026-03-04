import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getCustomer, createCustomerAddress , updateCustomerAddress } from "@/store/authStore";

export async function POST(req: Request) {

  const addressData = await req.json();
  const token = cookies().get("customer_token")?.value;

  if (token) {
    try {
      const customer = await getCustomer(token);
        if (customer?.address?.address1 === undefined || customer?.address?.address1 === "" ) {
                const {customerAddressCreate} =  await createCustomerAddress(token,addressData);
                if(customerAddressCreate?.userErrors && customerAddressCreate?.userErrors.length) {
                        return NextResponse.json({ ok: false, errors: customerAddressCreate.userErrors }, { status: 400 });
                }

                return NextResponse.json({ ok: true, customerAddress: customerAddressCreate.customerAddress }, { status: 200 });

        }
        else {
                const {customerAddressUpdate} = await updateCustomerAddress(token,customer.address?.id as string ,addressData)
        
                if(customerAddressUpdate?.userErrors && customerAddressUpdate?.userErrors.length) {
                        return NextResponse.json({ ok: false, errors: customerAddressUpdate.userErrors }, { status: 400 });
                }

                return NextResponse.json({ ok: true, customerAddress: customerAddressUpdate.customerAddress }, { status: 200 });
            }



    } catch(error) {
        console.error("Update customer address error:", error);
        return NextResponse.json({ ok: false, errors: error instanceof Error ? [{ message: error.message }] : [{ message: "An unknown error occurred" }] }, { status: 500 });
  
    }
  }

  return NextResponse.json({ ok: false, message: "No token found" }, { status: 401 });
}