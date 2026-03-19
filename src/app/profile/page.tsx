'use client'
import { useEffect, useState } from "react"
import { useAuth } from "@/store/authProvider"
import { useCart } from "@/store/provider"
import { useRouter } from "next/navigation"
import Profile from "@/components/profile"
import Address from "@/components/Address"
import { CircleQuestionMark } from "lucide-react"


export default function CustomerProfile() {
  
  const router = useRouter();
  const { customer, authenticated, authloading } = useAuth();
  const [loading, setLoading] = useState(true);

  console.log("customer in profile page", customer);
  
  useEffect(() => {
    
    if (!authenticated && !authloading) {
      router.replace("/login");
    } else {
      setLoading(false);
    }
  }, [authenticated, authloading]);



  if (loading) {
    return null;
  }

  
  return (
         <div className=" py-[10rem]   lg:flex pb-20 content-center font-acumin justify-items-center bg-primary ">

           

            <div className="w-10/12 sm:w-8/12 gap-[3rem] lg:gap-[15rem] lg:w-full flex flex-col items-center lg:items-stretch lg:flex-row   font-germania  justify-center ">

                <div className="flex gap-[3rem] w-full max-w-xl max-w   flex-col">
                      <Profile />

                      <Address />
                </div>
                <div className="flex  lg:w-2/5 flex-col gap-6 font-germania">
                      <div className="bg-quaternary p-3">
                        <span className="block text-2xl lg:text-3xl py-4  font-bold fill-primary text-primary "> <CircleQuestionMark className="inline -mt-4 size-10"/> Don't hold back ! </span>
                        <ul className="p-4  ms-3 block  lg:text-lg font-black list-disc  text-primary ">
                            <li>Reach out anytime at <span className="underline hover:text-white hover:cursor-pointer"> 708-555-5555 </span></li>
                            <li>Monday - Friday 9am - 5pm</li>
                            <li>Email us at <a className="underline hover:text-white hover:cursor-pointer" href="mailto:sierra@rawdawgnutrition.com"> sierra@rawdawgnutrition.com </a></li>
                            <li> <a className="underline hover:text-white hover:cursor-pointer" href="/Faq">Check our  FAQ</a> for answers to common questions </li>
                        </ul>


                      </div>
                </div>

            </div> 
           
            
            
        </div>
  )
}
