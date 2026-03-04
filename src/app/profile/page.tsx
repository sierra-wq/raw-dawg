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
         <div className=" flex-col pb-20 content-center font-acumin justify-items-center bg-primary ">

            {/* <figure className="w-full ">
                <Wave4 className="w-full   fill-quaternary h-60" />
                <figcaption className="sr-only">Decorative wave divider between sections</figcaption>
            </figure> */}
           
            <div className="w-full py-[10rem] gap-[15rem] flex  justify-center    ">
                
                <div className="flex gap-[3rem] w-3/5 max-w-xl max-w   flex-col">
                      <Profile />

                      <Address />
                </div>
                <div className="flex w-2/5 flex-col gap-6 font-germania">
                      <div className="bg-quaternary p-3">
                        <span className="block text-3xl py-4  font-bold fill-primary text-primary "> <CircleQuestionMark className="inline -mt-4 size-10"/> Don't hold back ! </span>
                        <ul className="p-4  w-4/5 ms-3 block text-lg font-black list-disc  text-primary ">
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
