'use client'

import { Button } from "@/components/ui/button";
import {  useRouter } from "next/navigation";

import Wave1 from "@/assets/layered-waves-haikei (1).svg"
import Wave2 from "@/assets/layered-waves-haikei (2).svg"
import Wave3 from "@/assets/layered-waves-haikei (3).svg"
import Wave4 from "@/assets/layered-waves-haikei (4).svg"
import Wave from "@/assets/layered-waves-haikei.svg"

export default function Products() {

    const router = useRouter();
    const items = [
    {
      title: 'Item 1',
      content: 'Content 1',
    },
    {
      title: 'Item 2',
      content: 'Content 2',
    },
    {
      title: 'Item 3',
      content: 'Content 3',
    },
     {
      title: 'Item 3',
      content: 'Content 3',
    },
     {
      title: 'Item 3',
      content: 'Content 3',
    },
  ];


  return (
         <div className=" flex-col bg-primary content-center justify-items-center font-arvo ">

                <div className="bg-quaternary w-full py-36 text-center flex-col justify-items-center h-[30rem]">
                    <p className="text-7xl mt-10 text-primary capitalize  font-satisfy font-extrabold w-7/12 ">Human-grade, all-natural dog food made easy.</p>
                </div>

                 <figure className="w-full ">
          <Wave3 className="w-full -mt-40 bg-transparent fill-primary" />
          <figcaption className="sr-only">Decorative wave divider between sections</figcaption>
        </figure>
                
                <div className="text-3xl w-7/12 p-2 mt-10 justify-between flex">
                    <Button className="h-auto w-[10rem] hover:text-primary hover:bg-tertiary text-quaternary/60 bg-quaternary/30 font-bold text-xl rounded-[2rem]"> Shop All  </Button>
                    <Button className="h-auto w-[10rem] hover:text-primary hover:bg-tertiary text-quaternary/60 bg-quaternary/30 font-bold text-xl rounded-[2rem]"> Beef </Button>
                    <Button className="h-auto w-[10rem] hover:text-primary hover:bg-tertiary text-quaternary/60 bg-quaternary/30 font-bold text-xl rounded-[2rem]"> Chiken </Button>
                    <Button className="h-auto w-[10rem] hover:text-primary hover:bg-tertiary text-quaternary/60 bg-quaternary/30 font-bold text-xl rounded-[2rem]"> Turkey </Button>
                </div>



                <div className=" w-full flex py-20 flex-col items-center justify-center ">
                    <div className="w-10/12  mt-10 py-10 flex flex-wrap justify-around gap-[3rem]">

                        {
                  items.slice(0,4).map((item, index) => (
                     <div className="bg-quaternary/70 group rounded-lg hover:bg-quaternary hover:text-primary text-primary/60  w-1/5 text-clip text-center">
                      <img alt="Progress Steps" className="w-40 my-8 justify-self-center " src="https://magicspoon.com/cdn/shop/files/MS_G_VARIETY4_DCA_HERO.png?v=1738958405"/>
                     <span className="text-lg block mt-8"> 12552 reviews</span>
                     <p className="text-3xl font-bold text-center group-hover:text-primary/70 "> Lorem ipsum dolor sit amet consectetur Quae, quia</p>
                     <p className="text-4xl font-extrabold mt-4 mb-3 text-primary group-hover:text-surface"> $45+ <span className="ms-1 group-hover:text-secondary text-quaternary/60 line-through"> $100</span></p>
                     <Button size={'default'} className="my-5 group-hover:bg-primary font-bold border-2  group-hover:text-quaternary bg-tertiary text-primary w-3/4 "> Shop Now </Button>
                  </div>
                  ))
                 }
                        
                    </div>

                    <Button variant={'link'}  className="text-quaternary p-4 my-20 text-2xl  font-semibold ">
                        Load More
                    </Button>

                   
                </div>
            


                    



        </div>
  )
}