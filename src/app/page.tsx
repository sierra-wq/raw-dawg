'use client'
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, CheckCircle, CircleX,  MoveLeft, MoveRight  } from "lucide-react";
import Wave1 from "@/assets/layered-waves-haikei (1).svg"
import Wave2 from "@/assets/layered-waves-haikei (2).svg"
import Wave4 from "@/assets/layered-waves-haikei (4).svg"
import Dog from "@/assets/Raw Dawg_iconlogo_41.svg"

import img1 from "@/assets/product1.png"
import img2 from "@/assets/product2.png"
import img3 from "@/assets/product3.png"
import img4 from "@/assets/product4.png"
import img5 from "@/assets/RAW DAWG-PRODUCT -04.png"
import img6 from "@/assets/contents-01.webp"
import img7 from "@/assets/meal2.png"
import img8 from "@/assets/RAW-DAWG-PRODUCT_bg-removed.png"

import img9 from "@/assets/RAW DAWG-PRODUCT -28.webp"
import img10 from "@/assets/rebellion2.png"
import img11 from "@/assets/RAW DAWG-PRODUCT -56.webp"



import { useState } from "react";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import { items } from "@/constants/constants";
import SubscriberDialog from "@/components/SubscriberDialogue";
import NotificationDialog from "@/components/NotificationDialogue";

export default function Home() {

  const router = useRouter();
  const [open, setOpen] = useState(true);
  
      
  const reels = ['No Seed Oils.', 'No Fillers.', 'No Grains.', 'No Synthetics.','No Bullsh*t.'];
  
  
  
  const [activeProduct , setActiveProduct] = useState(0);

const handleProductClick = (side: "left"  | "right") => {
  if (side === "left") {
    if (activeProduct > 0) {
      setActiveProduct(activeProduct - 1);
    } else {
      setActiveProduct(0);
    }
  } else {
    if (activeProduct < 2) {
      setActiveProduct(activeProduct + 1);
    } else {
      setActiveProduct(2);
    }
  }
};



  return (

    <div className="bg-primary overflow-hidden flex-col">
       
        <div  className="h-[100vh]  sm:h-[90vh] bg-black/30 bg-blend-darken bg-[url(..\/assets\/RAW-14.webp)] bg-cover lg:bg-center bg-right flex items-center justify-center lg:justify-end ">
             
            <div className=" lg:ms-10 lg:mt-20 font-germania relative w-10/12 sm:w-6/12  text-6xl  sm:text-9xl lg:text-7xl lg:w-4/12  flex flex-col items-center lg:items-start gap-5 ps-5">
                
                <p className=" mt-16 text-white text-start lg:text-left  text-wrap uppercase ">
                  Feed Instinct.
                  <br />
                  Not Industry.
                </p>
                <Button
                    onClick={() => router.push('/Products')}
                    variant={'outline'}
                    className="mt-2 h-auto text-xl bg-white rounded-[8rem] font-germania hover:bg-tertiary hover:text-primary px-4 py-4 min-w-[10em]"
                    style={{ boxShadow: 'inset 8px 7px 6px rgba(0,0,0,0.15),inset -8px -7px 6px rgba(255,255,255,0.3)' }}
                  >
                    Shop All Blends
                  </Button>
                
            </div>

        </div>

      <SubscriberDialog open={open} setOpen={setOpen} />

       


        <section className="pb-24 pt-12 flex flex-col items-center justify-between font-germania bg-[#EAE9EE]  w-full ">
           <div className="relative justify-self-center w-10/12  overflow-hidden mb-24  sm:mb-24 ">
          <div className="flex justify-center animate-marquee whitespace-nowrap  gap-32">
            {[...reels,].map((item, index) => (
              <span
                key={index}
                className="flex font-germania items-center justify-center  text-quaternary text-xl sm:text-2xl  sm:px-6"
              >
                 {item}
              </span>
            ))}
          </div>
        </div>
          
          <p className=" text-5xl sm:text-9xl w-8/12 sm:w-10/12 text-center   text-quaternary font-germania">Meet the  Lineup</p>
          <div className="flex flex-col  w-10/12 items-center   ">
             <div className=" -mt-40">
              <img alt="All Raw Dawg blends" className="w-[80em]  sm:w-[94em]  rounded-xl " src={img5.src} />
            </div> 
            <div className="w-full flex flex-col lg:flex-row   justify-center items-center gap-6">
              {items.slice(0, 3).map((item, index) => (
                <div
                  key={item.name}
                  onMouseEnter={()=> {setActiveProduct(index)}}
                  className={` rounded-2xl border-2 p-6 transition-colors cursor-pointer group w-9/12  sm:w-2/3 lg:w-1/3 hover:bg-tertiary hover:text-white ${
                    activeProduct === index
                      ? " text-quinary border-tertiary"
                      : " text-quinary border-none"
                  }`}
                >
                  <div className="flex flex-col items-center  h-full">
                  
                      <p className="text-lg sm:text-3xl lg:w-[6em] text-center  ">{item.name}</p>

                    <span className="flex flex-col lg:flex-row mt-5  items-center gap-4 justify-center">   
                      
                        <p className="font-light text-sm sm:text-xl  ">{item.tags[0]}</p>

                        <Button
                          onClick={() => router.push(`/Products/${item.id}`)}
                          className=" bg-quaternary  text-sm sm:text-base text-primary group-hover:bg-primary group-hover:text-quaternary border-quaternary border-2"
                        >
                          Add to Cart
                        </Button> 
                    
                    </span>
                    
                    
                      <p className="mt-3 text-xs sm:text-base italic font-arvo font-light">{item.discription}</p>
                    
                    
                    
                  </div>
                </div>
              ))}
            </div>
          </div>

           <div className=" justify-center  sm:flex">
          
          <Button
            onClick={() => router.push('/Products')}
            variant={'outline'}
            className="mt-10 hover:bg-primary hover:text-quaternary border-quaternary border-2 text-primary bg-quaternary  sm:text-2xl font-germania font-bold h-auto"
          >
            Shop Raw Blends
          </Button>
        </div>


        </section>

        
       
       

      <section className="flex flex-col justify-around items-center lg:items-stretch gap-y-16 lg:flex-row lg:justify-center p-4  gap-x-16 w-full justify-self-center my-36">
                   
                   <div className="w-4/6 sm:w-2/6 lg:w-1/6 flex flex-col items-center ">
                            <div className="border-2 rounded-2xl border-secondary w-72 h-64 bg-cover bg-[url(..\/assets\/contents-01.webp)]" />
                            <p className="text-center mt-8 font-germania text-lg sm:text-xl"> We use whole-animal, ethically sourced ingredients </p>
                   </div>

                  <div className="w-4/6 sm:w-2/6 lg:w-1/6 flex flex-col items-center ">
                            <div className="border-2 rounded-2xl border-secondary w-72 h-64 bg-cover bg-center bg-[url(..\/assets\/product-in-fridge.webp)] " />
                            <p className="text-center mt-8 font-germania text-lg sm:text-xl"> Raw and frozen to preserve nutrients and protect instinct </p>
                   </div>
                   <div className="w-4/6 sm:w-2/6 lg:w-1/6 flex flex-col items-center ">
                            <div className="border-2 rounded-2xl border-secondary w-72 h-64 bg-cover bg-center bg-[url(..\/assets\/dog-eating.webp)]" />
                            <p className="text-center mt-8 font-germania text-lg sm:text-xl"> And deliver it straight to your door. <br /> Ancestral nutrition made simple! </p>
                   </div>
        
        </section>
        


        <section className="py-24 mt-20 flex flex-col items-center bg-primary font-arvo text-quinary">
          <p className="mb-16 text-5xl  md:text-7xl w-10/12 sm:w-full font-germania font-bold text-quinary text-center">THE SECRET’S  <br className="sm:hidden" /> OUT…  AND IT’S  <br className="sm:hidden" /> RAW DAWG.</p>
          <div className="w-11/12 xl:w-10/12 flex  gap-6 ">
             
             <div className="relative  flex lg:hidden justify-center">
              <div className="relative w-[18em] h-[18em] sm:w-[28rem] sm:h-[28rem] rounded-full overflow-hidden  ">
                <img src={img7.src} alt="Raw Dawg bowl" className="w-full h-full object-cover" />
                
              </div>
            </div>
            
            <div className="flex flex-col items-center justify-center gap-10 w-10/12 text-center lg:text-right ">
              <div>
                <p className="text-2xl font-germania">Whole-Animal Nutrition</p>
                <p className="mt-3 leading-relaxed text-sm sm:text-xl">The ancestral diet built for the modern dog. Nose-to-tail exactly as nature intended.</p>
              </div>
              <div>
                <p className="text-2xl font-germania">Restores Instinct & Immunity</p>
                <p className="mt-3 leading-relaxed text-sm sm:text-xl">Raw food feeds the microbiome, supports digestion, fuels energy, and strengthens immunity. The way a species-appropriate diet should.</p>
              </div>
            </div>
            
            <div className="relative  h-[10em] lg:w-10/12 lg:h-[32rem]  hidden lg:flex justify-center">
              <div className="absolute -top-12  w-[10em] h-[10em] lg:w-[74rem] lg:h-[42rem] rounded-full overflow-hidden bg-[url(..\/assets\/meal2.png)] bg-cover ">
                
                
              </div>
            </div>
            <div className="flex flex-col  items-center justify-center gap-10 w-10/12 text-center lg:text-left ">
              <div>
                <p className="text-2xl font-germania">Canine-Grade Ingredients</p>
                <p className="mt-3 leading-relaxed text-sm sm:text-xl">We feed dogs according to their biology. Rooted in evolution, not trendy human marketing or industry shortcut</p>
              </div>
              <div>
                <p className="text-2xl font-germania">Lab Verified</p>
                <p className="mt-3 leading-relaxed text-sm sm:text-xl">Every batch is pathogen-tested and verified for safety.without sacrificing the natural trace nutrients your dog's biology depends on.</p>
              </div>
            </div>
           
          </div>
        </section>

          

            <div className="w-full mb-32 py-16 bg-quinary flex flex-col items-center justify-center gap-16">
              <div className="text-5xl sm:text-7xl gap-y-8 font-germania text-primary px-4 justify-self-start items-center leading-[5rem] flex flex-col-reverse lg:flex-row">
                <p className="text-center ">Some things are better raw… <br/> including our ingredients. </p>
                 <Dog className=" justify-self-end fill-primary size-60" />
              </div>
             
                 <Button
                    onClick={() => router.push('/Ingredients')}
                    variant={'outline'}
                    className="mt-2 h-auto text-xl bg-white rounded-[8rem] font-germania hover:bg-tertiary hover:text-primary px-4 py-4 min-w-[10rem]"
                    style={{ boxShadow: 'inset 8px 7px 6px rgba(0,0,0,0.15),inset -8px -7px 6px rgba(255,255,255,0.3)' }}
                  >
                    Learn More
                  </Button>
             
            </div>

          


        <section className="mt-10   font-arvo text-quinary border-tertiary overflow-scroll sm:overflow-hidden  rounded-lg w-full lg:w-11/12  flex-col justify-items-center justify-self-center">
            <p className="mb-6 text-5xl w-10/12 sm:w-11/12 sm:text-7xl text-center  font-bold font-germania ">Not All “Dog Food” Is Food </p>
            <p className="mb-8  font-light text-sm w-10/12 text-center sm:text-lg italic"> Here’s how Raw Dawg stacks up against the industry. </p>
            
            
          
        </section>

        <section className="mb-10 px-2 sm:p-0  font-arvo text-quinary border-tertiary overflow-scroll sm:overflow-hidden  rounded-lg w-full lg:w-11/12  flex-col justify-items-center justify-self-center">
                <table className="w-full lg:w-11/12  justify-self-start sm:justify-self-center overflow-x-scroll no-scrollbar rounded-md bg-quaternary/30 table-fixed">
                <thead className="">
                    <tr className="text-sm sm:text-3xl">
                        <th></th>
                        <th>
                          <p className=" font-germania font-bold">Dry Food</p>
                        </th>
                        {/* <th><img alt="Progress Steps" className="w-28 my-4 justify-self-center " src="https://magicspoon.com/cdn/shop/files/MS_G_VARIETY4_DCA_HERO.png?v=1738958405"/></th> */}
                        <th>
                          <p className=" font-germania font-bold">Gently Cooked</p>
                        </th>
                       
                        
                        <th className="bg-tertiary lg:rounded-t-2xl text-primary font-bold font-germania ">
                          <p className="my-8">Raw Dawg</p>
                          </th>
                        
                    </tr>
                </thead>
                <tbody className="text-center font-extralight italic text-sm sm:text-2xl leading-[2rem]">
                    <tr className=" border-y py-20 border-quaternary border-collapse ">
                        <td className="text-center p-5 sm:p-10 align-middle  font-bold font-germania ">Heat-Free</td>
                        <td className="p-5 sm:p-10 align-middle ">< CircleX className=" size-4 sm:size-14  mx-auto" /></td>
                         <td className=" p-5 sm:p-10 align-middle ">< CircleX className=" size-4 sm:size-14  mx-auto" /></td>
                        <td className=" p-5 sm:p-10 align-middle bg-tertiary ">< CheckCircle className=" size-4 sm:size-14  mx-auto stroke-[#39FF14]" /></td>
                        
                        
                    </tr>

                    <tr className=" border-y py-20 border-quaternary border-collapse ">
                        <td className="text-center  p-5 sm:p-10 align-middle  font-bold font-germania ">Species-Appropriate Ingredients</td>
                        <td className="p-5 sm:p-10 align-middle ">< CircleX className=" size-4 sm:size-14  mx-auto" /></td>
                         <td className="p-5 sm:p-10 align-middle ">< CircleX className=" size-4 sm:size-14  mx-auto" /></td>
                        <td className="p-5 sm:p-10 align-middle bg-tertiary ">< CheckCircle className=" size-4 sm:size-14  mx-auto stroke-[#39FF14]" /></td>
                        
                        
                    </tr>

                    <tr className=" border-y py-20 border-quaternary border-collapse ">
                        <td className="text-center  p-5 sm:p-10 align-middle  font-bold font-germania ">No fillers or synthetics</td>
                        <td className="p-5 sm:p-10 align-middle ">< CircleX className=" size-4 sm:size-14  mx-auto" /></td>
                         <td className="p-5 sm:p-10 align-middle ">< CircleX className=" size-4 sm:size-14  mx-auto" /></td>
                        <td className="p-5 sm:p-10 align-middle bg-tertiary ">< CheckCircle className=" size-4 sm:size-14  mx-auto stroke-[#39FF14]" /></td>
                        
                        
                    </tr>
                    <tr className=" border-y py-20 border-quaternary border-collapse ">
                        <td className="text-center  p-5 sm:p-10 align-middle  font-bold font-germania ">100 % Animal Based</td>
                        <td className="p-5 sm:p-10 align-middle ">< CircleX className=" size-4 sm:size-14 mx-auto" /></td>
                        <td className="p-5 sm:p-10 align-middle "><CircleX className=" size-4 sm:size-14  mx-auto" /></td>
                        <td className="p-5 sm:p-10 align-middle bg-tertiary ">< CheckCircle className=" size-4 sm:size-14  mx-auto stroke-[#39FF14]" /></td>
                        
                        
                    </tr>
                    <tr className=" border-y py-20 border-quaternary border-collapse ">
                        <td className="text-center  p-5 sm:p-10 align-middle  font-bold font-germania ">Built For Longevity</td>
                        <td className="p-5 sm:p-10 align-middle ">< CircleX className=" size-4 sm:size-14  mx-auto" /></td>
                         <td className="p-5 sm:p-10 align-middle ">< CheckCircle className=" size-4 sm:size-14   mx-auto" /></td>
                        <td className="p-5 sm:p-10 align-middle bg-tertiary ">< CheckCircle className=" size-4 sm:size-14  mx-auto stroke-[#39FF14]" /></td>
                        
                        
                    </tr>
                  
                    
                </tbody>
            </table>
        </section>

        

      
        {/* <section className=" w-full  flex-col my-24  mb-0 font-arvo justify-items-center justify-self-center">
            <p className="my-10 text-7xl text-quinary font-germania font-bold"> Recipes </p>
            <p className="w-3/5 text-center text-quinary/70 mb-10 text-xl font-satisfy font-light"> 
                 REAL, RAW INGREDIENTS… EXACTLY HOW YOUR DOG LIKES IT.
            </p>
            <div className="flex py-5 justify-between items-center w-8/12 ">
                <div className="w-3/5 border-2 bg-quinary  text-primary rounded-xl p-5 text-3xl ">
                    <div className="my-4 flex items-center justify-between ">
                      <p className="text-4xl w-3/5 font-germania"> {items[activeProduct].name} </p>
                      
                      <div >
                        <Button variant={'outline'} onClick={() => handleProductClick('left') } className="bg-quinary text-primary  hover:bg-primary hover:text-quinary  border-primary rounded-full size-12 " > 
                          <MoveLeft style={{ width: '2rem' , height: '2rem' }} /> 
                        </Button> 
                        <Button variant={'outline'} onClick={() => handleProductClick('right')} className="bg-quinary text-primary  hover:bg-primary hover:text-quinary  border-primary rounded-full size-12 ms-5" > 
                          <MoveRight style={{ width: '2rem' , height: '2rem' }}/> 
                        </Button>
                      </div>

                    </div>
                    <div>
                      <ul className="flex text-2xl px-4 font-germania  mb-4 gap-8 list-disc">
                            {
                              items[activeProduct].tags.map((item,index) => (
                                  <li className="" key={index}> {item} </li>
                              ))
                            }
                      </ul>
                      <p className="text-base italic font-light ">
                        {items[activeProduct].detail}
                      </p>
                    </div>
                    
                </div>
                <div className="w-2/5    flex justify-center">
                
                <img alt="Progress Steps" className=" w-96  my-4 justify-self-center  " src={items[activeProduct].img.src}/>
                                    
                </div>
                    
            </div>

          
        </section> */}


        <section className="my-40 py-8 text-quinary bg-[#EAE9EE] w-full  font-arvo flex-col justify-items-center justify-self-center">
            
            <div className="flex justify-between items-center w-full  ">
                 
                 <div className=" hidden  text-3xl lg:relative lg:block font-serif w-[46em] h-[26em] text-center ">

                    
                  
                    <div className=" rounded-2xl  -top-44 absolute border-secondary w-[44em] h-[36em] bg-cover bg-top bg-[url(..\/assets\/rebellion2.png)] pointer-events-none" />
                            

                  </div> 



              <div className="relative z-10 py-4  flex flex-col  items-center text-center gap-6 px-6">
                  <center><p className="text-4xl sm:text-7xl  xl:text-7xl mb-6 lg:mb-16 font-germania text-tertiary/80 text-center " style={{ lineHeight: '1.5' }}>
                    The rebellion against Big Pet Food starts in your dog’s bowl.
                  </p>
                    
                  <p className=" w-2/3 text-sm sm:text-xl leading-relaxed  text-tertiary font-bold sm:font-normal sm:text-secondary/70" style={{lineHeight:'1.5'}}>
                    Decades of ultra-processing, fillers, synthetic vitamins, and profit-driven shortcuts have turned dog food into a
                    billion-dollar lie, and our dogs are paying the price.
                  </p>

                  <div className=" rounded-2xl lg:hidden -z-10 top-[20em] left-0 absolute border-secondary w-[32em] h-[24em] bg-cover bg-top bg-[url(..\/assets\/social_img1.jpg)] pointer-events-none" />
                        
                  <Button
                    onClick={() => router.push('/About')}
                    variant={'outline'}
                    className="my-8 h-auto text-xl sm:text-2xl bg-white rounded-[8rem] font-germania hover:bg-tertiary hover:text-primary px-10 py-4 min-w-[10rem] "
                    style={{ boxShadow: 'inset 8px 7px 6px rgba(0,0,0,0.15),inset -8px -7px 6px rgba(255,255,255,0.3)' }}
                  >
                    Learn More
                  </Button></center>
                </div>

                  
                  

                  
            </div>
          
        </section>

         
        
          <section className="flex flex-col w-full  items-center  p-4 gap-x-32  justify-self-center py-24 ">
                   
                   <p className="text-center text-6xl w-10/12 sm:w-8/12 sm:text-7xl text-tertiary font-germania"> Get intimate with  <span className="text-6xl mt-4 block sm:text-7xl"> @my.rawdawg </span></p>
                   
                   <div className="mt-16 gap-5  self-center w-full  overflow-x-scroll no-scrollbar flex">
                       <div className=" grow flex flex-col items-center ">
                            <div className="border-2 rounded-2xl border-secondary w-[20em] h-[26em] sm:w-[30em] sm:h-[36em] bg-cover bg-[url(..\/assets\/social_img1.jpg)]" />
                            </div>

                  <div className=" grow flex flex-col items-center">
                            <div className="border-2 rounded-2xl border-secondary w-[20em] h-[26em] sm:w-[30em] sm:h-[36em] bg-cover bg-center bg-[url(..\/assets\/social_img2.jpg)]" />
                            </div>
                   <div className=" grow flex flex-col items-center ">
                            <div className="border-2 rounded-2xl border-secondary w-[20em] h-[26em] sm:w-[30em] sm:h-[36em] bg-cover bg-[url(..\/assets\/social_img3.jpg)]" />
                            </div>
                   </div>
                  
        </section>
     

     

       
     
       



    </div>
    
  );
}
