'use client'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useEffect, useState } from "react"
import { useAuth } from "@/store/authProvider"
import { useCart } from "@/store/provider"
import { useRouter } from "next/navigation"
import LogIn from "@/components/login"
import SignUp from "@/components/signup"


export default function Login() {
  
  const { signup, login, authenticated } = useAuth();
  const router = useRouter();
  const { cart } = useCart(); // optional: attach cart.id
  const { customer } = useAuth();
  const [formReset , setFormReset] = useState(false);
  const [mode, setMode] = useState<"login" | "signup">("login");
  const isSignup = mode === "signup";
  
    useEffect(() => { 
        if (authenticated) {
            console.log("User authenticated, redirecting to profile...");
            router.replace("/profile");
        }
    }, [authenticated]);
    
  
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


