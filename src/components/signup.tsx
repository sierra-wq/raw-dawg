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
import { set, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/store/authProvider"
import { useCart } from "@/store/provider"
import { useRouter } from "next/navigation"

const SignupSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    email: z.email("please use the correct email "),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Please retype your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type SignupFormType = z.infer<typeof SignupSchema>;

export default function SignUp() {
      const {  signup } = useAuth();
      const router = useRouter();
      const { cart } = useCart(); // optional: attach cart.id
      const form = useForm({
        resolver: zodResolver(SignupSchema),
      });
        const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
      } = form;
        
     async function onSubmit(values: SignupFormType ) {
       const signupValues = values as SignupFormType;
          const res = await signup({
            firstName: signupValues.firstName,
            email: signupValues.email,
            password: signupValues.password,
            cartId: cart?.id,
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
                                <CardHeader>
                                <CardTitle>SignUp</CardTitle>
                                <CardDescription className="text-surface font-bold">
                                    Join the Pack. Stay Raw
                                    
                                </CardDescription>
                                </CardHeader>
                                
      <CardContent className="grid gap-6">
        <FieldSet>
          <FieldGroup>
            {/* FIRST NAME */}
            <Field>
              <FieldLabel htmlFor="firstname">Firstname</FieldLabel>

              <FieldDescription className="text-surface/70">
                Enter your first name
              </FieldDescription>

              <Input
                id="firstname"
                placeholder="Max Leiter"
                className="focus:border-2 focus-within:border-primary"
                {...register("firstName")}
              />

              <FieldError>
                {errors.firstName?.message}
              </FieldError>
            </Field>

            {/* Email */}
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>

              <FieldDescription className="text-surface/70">
                Enter your email
              </FieldDescription>

              <Input
                id="email"
                placeholder="Max Leiter"
                className="focus:border-2 focus-within:border-primary"
                {...register("email")}
              />

              <FieldError>
                {errors.email?.message}
              </FieldError>
            </Field>

            {/* PASSWORD */}
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>

              <FieldDescription className="text-surface/70">
                Must be at least 8 characters long.
              </FieldDescription>

              <Input
                id="password1"
                type="password"
                placeholder="••••••••"
                className="focus:border-2 focus-within:border-primary"
                {...register("password")}
              />

              <FieldError>
                {errors.password?.message}
              </FieldError>
            </Field>

            {/* CONFIRM PASSWORD */}
            <Field>
              <FieldLabel htmlFor="password">Re-Type Password</FieldLabel>

              <FieldDescription className="text-surface/70">
                Retype your password.
              </FieldDescription>

              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="focus:border-2 focus-within:border-primary"
                {...register("confirmPassword")}
              />

              <FieldError>
                {errors.confirmPassword?.message}
              </FieldError>
            </Field>
          </FieldGroup>
        </FieldSet>
      </CardContent>

      
                               <CardFooter className="flex flex-col justify-center gap-3">
                                <Button type="submit" disabled={isSubmitting} className="bg-primary text-quaternary font-bold  w-full">{isSubmitting ? "Creating account..." : "Sign Up"}</Button>
                                <Button className="bg-primary/40 text-primary font-bold w-full">Cancel</Button>
                                </CardFooter>
      
    
                            </Card>
        </form>
    )


}
