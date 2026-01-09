'use client'
import { Button } from "@/components/ui/button";
import { Activity, Minus, Plus, ShoppingBag, User, X } from "lucide-react";
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
import { useRouter } from "next/navigation";
import { useCart } from "@/store/provider";
import { useState } from "react";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useAuth } from "@/store/authProvider";
import { Badge } from "./ui/badge";
export default function Header() {
  const router = useRouter();
  const { open , setOpen, cart , updateItem, removeItem } = useCart();
  const {customer, logout } = useAuth();
  const [total, setTotal] = useState(0);
  const [count  , setCount] = useState(0);

  function handleLogIn() {
    router.push("/login");
  }
  function handleProfile() {
    router.push("/profile");
  }
  function handlePlan() {
    router.push("/Plan");
  }
  return (

   <header className=" absolute w-full top-0 flex-col font-acumin">
        <p className="bg-primary w-full px-2 text-2xs font-medium text-quaternary text-center">
            hellow this is the announcement message! 
            <span className="font-extrabold ps-2 underline underline-offset-2"> View More</span> 
        </p>

        <div className="px-2 py-3 flex  justify-center items-center content-center relative ">
            <Button onClick={()=> handlePlan()} variant={'outline'} className=" absolute left-0 text-lg bg-primary text-tertiary hover:bg-white ms-3 hover:text-quaternary font-bold h-auto w-1/12 font-germania rounded-[2rem]"> <Activity/> Customize Your Plan</Button>
            <a href="/" className=" "> <Logo style={{width: '15rem', height: '4rem' }} />  </a>

            <div className="absolute right-2  flex  ">
                  
            
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button  variant={'outline'} size={'icon'} className=" bg-primary hover:bg-white text-quaternary p-0 rounded-full me-3 group " > <User className=" group-hover:stroke-quaternary stroke-tertiary "/> </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-tertiary text-primary" align="start">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
          { customer && <>
            <DropdownMenuItem onClick={handleProfile}>Profile</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logout}>
              Log out
            </DropdownMenuItem>
          </>}
          {!customer && <>
            <DropdownMenuItem onClick={handleLogIn}>Log In</DropdownMenuItem>
          </>}
      </DropdownMenuContent>
    </DropdownMenu>
            
            
            <Sheet open={open}>
              <SheetTrigger asChild>
              <div className="relative">
                  <Badge
          className={`h-5  min-w-5 right-2 -top-2 rounded-full px-1 hover:bg-tertiary hover:text-primary bg-tertiary text-primary font-bold font-mono absolute ${cart ?? "hidden" } ${cart?.totalQuantity === 0 ? "hidden" : ""} `}
        >
          {cart?.totalQuantity && cart?.totalQuantity > 5 ? "5 +" : cart?.totalQuantity }
        </Badge>
                <Button onClick={()=> setOpen(true) } variant="outline" size={'icon'} className="bg-primary hover:bg-white text-quaternary p-0 rounded-full me-3 group"> <ShoppingBag className=" group-hover:stroke-quaternary stroke-tertiary" /></Button>
              
              </div>
              </SheetTrigger>
              <SheetContent className="sm:max-w-[30rem] bg-primary">
                <SheetHeader className="  " >
                  <SheetTitle className=" items-center text-3xl flex text-quaternary justify-between font-acumin">
                    <p>Your Cart</p>
                    <SheetClose asChild onClick={()=> setOpen(false)}>
                      <X className="size-8 hover:cursor-grab hover:stroke-error" />
                    </SheetClose>
                  </SheetTitle>
                  
                  <SheetDescription>
                    All The Products You Have In Your Cart
                  </SheetDescription>
              </SheetHeader>
                <div className=" h-4/5 py-6 overflow-y-auto px-4">
                  
                  {cart?.lines.map((item, index) => (
                    
                    <div key={index} className="relative flex gap-3 border-b-2 pb-2 border-quaternary ">
                      <Minus onClick={() => removeItem(item.id)} className="absolute top-0 right-0 hover:cursor-grab hover:stroke-quaternary" />
                      <img src={item.featuredImage} alt="product" className="w-1/4 h-1/2" />
                      <div className="flex flex-col justify-between text-quaternary w-full ">
                          <p className=" text-xl font-acumin">{item.title}</p>
                          <div className="flex justify-between mt-3">
                            <div className="flex items-center  ms-3">
                              <Button  onClick={() => {
                                if (item.quantity > 1) {
                                  updateItem(item.id, item.quantity - 1);
                                }
                              } } variant={'outline'} size={'icon'} className="rounded-full w-[1.5rem] h-[1.5rem] border-quaternary hover:bg-quaternary/10"> <Minus className="stroke-quaternary"/> </Button>
                              <p className="text-xl mx-5 text-quaternary"> {item.quantity} </p>
                              <Button onClick={() => {
                                updateItem(item.id, item.quantity + 1);
                              }} variant={'outline'} size={'icon'} className="rounded-full w-[1.5rem] h-[1.5rem] border-quaternary hover:bg-quaternary/10 "> <Plus className="stroke-quaternary"/> </Button>
                              
                            </div>
                            <p className=" text-xl font-bold self-end">{(item.price - (item.sellingPlanId?.priceAdjustments ?? 0)) * item.quantity}</p>
                          </div>
                      </div>
                    </div>

                  ))}
                
                </div>
                <SheetFooter className=" flex flex-col font-acumin text-quaternary pe-4">
                  <div className="flex justify-between items-end my-2">
                      <p className="text-xl font-bold ">
                        Total {cart?.totalQuantity}({" Items"})
                      </p>
                      <p className="text-2xl font-bold text-quaternary "> {cart?.cost.totalAmount}$  </p>
                  </div>
                  <Button onClick={() => router.push(cart?.checkoutUrl ?? "" )} className=" border-4 border-quaternary hover:text-primary hover:bg-quaternary  text-2xl font-bold  rounded-[2rem] " type="submit">Checkout</Button>
                  
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



