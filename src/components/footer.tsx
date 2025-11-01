import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Activity, CheckCircle, CircleX, FacebookIcon, Instagram, InstagramIcon, LogIn, MoveLeft, MoveRight, TwitterIcon, User, X } from "lucide-react";
import { useState } from "react";

export default function Footer() {

  return (

   <footer className="bg-secondary py-10 px-5 w-full justify-center flex justify-self-center">
            
            <div className=" w-full py-5 flex justify-between  ">
                 <div className=" w-2/6 text-3xl font-arvo text-accent flex flex-col gap-[1.5rem] ">
                      <a  href="/" className="mb-2 font-bold text-5xl font-satisfy "> RAW DAWG </a>
                      
                      <div className="text-sm " style={{lineHeight: '2rem'}}>
                        <a className="me-3" href="/Legal/Terms"> Terms of Use </a>
                        <a className="me-3" href="/Legal/Privacy"> Privacy Policy </a>
                        <a className="me-3" href="/Ingredients"> Ingredients </a>
                        <a className="me-3" href="/Legal/Shipping">  Shipping Policy  </a>
                        <a className="me-3" href="/Faq"> FAQ </a>
                        <a className="me-3" href="/Blg"> Blog </a>
                        <a className="me-3" href="/Legal/Refund"> Refund policy </a>
                        
                          
                      </div>

                      <div className=" flex ">
                        <Button className="w-3/5 me-3 py-6 text-3xl rounded-3xl hover:bg-secondary hover:border-2 hover:border-accent hover:text-accent bg-accent text-secondary">
                            Contact Us
                         </Button>
                        <div className="flex gap-2 flex-grow justify-around items-center ">
                          <a  href="https://www.thefarmersdog.com/"> < InstagramIcon  className="w-10 h-10"/> </a>
                          <a  href="https://www.thefarmersdog.com/"> <FacebookIcon  className="w-10 h-10" /> </a>
                          <a  href="https://www.thefarmersdog.com/"> <TwitterIcon className="w-10 h-10" /> </a>
                        </div>
                      </div>
                     
                  </div>

                  
            
                  <div className="w-3/6 text-3xl font-arvo content-center ">
                     <p className=" my-5 text-accent"> Don't miss out </p>
                     <div>
                        <div className="flex w-4/5 items-center gap-2">
                        <Input className="rounded-3xl py-5 active:outline-none text-accent font-extrabold text-2xl" type="email" placeholder="Email" />
                        <Button type="submit" className="p-5 text-2xl rounded-3xl hover:bg-secondary hover:border-2 hover:border-accent hover:text-accent bg-accent text-secondary" >
                          Subscribe
                        </Button>
                      </div>
                     </div>
                     <p className="text-sm text-neutral-500 mt-8">Feed Instinct. Not Industry. © 2025 Raw Dawg™. All rights reserved.</p>
                  </div> 
            </div>
          
        </footer>
  );
}
