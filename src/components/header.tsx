'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Activity, CheckCircle, CircleX, Cross, FacebookIcon, Instagram, InstagramIcon, LogIn, Minus, MoveLeft, MoveRight, ShoppingBag, TwitterIcon, User, X } from "lucide-react";
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Logo from "@/assets/RawDawg3.svg";
import { useState } from "react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  function handleLogIn() {
    router.push("/login");
  }
  function handlePlan() {
    router.push("/Plan");
  }
  return (

   <header className=" absolute w-full top-0 flex-col font-arvo">
        <p className="bg-primary w-full px-2 text-2xs font-medium text-quaternary text-center">
            hellow this is the announcement message! <span className="font-extrabold ps-2 underline underline-offset-2"> View More</span> 
        </p>

        <div className="px-2 py-3 flex  justify-center items-center content-center relative ">
            <Button onClick={()=> handlePlan()} variant={'outline'} className=" absolute left-0 text-sm bg-primary text-tertiary hover:bg-white ms-3 hover:text-quaternary font-bold h-auto w-1/12 rounded-[2rem]"> <Activity/> Get Plan</Button>
            <a href="/" className=" "> <Logo style={{width: '15rem', height: '4rem'}} className="fill-primary"/>  </a>

            <div className="absolute right-0  ">
                  <Button onClick={()=> handleLogIn() } variant={'outline'} size={'icon'} className=" bg-primary hover:bg-white text-quaternary p-0 rounded-full me-3 group " > <User className=" group-hover:stroke-quaternary stroke-tertiary "/> </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size={'icon'} className="bg-primary hover:bg-white text-quaternary p-0 rounded-full me-3 group"> <ShoppingBag className=" group-hover:stroke-quaternary stroke-tertiary" /></Button>
              </SheetTrigger>
              <SheetContent className="sm:max-w-[30rem] bg-primary">
                <SheetHeader className="  " >
                  <SheetTitle className=" items-center text-3xl flex text-quaternary justify-between font-arvo">
                    <p>Your Cart</p>
                    <SheetClose asChild>
                      <X className="size-8 hover:cursor-grab hover:stroke-error" />
                    </SheetClose>
                  </SheetTitle>
                  
                  <SheetDescription>
                   Some Product Description or Something
                  </SheetDescription>
              </SheetHeader>
                <div className=" h-4/5 py-6 overflow-y-auto px-4">
                  <div className="relative flex gap-3 border-b-2 pb-2 border-quaternary ">
                      <Minus className="absolute top-0 right-0 hover:cursor-grab hover:stroke-quaternary" />
                      <img src="https://images.pexels.com/photos/5789123/pexels-photo-5789123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="product" className="w-1/4 h-1/2" />
                      <div className="flex flex-col justify-between text-quaternary w-full ">
                          <p className=" text-xl font-arvo">Product Name</p>
                          <p className=" text-base font-bold self-end">Price</p>
                      </div>
                  </div>
                
                </div>
                <SheetFooter className=" flex flex-col font-arvo text-quaternary pe-4">
                  <div className="flex justify-between items-end my-2">
                      <p className="text-xl font-bold ">
                        Total ({"5 Items"})
                      </p>
                      <p className="text-2xl font-bold text-quaternary "> 55$  </p>
                  </div>
                  <Button className=" border-4 border-quaternary hover:text-primary hover:bg-quaternary  text-2xl font-bold  rounded-[2rem] " type="submit">Checkout</Button>
                  
                </SheetFooter>
               
                  
              </SheetContent>
            </Sheet>
              </div>
            <div>
              
            </div>
        </div>        
    </header>
  );
}



