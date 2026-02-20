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
import { useEffect } from "react"


const LoginSchema = z.object({
  email: z.email("please use the correct email "),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type LoginFormType = z.infer<typeof LoginSchema>;

export default function LogIn() {
      const { customer, login } = useAuth();
      const router = useRouter();
      const { cart } = useCart(); // optional: attach cart.id
      const form = useForm({
        resolver: zodResolver(LoginSchema),
      });
        const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
      } = form;
        
  
      async function onSubmit(values:  LoginFormType) {
    const loginValues = values as LoginFormType;
      const res = await login({
        email: loginValues.email,
        password: loginValues.password,
        cartId: cart?.id,
      });

      if (!res.ok) {
        alert(res.errors?.map((e: any) => e.message).join(", "));
        return;
      }

      window.location.href = "/profile";
  }
    
      
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
      <Card className="text-primary text-2xl bg-quaternary">
        <CardHeader>
          <CardTitle>LogIn</CardTitle>
          <CardDescription className="text-surface text-xl">
            Welcome back, Dawg.
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

              {/* PASSWORD */}
              <Field>
                <FieldLabel className="text-xl" htmlFor="password">Password</FieldLabel>

                <FieldDescription className="text-surface/70 text-lg">
                  Must be at least 8 characters long.
                </FieldDescription>

                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="focus:border-2 text-lg focus-within:border-primary"
                  {...register("password")}
                />

                <FieldError>{errors.password?.message}</FieldError>
              </Field>
            </FieldGroup>
          </FieldSet>
        </CardContent>

        <CardFooter className="flex flex-col justify-center gap-3">

          <a href="/Resetpasswd" className="text-primary text-sm w-full -my-1 hover:underline text-right ">Forgot Password?</a>


          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary text-secondary text-xl font-bold w-full"
          >
            {isSubmitting ? "Logging In..." : "LogIn"}
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
    )


}
