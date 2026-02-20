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
import { resetPasswordByUrlApi } from "@/store/authStore"
import { useCart } from "@/store/provider"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import z from "zod"



const updatePassword = z.object({
  password: z.string().min(8, "Password must be at least 8 characters long"),
  confirmPassword: z.string().min(8, "Confirm Password must be at least 8 characters long"),
}).superRefine((data, ctx) => {
  if (data.password !== data.confirmPassword) {
    ctx.addIssue({
      code: 'custom',
      path: ["confirmPassword"],
      message: "Passwords do not match",
    });
  } 
});

type UpdatePasswordFormType = z.infer<typeof updatePassword>;

export default function ResetPasswordPage() {
  
  const [formReset , setFormReset] = useState(false);
  const searchParams = useSearchParams();
  const query = searchParams.get("reset_url");
  const [mode, setMode] = useState<"login" | "signup">("login");
  const isSignup = mode === "signup";
  
const { customer, resetPasswordByUrl } = useAuth();
      const router = useRouter();
      const { cart } = useCart(); // optional: attach cart.id
      const form = useForm({
        resolver: zodResolver(updatePassword),
      });
        const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
      } = form;
        
  
      async function onSubmit(values:  UpdatePasswordFormType) {
    const updatePasswordValues = values as UpdatePasswordFormType;
      const res = await resetPasswordByUrl(updatePasswordValues.password, decodeURIComponent(query!));

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
                                        <CardTitle>Update your password </CardTitle>
                                        
                                        </CardHeader>

                                        <CardContent className="grid gap-6 ">
                                        <FieldSet>
                                            <FieldGroup>
                                            {/* Password */}
                                            <Field>
                                                <FieldLabel className="text-xl" htmlFor="password">Password</FieldLabel>

                                                <FieldDescription className="text-surface/70 text-lg">
                                                Enter your new password
                                                </FieldDescription>

                                                <Input
                                                id="password"
                                                type="password"
                                                placeholder="Enter your new password"
                                                className="focus:border-2 text-lg focus-within:border-primary"
                                                {...register("password")}
                                                />

                                                <FieldError>{errors.password?.message}</FieldError>
                                            </Field>

                                            {/*  Password Confirmation */}
                                            <Field>
                                                <FieldLabel className="text-xl" htmlFor="confirmPassword">Confirm Password</FieldLabel>

                                                <FieldDescription className="text-surface/70 text-lg">
                                                Confirm your new password
                                                </FieldDescription>

                                                <Input
                                                id="confirmPassword"
                                                type="password"
                                                placeholder="Confirm your new password"
                                                className="focus:border-2 text-lg focus-within:border-primary"
                                                {...register("confirmPassword")}
                                                />

                                                <FieldError>{errors.confirmPassword?.message}</FieldError>
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


