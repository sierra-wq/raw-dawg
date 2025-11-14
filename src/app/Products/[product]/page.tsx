'use client'

import { Button } from "@/components/ui/button";
import { Check, Minus, Plus, Star, Verified } from "lucide-react";
import {  useRouter } from "next/navigation";
import { useState } from "react";
import Wave1 from "@/assets/layered-waves-haikei (1).svg"
import Wave2 from "@/assets/layered-waves-haikei (2).svg"
import Wave3 from "@/assets/layered-waves-haikei (3).svg"
import Wave4 from "@/assets/layered-waves-haikei (4).svg"
import Wave from "@/assets/layered-waves-haikei.svg"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function Products() {

    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState<'one-time' | null>('one-time');

    const handleSelect = (option: 'one-time' | null) => setSelectedOption(option);


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
         <div className="pb-40 flex flex-col bg-quaternary/70 content-center justify-items-center font-arvo ">

               <div className="flex pt-20 bg-quaternary ">
                 <div className="w-3/5 flex flex-col items-center justify-center ">
                    <img alt="Progress Steps" className="w-3/5 " src="https://magicspoon.com/cdn/shop/files/MS_G_VARIETY4_DCA_HERO.png?v=1738958405"/>
                </div>

                <div className="w-2/5 flex flex-col items-center justify-center ">
                    <div className="w-10/12 text-primary mt-10 py-10 flex flex-col items-start gap-[1rem]">
                        <p className="text-4xl"> Chiken Porta </p>
                        <p className="text-lg"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illo quidem 
                            similique ea voluptas aspernatur. </p>
                        <p className="text-lg"> 1458 Reviews </p>
                        
                    <Button variant='link' className=" my-2  p-0 h-auto font-semibold decoration-slice">
                        Load More
                    </Button>
                      
                      <div className="flex flex-wrap gap-[2rem] justify-between ">
                          {
                              items.map((item, index) => (
                                  <div key={index} className= "text-primary inline-flex gap-1 items-center w-[13.5rem]">
                                      <Check/>
                                      <p className="break-all">  jdnjcljkjncsdjkncjsdn </p>
                                  </div>
                              ))
                          }
                      </div>

                      <div tabIndex={0} onClick={() => handleSelect('one-time')} className="flex w-full justify-between bg-primary mt-5 border-2 py-2 px-4 rounded-[4rem]">
                          <div className="flex items-center gap-[3rem] w-2/3">
                              <input type='radio' checked={selectedOption === 'one-time'} onChange={() => {}} className="peer checked:text-quaternary ring-quaternary checked:ring-quaternary focus:ring-quaternary  border-0 size-6 text-primary  text-center "/>
                              <p className="text-quaternary/60 peer-checked:text-quaternary text-lg font-bold"> One Time purchase </p>
                          </div>
                          <p className="me-5 text-quaternary peer-checked:text-quaternary/60 text-lg font-bold "> 56$ </p>
                      </div>

                      <div tabIndex={0} onClick={() => handleSelect(null)} className="flex w-full justify-between bg-primary mt-5  py-2 px-4 rounded-[4rem]">
                          <div className="flex items-center gap-[3rem] w-2/3">
                              <input type='radio' checked={selectedOption !== 'one-time'} onChange={() => {}} className="peer checked:text-quaternary ring-quaternary checked:ring-quaternary focus:ring-quaternary  border-0 size-6 text-primary  text-center "/>
                              <p className="text-quaternary/60 peer-checked:text-quaternary text-lg font-bold"> One Time purchase </p>
                          </div>
                          <p className="me-5 text-quaternary peer-checked:text-quaternary/60 text-lg font-bold "> 56$ </p>
                      </div>

                      <div tabIndex={0}  className="flex w-full justify-between bg-primary mt-5   rounded-[4rem]">
                          
                          <div className="flex items-center w-2/3 ms-3">
                              <Button variant={'outline'} size={'icon'} className="rounded-full border-quaternary hover:bg-quaternary/10"> <Minus className="stroke-quaternary"/> </Button>
                              <p className="text-3xl mx-5 text-quaternary"> 0 </p>
                              <Button variant={'outline'} size={'icon'} className="rounded-full border-quaternary hover:bg-quaternary/10 "> <Plus className="stroke-quaternary"/> </Button>
                              
                          </div>
                          <Button variant={'outline'} className="h-full w-2/3 p-4 hover:bg-quaternary hover:text-xl font-bold rounded-[4rem] bg-quaternary "> Add to Cart </Button>
                      </div>
                        
                    </div>

                
                  
                </div>
              </div>

               <figure className="w-full ">
          <Wave2 className="w-full fill-quaternary" />
          <figcaption className="sr-only">Decorative wave divider between sections</figcaption>
        </figure>

              <div className="flex flex-col items-center text-primary justify-center">
                      <div className="w-3/5   flex-col justify-between">
                              <p className="text-4xl font-extrabold text-center my-10"> What our Dawg's Say </p>
                              <div className="flex justify-between items-center " >
                                  <div className="text-xl flex flex-col justify-between " >
                                          <p className="text-5xl font-bold"> 
                                                  3.8 / 5  
                                          </p>
                                          <p className="text-center leading-[4rem]  "> 
                                                  2564 <span className="text-sm ">reviews</span> 
                                          </p>
                                      </div>
                                        
                                        <Select >
                                            <SelectTrigger className="p-4 w-2/6 rounded-[1rem] border-none bg-quaternary focus:ring-2 focus:ring-primary focus:border-primary data-[placeholder]:text-primary/80 ">
                                                <SelectValue placeholder="All Reviews" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-quaternary text-primary shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] focus-within:ring-black" >
                                                <SelectItem className="data-[highlighted]:bg-primary data-[highlighted]:font-bold data-[highlighted]:text-quaternary" value="5">Apple</SelectItem>
                                                <SelectItem value="4">Banana</SelectItem>
                                                <SelectItem value="3">Blueberry</SelectItem>
                                                <SelectItem value="2">Grapes</SelectItem>
                                                <SelectItem value="1">Pineapple</SelectItem>
                                            </SelectContent>
                                        </Select>
                                </div>
                                    
                                {
                                     items.map((item,index) => (
                                             <div key={index} className=" w-11/12 my-10 py-2" >
                                                        <p className="  w-1/5 flex my-4"> 
                                                                                {items.slice(0,(5-index)).map((item,index) => (
                                                                                        < Star key={index} className="fill-quaternary stroke-quaternary size-5" />
                                                                                ))} 
                                                        </p>
                                                        <p className="leading-[2rem] text-2xl flex items-center  font-bold "> 
                                                        Mike Hanna <span className="ms-5"> <Verified className="stroke-quaternary" /></span> 
                                                        </p>
                                                        <p className=" text-base text-quaternary capitalize leading-[2rem] font-semibold "> 
                                                        am really suprised 
                                                        </p>
                                                        <p className=" font-roboto font-light leading-[1.8rem] "> 
                                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis deleniti laborum tempora 
                                                                laboriosam inventore labore! Voluptatem, officiis? Laborum laudantium adipisci modi, 
                                                                amet itaque deleniti doloribus facere odit. Ullam recusandae fugiat placeat deleniti ea 
                                                                harum voluptates officia inventore, ratione accusantium iure incidunt, 
                                                                impedit dolor expedita soluta magni dicta aspernatur possimus saepe!
                                                        </p>
                                                </div>
                                     ))   
                                }

                                
                        </div>
                        <Button variant={'link'} className="text-quaternary my-10 text-2xl h-auto  font-semibold decoration-slice"> Load More </Button>
                             
              </div>


            


                    



        </div>
  )
}