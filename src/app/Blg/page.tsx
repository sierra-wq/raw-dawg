'use client'

import { Button } from "@/components/ui/button";
import {  useRouter } from "next/navigation";

export default function Blg() {

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
         <div className=" flex-col content-center justify-items-center font-arvo ">

                <div className="bg-[url('https://images.pexels.com/photos/5789123/pexels-photo-5789123.jpeg')] w-full py-20 text-center flex-col justify-items-center h-[30rem]">
                    <span className="text-8xl font-extrabold block mt-10 text-accent "> The Raw Dawg Times </span>
                    <p className="text-7xl mt-10 capitalize font-satisfy font-extrabold w-7/12 ">Human-grade, all-natural dog food made easy.</p>
                </div>

                
                <div className="text-3xl w-7/12 p-2 mt-10 justify-between flex">
                    <Button className="h-auto hover:text-secondary hover:bg-accent hover:border-secondary text-accent bg-surface border-2 border-accent font-semibold rounded-[2rem]"> All  </Button>
                    <Button className="h-auto hover:text-secondary hover:bg-accent hover:border-secondary text-accent bg-surface border-2 border-accent font-semibold rounded-[2rem]"> Health </Button>
                    <Button className="h-auto hover:text-secondary hover:bg-accent hover:border-secondary text-accent bg-surface border-2 border-accent font-semibold rounded-[2rem]"> Meal Prep </Button>
                    <Button className="h-auto hover:text-secondary hover:bg-accent hover:border-secondary text-accent bg-surface border-2 border-accent font-semibold rounded-[2rem]"> Breed </Button>
                    <Button className="h-auto hover:text-secondary hover:bg-accent hover:border-secondary text-accent bg-surface border-2 border-accent font-semibold rounded-[2rem]"> Lifestyle </Button>
                </div>

                <div className="text-3xl text-green-900  flex w-7/12 my-10  items-center justify-center mt-10">
                        <input type="text" placeholder="Search" className="caret-accent outline-accent border-2 focus:border-0 focus:text-accent w-8/12 leading-[3rem] text-2xl px-4 rounded-sm" />
                    </div>


                <div className=" w-full flex flex-col items-center justify-center ">
                    <div className="w-10/12 bg-white mt-10 py-10 flex flex-wrap justify-around gap-[3rem]">

                        {
                            items.map((item, index) => (
                                 <div key={index} tabIndex={0} onClick={() => router.push('/Blg/1') } className=" w-3/12 h-[28rem] bg-[url('https://images.pexels.com/photos/9313634/pexels-photo-9313634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center
                          border-4 border-secondary rounded-[0.8rem] flex-col justify-items-center content-end hover:cursor-grab ">
                        
                            <div className="bg-secondary w-full ps-5 pt-5 rounded-lg">
                                <p className="text-lg  capitalize font-extrabold text-surface">Health</p>
                                <p className="text-3xl text-accent font-light ">Food made easy.</p>

                                <p className="text-base  py-5  font-light text-surface ">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos o
                                    amet consectetur adipisicing elit. Dignissimos
                                    ipsa ....
                                </p>
                            
                            </div>

                        </div>    
                            ))
                        } 
                        
                    </div>

                    <Button variant='link' className="text-accent my-20 text-2xl h-auto  font-semibold decoration-slice">
                        Load More
                    </Button>

                   
                </div>
            


                    



        </div>
  )
}