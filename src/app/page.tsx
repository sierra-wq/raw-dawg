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
import img5 from "@/assets/product-dog.webp"
import img6 from "@/assets/contents-01.webp"
import img7 from "@/assets/product-varaity.webp"
import img8 from "@/assets/RAW-DAWG-PRODUCT_bg-removed.png"
import img9 from "@/assets/RAW DAWG-PRODUCT -28.webp"
import img10 from "@/assets/dog-eating.webp"
import img11 from "@/assets/RAW DAWG-PRODUCT -56.webp"


import { useState } from "react";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import { items } from "@/constants/constants";

export default function Home() {

  const router = useRouter();
  
      
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

    <div className="bg-primary flex-col">
       
        <div  className="h-[90vh] bg-black/30 bg-blend-darken bg-[url(..\/assets\/RAW-14.webp)] bg-cover bg-center flex items-center justify-end ">
             
            <div className=" ms-10 mt-20 font-germania relative w-4/12 flex flex-col items-start gap-5 ps-5">
                
                <p className="text-7xl mt-16 text-primary text-left  text-wrap uppercase ">
                  Feed Instinct.
                  <br />
                  Not Industry.
                </p>
                <Button
                    onClick={() => router.push('/Products')}
                    variant={'outline'}
                    className="mt-2 h-auto text-2xl bg-primary rounded-[8rem] font-germania hover:bg-tertiary hover:text-primary px-4 py-4 min-w-[8em]"
                    style={{ boxShadow: 'inset 8px 7px 6px rgba(0,0,0,0.15),inset -8px -7px 6px rgba(255,255,255,0.3)' }}
                  >
                    Shop All Blends
                  </Button>
                
            </div>

        </div>


      

        <div className="relative justify-self-center w-10/12 overflow-hidden my-4">
          <div className="flex justify-center animate-marquee whitespace-nowrap  gap-32">
            {[...reels,].map((item, index) => (
              <span
                key={index}
                className="flex font-germania items-center justify-center  text-quaternary text-2xl px-6"
              >
                 {item}
              </span>
            ))}
          </div>
        </div>


        <section className="py-24 flex flex-col items-center  font-germania  w-full">
          <p className="mb-8 text-7xl  text-quaternary font-bold">Meet the Raw Dawg Lineup</p>
          <div className="flex flex-col  w-10/12 items-center">
            <div className="">
              <img alt="All Raw Dawg blends" className="w-[64em] rounded-xl " src={img8.src} />
            </div>
            <div className="w-10/12 flex  gap-4">
              {items.slice(0, 3).map((item, index) => (
                <div
                  key={item.name}
                  className={` rounded-2xl border-2 p-6 transition-colors hover:bg-primary ${
                    activeProduct === index
                      ? "bg-primary/60 text-quinary border-tertiary"
                      : "bg-primary/60 text-quinary border-primary/40"
                  }`}
                >
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <p className="text-3xl text-center ">{item.name}</p>

                    <span className="flex items-center gap-4 justify-center">   <p className="font-light text-xl  ">{item.tags[0]}</p>

                    <Button
                      onClick={() => setActiveProduct(index)}
                      className="self-start bg-tertiary text-primary hover:bg-primary hover:text-quaternary border-quaternary border-2"
                    >
                      Add to Cart
                    </Button> </span>
                    
                    
                      <p className="mt-3 text-base italic font-arvo font-light">{item.discription}</p>
                    
                    </div>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="flex justify-center ">
          
          <Button
            onClick={() => router.push('/Products')}
            variant={'outline'}
            className="mt-10 hover:bg-primary hover:text-quaternary border-quaternary border-2 text-primary bg-quaternary text-2xl font-germania font-bold h-auto"
          >
            Shop Raw Blends
          </Button>
        </div>

       

      <section className="flex  justify-center p-4 gap-x-16 w-10/12 justify-self-center my-36">
                   <div className="w-1/5 flex flex-col items-center ">
                            <div className="border-2 rounded-2xl border-secondary w-80 h-64 bg-cover bg-[url(..\/assets\/contents-01.webp)]" />
                            <p className="text-center mt-8 font-germania text-xl"> we use whole-animal, ethically sourced ingredients </p>
                   </div>

                  <div className="w-1/5 flex flex-col items-center ">
                            <div className="border-2 rounded-2xl border-secondary w-80 h-64 bg-cover bg-center bg-[url(..\/assets\/product-in-fridge.webp)] " />
                            <p className="text-center mt-8 font-germania text-xl"> Raw and frozen to preserve nutrients and protect instinct </p>
                   </div>
                   <div className="w-1/5 flex flex-col items-center ">
                            <div className="border-2 rounded-2xl border-secondary w-80 h-64 bg-cover bg-center bg-[url(..\/assets\/dog-eating.webp)]" />
                            <p className="text-center mt-8 font-germania text-xl"> And deliver it straight to your door. <br /> Ancestral nutrition made simple! </p>
                   </div>
        </section>
        

        <section className="py-24 mt-20 flex flex-col items-center bg-primary font-arvo text-quinary">
          <p className="mb-16 text-6xl  md:text-7xl font-germania font-bold text-quinary text-center">THE SECRET’S OUT… AND IT’S RAW DAWG.</p>
          <div className="w-11/12 xl:w-10/12 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-10 items-center">
            <div className="flex flex-col gap-10 text-right">
              <div>
                <p className="text-4xl font-germania">Whole-Animal Nutrition</p>
                <p className="mt-3 leading-relaxed text-xl">The ancestral diet built for the modern dog. Nose-to-tail exactly as nature intended.</p>
              </div>
              <div>
                <p className="text-4xl font-germania">Restores Instinct & Immunity</p>
                <p className="mt-3 leading-relaxed text-xl">Raw food feeds the microbiome, supports digestion, fuels energy, and strengthens immunity. The way a species-appropriate diet should.</p>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="relative w-[30rem] h-[30rem] bg-quaternary md:w-[38rem] md:h-[38rem] rounded-full overflow-hidden border-8 ">
                <img src={img11.src} alt="Raw Dawg bowl" className="w-full h-full object-cover" />
                
              </div>
            </div>
            <div className="flex flex-col gap-10 text-left">
              <div>
                <p className="text-4xl font-germania">Canine-Grade Ingredients</p>
                <p className="mt-3 leading-relaxed text-xl">We feed dogs according to their biology. Rooted in evolution, not trendy human marketing or industry shortcut</p>
              </div>
              <div>
                <p className="text-4xl font-germania">Lab Verified</p>
                <p className="mt-3 leading-relaxed text-xl">Every batch is pathogen-tested and verified for safety.without sacrificing the natural trace nutrients your dog's biology depends on.</p>
              </div>
            </div>
          </div>
        </section>

          

            <div className="w-full mb-32 py-16 bg-quinary flex flex-col items-center justify-center gap-16">
              <div className="text-7xl gap-y-8 font-germania text-primary px-4 justify-self-start items-center leading-[5rem] flex ">
                <p>Some things are better raw… <br/> including our ingredients. </p>
                 <Dog className=" justify-self-end fill-primary size-60" />
              </div>
             
                 <Button
                    onClick={() => router.push('/Ingredients')}
                    variant={'outline'}
                    className="mt-2 h-auto text-3xl bg-primary rounded-[8rem] font-germania hover:bg-tertiary hover:text-primary px-4 py-4 min-w-[15rem]"
                    style={{ boxShadow: 'inset 8px 7px 6px rgba(0,0,0,0.15),inset -8px -7px 6px rgba(255,255,255,0.3)' }}
                  >
                    Learn More
                  </Button>
             
            </div>

          


        <section className="my-10   font-arvo text-quinary border-tertiary  rounded-lg w-11/12 py-10 flex-col justify-items-center justify-self-center">
            <p className="mb-10 text-7xl  font-bold font-germania ">Not All “Dog Food” Is Food </p>
            <p className="mb-10 text-1xl font-light text-lg italic"> Here’s how Raw Dawg stacks up against the industry. </p>
            
            <table className="w-11/12 bg-quaternary/30 table-fixed">
                <thead className="">
                    <tr >
                        <th></th>
                        <th>
                          <p className="text-3xl font-germania font-bold">Dry Food</p>
                        </th>
                        {/* <th><img alt="Progress Steps" className="w-28 my-4 justify-self-center " src="https://magicspoon.com/cdn/shop/files/MS_G_VARIETY4_DCA_HERO.png?v=1738958405"/></th> */}
                        <th>
                          <p className="text-3xl font-germania font-bold">Gently Cooked</p>
                        </th>
                       
                        
                        <th className="bg-tertiary rounded-t-2xl text-primary font-bold font-germania text-3xl">
                          <p className="my-8">Raw Dawg</p>
                          </th>
                        
                    </tr>
                </thead>
                <tbody className="text-center font-extralight italic">
                    <tr className=" border-y text-2xl leading-[2rem] py-20 border-quaternary border-collapse ">
                        <td className="text-center p-10 align-middle text-2xl font-bold font-germania ">Heat-Free</td>
                        <td className="p-10 align-middle ">< CircleX className="size-14  mx-auto" /></td>
                         <td className="p-10 align-middle ">< CircleX className="size-14  mx-auto" /></td>
                        <td className="p-10 align-middle bg-tertiary ">< CheckCircle className="size-14  mx-auto stroke-[#39FF14]" /></td>
                        
                        
                    </tr>

                    <tr className=" border-y text-2xl leading-[2rem] py-20 border-quaternary border-collapse ">
                        <td className="text-center  p-10 align-middle text-2xl font-bold font-germania ">Species-Appropriate Ingredients</td>
                        <td className="p-10 align-middle ">< CircleX className="size-14  mx-auto" /></td>
                         <td className="p-10 align-middle ">< CircleX className="size-14  mx-auto" /></td>
                        <td className="p-10 align-middle bg-tertiary ">< CheckCircle className="size-14  mx-auto stroke-[#39FF14]" /></td>
                        
                        
                    </tr>

                    <tr className=" border-y text-2xl leading-[2rem] py-20 border-quaternary border-collapse ">
                        <td className="text-center  p-10 align-middle text-2xl font-bold font-germania ">No fillers or synthetics</td>
                        <td className="p-10 align-middle ">< CircleX className="size-14  mx-auto" /></td>
                         <td className="p-10 align-middle ">< CircleX className="size-14  mx-auto" /></td>
                        <td className="p-10 align-middle bg-tertiary ">< CheckCircle className="size-14  mx-auto stroke-[#39FF14]" /></td>
                        
                        
                    </tr>
                    <tr className=" border-y text-2xl leading-[2rem] py-20 border-quaternary border-collapse ">
                        <td className="text-center  p-10 align-middle text-2xl font-bold font-germania ">100 % Animal Based</td>
                        <td className="p-10 align-middle ">< CircleX className="size-14 mx-auto" /></td>
                        <td className="p-10 align-middle "><CircleX className="size-14  mx-auto" /></td>
                        <td className="p-10 align-middle bg-tertiary ">< CheckCircle className="size-14  mx-auto stroke-[#39FF14]" /></td>
                        
                        
                    </tr>
                    <tr className=" border-y text-2xl leading-[2rem] py-20 border-quaternary border-collapse ">
                        <td className="text-center  p-10 align-middle text-2xl font-bold font-germania ">Built For Longevity</td>
                        <td className="p-10 align-middle ">< CircleX className="size-14  mx-auto" /></td>
                         <td className="p-10 align-middle ">< CheckCircle className="size-14   mx-auto" /></td>
                        <td className="p-10 align-middle bg-tertiary ">< CheckCircle className="size-14  mx-auto stroke-[#39FF14]" /></td>
                        
                        
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


        <section className="my-32 py-8 text-quinary  font-arvo flex-col justify-items-center justify-self-center">
            
            <div className="flex justify-between items-center bg-quaternary ">
                 
                 <div className="w-4/6  text-3xl font-serif text-center">

                    <picture className="bg-fuchsia-400 w-1/4"><source type="image/gif"/>
                    <img alt="Progress Steps" className="h-full" src={img9.src}/>
                  </picture>

                  </div> 



              <div className="w-3/6 py-4 flex flex-col items-center text-center gap-6 px-6">
                  <center><p className="text-6xl md:text-7xl  mb-16 font-germania text-primary text-center " style={{ lineHeight: '1.5' }}>
                    The rebellion against Big Pet Food starts in your dog’s bowl.
                  </p>
                  <p className="text-[1.8rem] md:text-[1.8rem] mb-16 leading-relaxed text-primary/70" style={{lineHeight:'1.5'}}>
                    Decades of ultra-processing, fillers, synthetic vitamins, and profit-driven shortcuts have turned dog food into a
                    billion-dollar lie, and our dogs are paying the price.
                  </p>
                  <Button
                    onClick={() => router.push('/About')}
                    variant={'outline'}
                    className="mt-2 h-auto text-2xl bg-primary rounded-[8rem] font-germania hover:bg-tertiary hover:text-primary px-14 py-6 min-w-[15rem]"
                    style={{ boxShadow: 'inset 8px 7px 6px rgba(0,0,0,0.15),inset -8px -7px 6px rgba(255,255,255,0.3)' }}
                  >
                    Learn More
                  </Button></center>
                </div>

                  
                  

                  
            </div>
          
        </section>

         
        
          <section className="flex flex-col w-full  items-center justify-center p-4 gap-x-32  justify-self-center py-24 ">
                   
                   <p className="text-center text-7xl text-tertiary font-germania"> Get intimate with <br /> @my.rawdawg</p>
                   
                   <div className="mt-16 gap-5 justify-center items-center self-center w-full flex">
                       <div className=" grow flex flex-col items-center ">
                            <div className="border-2 rounded-2xl border-secondary w-[30em] h-[36em] bg-cover bg-[url(https://instagram.fadd2-1.fna.fbcdn.net/v/t51.82787-15/580619113_17872951050449043_5525487278437561689_n.jpg?stp=dst-jpg_e35_p720x720_tt6&_nc_cat=107&ig_cache_key=Mzc2Mzc2NTQ4MjY1NTgyMDQ0NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkxMy5zZHIuQzMifQ%3D%3D&_nc_ohc=AdZHKlC3poMQ7kNvwHVaWIB&_nc_oc=AdlB9yYUTt_uc7d9WhBUhXzaXUZFCiJGVwARKP0Vtp__t-UF8LrnjXP97YvsakutOOI&_nc_ad=z-m&_nc_cid=1735&_nc_zt=23&_nc_ht=instagram.fadd2-1.fna&_nc_gid=h5EIBEqxujk5ZBOQnq_bcg&oh=00_AfoUWgYqstTbE1hLO0EEoH8rBNrXOa97u8SHa3DAGTwNGg&oe=6975BA82)]" />
                            </div>

                  <div className=" grow flex flex-col items-center">
                            <div className="border-2 rounded-2xl border-secondary w-[30em] h-[36em] bg-cover bg-center bg-[url(https://instagram.fadd1-1.fna.fbcdn.net/v/t51.82787-15/542874986_17866109619449043_818838866944933470_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_cat=101&ig_cache_key=MzcxODI2MTkwMTY2NDI2NTgwMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM0Ni5zZHIuQzMifQ%3D%3D&_nc_ohc=4sOlzsSAZd4Q7kNvwFWU7yX&_nc_oc=Adk1XhciCec28OIDysw9aKcqoWelQ0n4hRpzYrwrh60rCPqzcL6M2forXfcqLinxgbc&_nc_ad=z-m&_nc_cid=1735&_nc_zt=23&_nc_ht=instagram.fadd1-1.fna&_nc_gid=rQlTy1In4AFdBG8tebPMFw&oh=00_AfpGNc8H25qxySMmBnLjaM0uLcdSpSGMKFa1KiDbOZxw4w&oe=69758E7D)]" />
                            </div>
                   <div className=" grow flex flex-col items-center ">
                            <div className="border-2 rounded-2xl border-secondary w-[30em] h-[36em] bg-cover bg-[url(https://instagram.fadd2-1.fna.fbcdn.net/v/t51.82787-15/571688832_17871490392449043_1255662984145577576_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_cat=111&ig_cache_key=Mzc1MzQ4MDI0NjcwOTQwOTIwOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM0Ni5zZHIuQzMifQ%3D%3D&_nc_ohc=A1nSZ4B2dXUQ7kNvwFpI5rZ&_nc_oc=AdmOY3XjKRTWHsdtBApaqt8aM-ZvaoOkOFHzWJkevxD1wyu9lQAKOfIYbll3FGG3XYM&_nc_ad=z-m&_nc_cid=1735&_nc_zt=23&_nc_ht=instagram.fadd2-1.fna&_nc_gid=h5EIBEqxujk5ZBOQnq_bcg&oh=00_AfpLT4q1UhdbEUeMdt0XFfZLISOdluRw9Ol6QIq0BndmqA&oe=6975B29F)]" />
                            </div>
                   </div>
                  
        </section>
     

     

       
     
       



    </div>
    
  );
}
