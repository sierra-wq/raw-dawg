'use client'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
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
import { Edit } from "lucide-react"
import { Toggle } from "./ui/toggle"
import { cleanInput } from "@/lib/utils"


const AccountSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters").optional().or(z.literal("")),
  phone : z.string()
  .min(7, "Phone number is too short")
  .max(20, "Phone number is too long")
  .regex(/^\+?[0-9\s\-().]+$/, "Enter a valid phone number").optional().or(z.literal("")),
  email: z.email("please use the correct email "),
}).transform((data) => cleanInput(data));

type AccountFormType = z.infer<typeof AccountSchema>;

export default function Profile() {
      const {  customer, customerUpdate } = useAuth();
      const router = useRouter();
      const [edit , setEdit] = useState(false);
      const { cart } = useCart(); // optional: attach cart.id
      const form = useForm({
        resolver: zodResolver(AccountSchema),
        defaultValues: {
          ...customer
        }
      });
        const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
      } = form;
        
  async function onSubmit(values:  AccountFormType) {
    const loginValues = values as AccountFormType;
      const res = await customerUpdate({
        firstName: loginValues.firstName,
        lastName: loginValues.lastName,
        phone: loginValues.phone,
      });

      if (!res.ok) {
        alert(res.errors?.map((e: any) => e.message).join(", "));
        return;
      }

      //window.location.href = "/account";
  }
  
  useEffect(() => {
  if (customer) {
    reset({
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
      phone: customer.phone,
    });
  }
}, [customer, reset]);
      
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="font-arvo">
          <Card className="text-primary bg-quaternary">
            <CardHeader className=" relative">
              <CardTitle className="text-3xl font-germania">My Profile</CardTitle>
              
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

            <CardContent className="grid gap-6 ">
              <FieldSet>
                <FieldGroup>
                <Field>
                  <FieldLabel className="text-lg" htmlFor="firstname">Firstname</FieldLabel>

                  {edit && <FieldDescription className="text-surface/70">
                    Enter your first name
                  </FieldDescription>}

                  <Input
                    id="firstname"
                    disabled={!edit}
                    placeholder="Max Leiter"
                    className="focus:border-2 focus-within:border-primary"
                    {...register("firstName")}
                  />

                  <FieldError>
                    {errors.firstName?.message}
                  </FieldError>
                </Field>

                <Field>
                  <FieldLabel className="text-lg" htmlFor="lastname">Lastname</FieldLabel>

                  {edit && <FieldDescription className="text-surface/70">
                    Enter your last name
                  </FieldDescription>}

                  <Input
                    id="lastname"
                    disabled={!edit}
                    className="focus:border-2 focus-within:border-primary"
                    {...register("lastName")}
                  />

                  <FieldError>
                    {errors.lastName?.message}
                  </FieldError>
                </Field>

                <Field>
                  <FieldLabel className="text-lg" htmlFor="phone">Phone</FieldLabel>

                  {edit && <FieldDescription className="text-surface/70">
                    Enter your Phone name
                  </FieldDescription>}

                  <Input
                    id="phone"
                    disabled={!edit}
                    className="focus:border-2 focus-within:border-primary"
                    {...register("phone")}
                  />

                  <FieldError>
                    {errors.phone?.message}
                  </FieldError>
                </Field>


                  {/* Email */}
                  <Field>
                    <FieldLabel className="text-lg" htmlFor="email">Email</FieldLabel>

                  
                    <Input
                      id="email"
                      type="text"
                      disabled
                      className="focus:border-2 focus-within:border-primary disabled:text-primary disabled:bg-secondary disabled:cursor-not-allowed"
                      {...register("email")}
                    />

                    <FieldError>{errors.email?.message}</FieldError>
                  </Field>

                  
                </FieldGroup>
              </FieldSet>
            </CardContent>

            <CardFooter className="flex flex-col justify-center gap-3">
              <Button
                type="submit"
                disabled={isSubmitting || !edit}
                className="bg-primary text-secondary font-germania text-2xl w-full"
              >
                {isSubmitting ? "Updating ..." : "Update Details"}
              </Button>

            
            </CardFooter>
          </Card>
        </form>
    )


}
