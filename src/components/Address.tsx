'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/store/authProvider"
import { useCart } from "@/store/provider"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Toggle } from "./ui/toggle"
import { Edit } from "lucide-react"
import { updateCustomerAddress } from "@/store/authStore"
import { cleanInput } from "@/lib/utils"


export const ShippingAddressSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name is too short")
    .max(50, "First name too long"),

  lastName: z
    .string()
    .min(2, "Last name is too short")
    .max(50, "Last name too long"),

  phone: z
    .string()
    .min(7, "Phone number is too short")
    .max(20, "Phone number is too long")
    .regex(/^\+?[0-9\s\-().]+$/, "Enter a valid phone number"),

  address1: z
    .string()
    .min(3, "Street address is too short")
    .max(100, "Street address is too long"),

  address2: z
    .string()
    .min(3, "Street address is too short")
    .max(100, "Street address is too long")
    .optional()
    .or(z.literal("")),

  company: z
    .string()
    .min(2, "Company name is too short")
    .max(100, "Company name too long")
    .optional()
    .or(z.literal("")),
  
  country: z
    .string()
    .min(2, "Country name is too short")
    .max(50, "Country name too long"),

  city: z
    .string()
    .min(2, "City name is too short")
    .max(50, "City too long"),

  state: z
    .string()
    .min(2, "State is required")
    .max(50, "State too long"),

  zip: z
    .string()
    .regex(/^\d{5}(-\d{4})?$/, "Enter a valid ZIP code"), // US ZIP or ZIP+4
}).transform((data) => cleanInput(data) );

export type ShippingAddressType = z.infer<typeof ShippingAddressSchema>;

export default function Address() {
      const { customer, updateAddress } = useAuth();
      const router = useRouter();
      const [edit , setEdit] = useState(false);
      const { cart } = useCart(); // optional: attach cart.id
      const form = useForm({
        resolver: zodResolver(ShippingAddressSchema),
        defaultValues: {
          ...customer?.address as ShippingAddressType,
          state: customer?.address?.province as string
        }
      });
        const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
      } = form;
  
        useEffect(() => {
        if (customer) {
          reset({
            firstName: customer.address?.firstName as string,
            lastName: customer.address?.lastName as string,
            phone: customer.address?.phone as string,
            address1: customer.address?.address1 as string,
            address2: customer.address?.address2 as string,
            company: customer.address?.company as string,
            country: customer.address?.country as string,
            city: customer.address?.city as string,
            state: customer.address?.province as string,
            zip: customer.address?.zip as string,
          });
        }
      }, [customer, reset]);





  async function onSubmit(values:  ShippingAddressType) {
    const shippingValues = values as ShippingAddressType;
      const res = await updateAddress({
        firstName: shippingValues.firstName,
        lastName: shippingValues.lastName,
        phone: shippingValues.phone,
        address1: shippingValues.address1,
        address2: shippingValues.address2,
        company: shippingValues.company,
        country: shippingValues.country,
        city: shippingValues.city,
        province: shippingValues.state,
        zip: shippingValues.zip,
      });

      if (!res.ok) {
        alert(res.errors?.map((e: any) => e.message).join(", "));
        return;
      }

      //window.location.href = "/account";
  }
    
      
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card className="text-primary bg-quaternary">
            <CardHeader className=" relative">
              <CardTitle className="text-2xl">Shipping Address</CardTitle>
              
              <Toggle
      aria-label="Toggle edit"
      size="sm"
      variant="outline"
      onClick={()=> setEdit(!edit)}
      className="absolute top-3 text-lg font-black right-6 data-[state=on]:bg-primary hover:bg-transparent data-[state=on]:text-secondary data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500"
    >
      <Edit />
      Edit
    </Toggle>
            
            </CardHeader>

            <CardContent className="grid gap-6">
              <FieldSet>
                <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="firstname">Firstname</FieldLabel>

                  {edit && <FieldDescription className="text-surface/70">
                    Enter your first name
                  </FieldDescription>}

                  <Input
                    id="firstname"
                    className="focus:border-2 focus-within:border-primary"
                    {...register("firstName")}
                  />

                  <FieldError>
                    {errors.firstName?.message}
                  </FieldError>
                </Field>

                <Field>
                  <FieldLabel htmlFor="lastname">Lastname</FieldLabel>

                  {edit && <FieldDescription className="text-surface/70">
                    Enter your last name
                  </FieldDescription>}

                  <Input
                    id="lastname"
                    className="focus:border-2 focus-within:border-primary"
                    {...register("lastName")}
                  />

                  <FieldError>
                    {errors.lastName?.message}
                  </FieldError>
                </Field>
                
                {/* Phone Number */}
                <Field>
                  <FieldLabel htmlFor="phone">Phone</FieldLabel>

                  {edit && <FieldDescription className="text-surface/70">
                    Enter your Phone name
                  </FieldDescription>}

                  <Input
                    id="phone"
                    className="focus:border-2 focus-within:border-primary"
                    {...register("phone")}
                  />

                  <FieldError>
                    {errors.phone?.message}
                  </FieldError>
                </Field>


                  {/* Street Address */}
                  <Field>
                    <FieldLabel htmlFor="address1"> Address Line *</FieldLabel>

                  
                    <Input
                      id="address1"
                      type="text"
                      
                      className="focus:border-2 focus-within:border-primary"
                      {...register("address1")}
                    />

                    <FieldError>{errors.address1?.message}</FieldError>
                  </Field>

                  {/* Street Address 2*/}
                  <Field>
                    <FieldLabel htmlFor="address2"> Address Line 2</FieldLabel>

                  
                    <Input
                      id="address2"
                      type="text"
                      
                      className="focus:border-2 focus-within:border-primary"
                      {...register("address2")}
                    />

                    <FieldError>{errors.address2?.message}</FieldError>
                  </Field>

                  {/* Company */}
                  <Field>
                    <FieldLabel htmlFor="company">Company</FieldLabel>

                    {edit && <FieldDescription className="text-surface/70">
                      Enter Your Company
                    </FieldDescription>}

                    <Input
                      id="company"
                      className="focus:border-2 focus-within:border-primary"
                      {...register("company")}
                    />

                    <FieldError>
                      {errors.company?.message}
                    </FieldError>
                  </Field>

                  {/* City */}
                  <Field>
                    <FieldLabel htmlFor="city">City</FieldLabel>

                    {edit && <FieldDescription className="text-surface/70">
                      Enter Your City
                    </FieldDescription>}

                    <Input
                      id="city"
                      className="focus:border-2 focus-within:border-primary"
                      {...register("city")}
                    />

                    <FieldError>
                      {errors.city?.message}
                    </FieldError>
                  </Field>

                  {/* Country */}
                  <Field>
                    <FieldLabel htmlFor="country">Country</FieldLabel>

                    {edit && <FieldDescription className="text-surface/70">
                      Enter Your Country
                    </FieldDescription>}

                    <Input
                      id="country"
                      className="focus:border-2 focus-within:border-primary"
                      {...register("country")}                      
                    />

                    <FieldError>
                      {errors.country?.message}
                    </FieldError>
                  </Field>

                  {/* State */}
                  <Field>
                    <FieldLabel htmlFor="state">State</FieldLabel>

                    {edit && <FieldDescription className="text-surface/70">
                      Enter Your State
                    </FieldDescription>}

                    <Input
                      id="state"
                      className="focus:border-2 focus-within:border-primary"
                      {...register("state")}
                    />

                    <FieldError>
                      {errors.state?.message}
                    </FieldError>
                  </Field>

                  {/* Zip */}
                  <Field>
                    <FieldLabel htmlFor="zip">Zip</FieldLabel>   

                    {edit && <FieldDescription className="text-surface/70">
                      Enter Your Zip
                    </FieldDescription>}

                    <Input
                      id="zip"
                      className="focus:border-2 focus-within:border-primary"
                      {...register("zip")}
                    />

                    <FieldError>
                      {errors.zip?.message}
                    </FieldError>
                  </Field>



                  
                </FieldGroup>
              </FieldSet>
            </CardContent>

            <CardFooter className="flex flex-col justify-center gap-3">
              <Button
                type="submit"
                disabled={isSubmitting || !edit}
                className="bg-primary text-secondary font-bold w-full"
              >
                {isSubmitting ? "Updating ..." : "Update Details"}
              </Button>

            
            </CardFooter>
          </Card>
        </form>
    )


}
