'use client'
import { Button } from "@/components/ui/button";
import { Activity, ArrowRight, Minus, Plus, ShoppingBag, ShoppingBasket, User, X } from "lucide-react";
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
import Logo2 from "@/assets/Raw Dawg_logo-3.svg";
import { usePathname, useRouter } from "next/navigation";
import { useCart } from "@/store/provider";
import { useState } from "react";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useAuth } from "@/store/authProvider";
import { Badge } from "./ui/badge";


export default function Header() {
  const router = useRouter();
  const path = usePathname();
  const pathname = usePathname()?.toLocaleLowerCase().split(/\//);
  const { open , setOpen, cart , updateItem, removeItem } = useCart();
  const {customer, logout } = useAuth();
  const [total, setTotal] = useState(0);
  const [count  , setCount] = useState(0);
  const noBg= ["","faq", "products","about","ingredients"].includes(pathname[1] );
  const legal= ["legal", "about"].includes(pathname[1] );
  const productsPath = pathname[1] === "products" && pathname.length === 2;
  const hidePlanCta = pathname[1]?.toLowerCase() === "ingredients";
  const totalSize = cart?.lines.reduce((acc, item) => acc + (item.size * item.quantity), 0) ?? 0;
  const message = process.env.NEXT_PUBLIC_MESSAGE || "Subscribe to get notified when we launch!";
  const minimumOrderQuantity = parseInt(process.env.NEXT_MINIMUM_ORDER_QUANTITY || "15", 10);
  
  function handleLogIn() {
    router.push("/login");
  }
  function handleProfile() {
    router.push("/profile");
  }
  function handlePlan() {
    router.push("/Products");
  }
  
  console.log("cart in header: ", cart);
  
  return (

   <header className=" absolute w-full top-0 flex-col font-acumin">
        <p className={`${noBg || legal ? "bg-primary text-quaternary" : "bg-quaternary text-secondary"} w-full px-2 text-2xs font-germania  text-center`}>
            {message}
            {/* <span className="text-xl ps-2 underline underline-offset-2"> View More</span>  */}
        </p>

        <div className={`px-2 py-3 flex  justify-center items-center content-center relative ${noBg ? "" : "bg-quaternary "}`}>
            {!hidePlanCta && (
              <Button onClick={()=> handlePlan()} variant={'outline'} className={` ${productsPath ? "border-2 border-tertiary" : ""} absolute left-0 text-lg bg-primary text-tertiary hover:bg-white ms-3 hover:text-quaternary font-bold h-auto w-1/12 font-germania rounded-[2rem]`} > <ShoppingBasket/> <span className="hidden lg:block">Get Raw</span> </Button>
            )}
            <a href="/" className=" "> {productsPath  ? <Logo2 style={{width: '15rem', height: '4rem' , }} /> : <Logo style={{width: '15rem',  height: '4rem' , fill :  `${legal ? "#e3dac9" : "#000"}` }} /> } </a>

            <div className="absolute right-2  flex  ">
                  
            
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button  variant={'outline'} size={'icon'} className={` bg-primary hover:bg-white text-quaternary p-0 rounded-full me-3 group ${productsPath ? "border-2 border-tertiary" : ""}`} > <User className=" group-hover:stroke-quaternary stroke-tertiary "/> </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-tertiary font-germania text-primary" align="start">
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
            
            
            <Sheet  open={open}>
              <SheetTrigger asChild>
              <div className="relative">
                  <Badge
          className={`h-5  min-w-5 right-2 -top-2 rounded-full px-1 hover:bg-tertiary hover:text-primary bg-tertiary text-primary font-bold font-mono absolute ${cart ?? "hidden" } ${cart?.totalQuantity === 0 ? "hidden" : ""} `}
        >
          {cart?.totalQuantity && cart?.totalQuantity > 5 ? "5 +" : cart?.totalQuantity }
        </Badge>
                <Button onClick={()=> setOpen(true) } variant="outline" size={'icon'} className={`bg-primary hover:bg-white text-quaternary p-0 rounded-full me-3 group ${productsPath ? "border-2 border-tertiary" : ""}`}> <ShoppingBag className=" group-hover:stroke-quaternary stroke-tertiary" /></Button>
              
              </div>
              </SheetTrigger>
              <SheetContent className="sm:max-w-[30rem] overflow-y-auto bg-primary font-germania">
                <SheetHeader className="  " >
                  <SheetTitle className=" items-center  text-4xl flex text-quaternary justify-between ">
                    <p>Your Cart</p>
                    <SheetClose asChild onClick={()=> setOpen(false)}>
                      <ArrowRight className="size-8 hover:cursor-grab hover:stroke-error" />
                    </SheetClose>
                  </SheetTitle>
                  
                  <SheetDescription className=" text-xl ">
                    All The Products You Have In Your Cart
                  </SheetDescription>
              </SheetHeader>
                <div className="h-4/5  py-6 overflow-y-auto px-4">
                  
                  {cart?.lines.map((item, index) => (
                    
                    <div key={index} className="relative flex gap-3 border-b-2 pb-2 border-quaternary ">
                      <X onClick={() => removeItem(item.id)} className="absolute top-0 right-0 hover:cursor-grab hover:stroke-quaternary" />
                      <img src={item.featuredImage} alt="product" className="w-1/4 h-1/2" />
                      <div className="flex flex-col justify-between text-quaternary w-full ">
                          <p className=" text-xl w-4/5 ">{item.title}</p>
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
                            <p className=" text-xl font-bold self-end">{(item.price ).toFixed(2)}</p>
                          </div>
                      </div>
                    </div>

                  ))}
                
                </div>
                <SheetFooter className=" flex flex-col  text-quaternary pe-4">
                  <div className="flex justify-between items-end my-2">
                      <p className="text-2xl  ">
                        Total : {cart?.totalQuantity}  <span className="text-xl">Items {cart?.totalQuantity ? `(${totalSize} lb)` : ''}</span>
                      </p>
                      <p className="text-3xl font-bold text-quaternary "> {cart?.cost.totalAmount} <span className="text-2xl">$</span>  </p>
                  </div>
                  <p className={` ${totalSize < minimumOrderQuantity ? 'text-error' : 'hidden'}  text-lg font-bold font-arvo mt-2`}>
                    Minimum shippable order is {minimumOrderQuantity} lb.
                  </p>
                  
                  <Button onClick={() => router.push(cart?.checkoutUrl ?? "" )} disabled={totalSize  < minimumOrderQuantity} className="mt-4 border-4 border-quaternary hover:text-primary hover:bg-quaternary  text-3xl p-6 font-bold  rounded-[2rem] " type="submit">Checkout</Button>
                  
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
