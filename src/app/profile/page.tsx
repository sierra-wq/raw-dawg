'use client'
import Wave4 from "@/assets/layered-waves-haikei (4).svg"
import { useEffect, useState } from "react"
import { useAuth } from "@/store/authProvider"
import { useCart } from "@/store/provider"
import { useRouter } from "next/navigation"
import Profile from "@/components/profile"
import Address from "@/components/Address"
import { CircleQuestionMark } from "lucide-react"


export default function CustomerProfile() {
  
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

  if (!token) {
    router.replace("/login");
    return null; // prevent flash
  }
  return (
         <div className=" flex-col pb-20 content-center font-acumin justify-items-center bg-primary ">

            <figure className="w-full ">
                <Wave4 className="w-full   fill-quaternary h-60" />
                <figcaption className="sr-only">Decorative wave divider between sections</figcaption>
            </figure>
            <p></p>
            <div className="w-full py-[10rem] gap-[15rem] flex  justify-center    ">
                
                <div className="flex gap-[3rem] w-3/5 max-w-xl max-w   flex-col">
                      <Profile />

                      <Address />
                </div>
                <div className="flex w-2/5 flex-col gap-6">
                      <div className="bg-quaternary p-3">
                        <span className="block text-3xl py-4  font-bold fill-primary text-primary "> <CircleQuestionMark className="inline -mt-4 size-10"/> Don't hold back ! </span>
                        <ul className="p-4  w-4/5 ms-3 block text-lg font-black list-disc  text-primary ">
                            <li>Reach out anytime at <span className="underline hover:text-white hover:cursor-pointer"> 708-555-5555 </span></li>
                            <li>Monday - Friday 9am - 5pm</li>
                            <li>Email us at <span className="underline hover:text-white hover:cursor-pointer"> TpBb5@example.com </span></li>
                            <li> <a className="underline hover:text-white hover:cursor-pointer" href="">Check our  FAQ</a> for answers to common questions </li>
                        </ul>


                      </div>
                </div>
            </div>
            
        </div>
  )
}


