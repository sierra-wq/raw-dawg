import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {  FacebookIcon,  InstagramIcon,  TwitterIcon,  } from "lucide-react";
import Wave1 from "@/assets/layered-waves-haikei (1).svg"
import Wave2 from "@/assets/layered-waves-haikei (2).svg"
import Wave3 from "@/assets/layered-waves-haikei (3).svg"
import Wave4 from "@/assets/layered-waves-haikei (4).svg"
import Wave from "@/assets/layered-waves-haikei.svg"

import Logo from "@/assets/RawDawg.svg";

export default function Footer() {

  return (

   <footer className="bg-quaternary  py-10  w-full justify-center flex flex-col justify-self-center">
          
            <div className=" w-full py-5 px-5 flex justify-between  ">
                 <div className=" w-2/6 text-5xl font-germania text-primary flex flex-col gap-[1.5rem] ">
                      <a href="/" className="w-4/5 size-16 "> <Logo style={{width: '20rem', height: '5rem'}} className="fill-primary"/>  </a>
                      
                      <div className="text-lg " style={{lineHeight: '2rem'}}>
                        <a className="me-2 hover:border-b-2 hover:text-2xl hover:border-primary" href="/"> Home </a>
                        <a className="me-2 hover:border-b-2 hover:text-2xl hover:border-primary" href="/Products"> Shop </a>
                        <a className="me-2 hover:border-b-2 hover:text-2xl hover:border-primary" href="/Ingredients"> Ingredients </a>
                        <a className="me-2 hover:border-b-2 hover:text-2xl hover:border-primary" href="/About"> Our Story </a>
                        <a className="me-2 hover:border-b-2 hover:text-2xl hover:border-primary" href="/Faq"> FAQ's </a>
                        <a className="me-2 hover:border-b-2 hover:text-2xl hover:border-primary" href="/Legal/Terms"> Terms of Use </a>
                        <a className="me-2 hover:border-b-2 hover:text-2xl hover:border-primary" href="/Legal/Privacy"> Privacy Policy </a>
                        <a className="me-2 hover:border-b-2 hover:text-2xl hover:border-primary" href="/Legal/Shipping"> Shipping Policy </a>
                        <a className="me-2 hover:border-b-2 hover:text-2xl hover:border-primary" href="/Legal/Refund"> Refund Policy </a>
                      </div>

                      <div className=" flex ">
                        <Button className="w-3/5 me-3 py-6 text-3xl rounded-3xl hover:bg-quaternary hover:border-4 hover:border-primary hover:font-bold hover:text-primary bg-primary text-quaternary">
                            Contact Us
                         </Button>
                        <div className="flex gap-2 flex-grow justify-around items-center ">
                          <a  href="https://www.thefarmersdog.com/"> < InstagramIcon  className="w-10 h-10"/> </a>
                          <a  href="https://www.thefarmersdog.com/"> <FacebookIcon  className="w-10 h-10" /> </a>
                          <a  href="https://www.thefarmersdog.com/"> <TwitterIcon className="w-10 h-10" /> </a>
                        </div>
                      </div>
                     
                  </div>

                  
            
                  <div className="w-3/6 font-arvo content-center ">
                     <p className=" my-2 text-4xl font-germania font-bold text-primary"> JOIN THE PACK </p>
                      <p className="text-lg font-thin  text-primary/60 first-letter:font-germania first-letter:text-3xl"> To get started, drop your <span className="font-germania text-3xl">Email *</span></p>
                     <div className="my-4">
                        <div className="flex w-4/5 items-center gap-2">
                        <Input className="py-5 active:outline-none border-quinary bg-primary text-primary font-extrabold text-2xl" type="email" placeholder="Email" />
                        <Button type="submit" className="p-5 text-2xl font-germania text-tertiary hover:bg-quaternary hover:border-2 border-2 hover:border-primary hover:font-bold hover:text-primary  bg-primary " >
                          Subscribe
                        </Button>
                      </div>
                     </div>
                     <p className="text-sm text-primary/60 mt-8">Feed Instinct. Not Industry. © 2025 Raw Dawg™. All rights reserved.</p>
                  </div> 
            </div>
          
        </footer>
  );
}
