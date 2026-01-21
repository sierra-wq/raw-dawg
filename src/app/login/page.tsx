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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useForm } from "react-hook-form";
import { set, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Wave4 from "@/assets/layered-waves-haikei (4).svg"
import { useEffect, useState } from "react"
import { useAuth } from "@/store/authProvider"
import { useCart } from "@/store/provider"
import { useRouter } from "next/navigation"
import LogIn from "@/components/login"
import SignUp from "@/components/signup"


export default function Login() {
  
  const { signup, login } = useAuth();
  const router = useRouter();
  const { cart } = useCart(); // optional: attach cart.id
  const { customer } = useAuth();
  const [formReset , setFormReset] = useState(false);
  const [mode, setMode] = useState<"login" | "signup">("login");
  const isSignup = mode === "signup";
  
 const token =
    typeof window !== "undefined"
      ? localStorage.getItem("shopify_customer_token")
      : null;

  if (token) {
    router.replace("/profile");
    return null; // prevent flash
  }
  return (
         <div className=" flex-col pb-20 content-center font-acumin justify-items-center bg-primary ">

              
                <div className="w-full h-screen flex font-germania flex-col items-center justify-center ">
                    <div className="flex w-full max-w-sm  flex-col gap-6">
                        
                        <Tabs defaultValue="login" onValueChange={(value)=> {
                            console.log("the value " , value);
                            setMode(value as "login" | "signup");
                            setFormReset(true);
                        }}>
                            <TabsList className="bg-quaternary  " >
                            <TabsTrigger value="login" className=" text-lg data-[state=active]:bg-primary data-[state=inactive]:text-primary data-[state=active]:font-bold ">LogIn</TabsTrigger>
                            <TabsTrigger value="signup" className=" text-lg data-[state=active]:bg-primary data-[state=inactive]:text-primary data-[state=active]:font-bold  " >Signup</TabsTrigger>
                            </TabsList>
                            <TabsContent value="signup">
                                <SignUp />
                            </TabsContent>
                            <TabsContent value="login">
                                <LogIn />
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            
        </div>
  )
}


