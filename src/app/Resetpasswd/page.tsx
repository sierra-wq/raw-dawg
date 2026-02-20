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
import { useAuth } from "@/store/authProvider"
import { useCart } from "@/store/provider"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import z from "zod"



const ResetPasswordSchema = z.object({
  email: z.email("please use the correct email "),
});

type ResetPasswordFormType = z.infer<typeof ResetPasswordSchema>;


export default function Login() {
  
  const [formReset , setFormReset] = useState(false);
  const [mode, setMode] = useState<"login" | "signup">("login");
  const isSignup = mode === "signup";
  
const { customer, resetPassword } = useAuth();
      const router = useRouter();
      const { cart } = useCart(); // optional: attach cart.id
      const form = useForm({
        resolver: zodResolver(ResetPasswordSchema),
      });
        const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
      } = form;
        
  
      async function onSubmit(values:  ResetPasswordFormType) {
    const resetPasswordValues = values as ResetPasswordFormType;
      const res = await resetPassword(resetPasswordValues.email);

      if (!res.ok) {
        alert(res.errors?.map((e: any) => e.message).join(", "));
        return;
      }

      window.location.href = "/profile";
  }
    
  return (
         <div className=" flex-col pb-20 content-center font-acumin justify-items-center bg-primary ">

              
                <div className="w-full h-screen flex font-germania flex-col items-center justify-center ">
                    <div className="flex w-full max-w-sm  flex-col gap-6">
                        
                              <form onSubmit={handleSubmit(onSubmit)}>
                                    <Card className="text-primary text-2xl  bg-quaternary">
                                        <CardHeader>
                                        <CardTitle>Reset Password</CardTitle>
                                        <CardDescription className="text-surface text-xl">
                                            Dont worry, Dawg. We got you covered.
                                        </CardDescription>
                                        </CardHeader>

                                        <CardContent className="grid gap-6 ">
                                        <FieldSet>
                                            <FieldGroup>
                                            {/* USERNAME */}
                                            <Field>
                                                <FieldLabel className="text-xl" htmlFor="email">Email</FieldLabel>

                                                <FieldDescription className="text-surface/70 text-lg">
                                                Enter your email
                                                </FieldDescription>

                                                <Input
                                                id="email"
                                                type="text"
                                                placeholder="Max Leiter"
                                                className="focus:border-2 text-lg focus-within:border-primary"
                                                {...register("email")}
                                                />

                                                <FieldError>{errors.email?.message}</FieldError>
                                            </Field>

                                           
                                            </FieldGroup>
                                        </FieldSet>
                                        </CardContent>

                                        <CardFooter className="flex flex-col items-end justify-center gap-3">
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="bg-primary text-secondary text-xl font-bold w-full"
                                        >
                                            {isSubmitting ? "Resetting Password..." : "Reset Password"}
                                        </Button>

                                        <Button
                                            type="button"
                                            className="bg-primary/40 text-xl text-primary font-bold w-full"
                                            onClick={() => (window.location.href = "/")}
                                        >
                                            Cancel
                                        </Button>
                                        </CardFooter>
                                    </Card>
                             </form>
                    </div>
                </div>
            
        </div>
  )
}


