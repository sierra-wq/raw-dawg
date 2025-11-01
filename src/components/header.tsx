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

export default function Header() {

  return (

   <header className="bg-white flex-col">
        <p className="bg-accent w-full px-2 text-2xs font-medium text-secondary text-center">
            hellow this is the announcement message! <span className="font-extrabold ps-2 underline underline-offset-2"> View More</span> 
        </p>

        <div className="px-2 py-3 flex  justify-between items-center content-center bg-secondary">
            <Button variant={'outline'} className="text-sm h-auto w-2/12 rounded-[2rem]"> <Activity/> Get Plan</Button>
            <a href="/" className="mb-2 text-accent font-bold text-2xl font-satisfy "> RAW DAWG </a>
            <Button variant={'outline'} className=" rounded-full w-10 h-auto " > <User/> </Button>
        </div>
    </header>
  );
}
