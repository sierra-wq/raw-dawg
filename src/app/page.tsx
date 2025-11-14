'use client'
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, CheckCircle, CircleX,  MoveLeft, MoveRight, X,  } from "lucide-react";
import Wave1 from "@/assets/layered-waves-haikei (1).svg"
import Wave2 from "@/assets/layered-waves-haikei (2).svg"
import Wave4 from "@/assets/layered-waves-haikei (4).svg"

import img1 from "@/assets/product1.jpg"
import img2 from "@/assets/product2.jpg"
import img3 from "@/assets/product3.jpg"
import img4 from "@/assets/product4.png"

import { StaticImageData } from "next/image";
import { useState } from "react";



export default function Home() {

  const items : {
    img: StaticImageData;
    discription: string;
    detail : string;
    price: string;
    canceledPrice: string;
    name : string;
}[]  = [
    {
      img: img1,
      discription : '100% GRASS-FED BEEF ',
      detail : "Single-protein formula designed for strength and stamina, rich in organ meats and digestive boosters contains - Beef muscle meat, heart, liver, kidney, spleen, ground bone, green tripe,beef trachea, beef fur.",
      price : '50$',
      canceledPrice : '70$',
      name : 'BEEF (Instinct Blend)'
    },
    {
      img: img2,
      discription : '100% FREE-RANGE TURKEY ',
      detail : "Simple, lean, single-protein diet ideal for sensitive stomachs or dietary restrictions.contains ​- Whole turkey, turkey heart, gizzard, neck, liver",
      price : '50$',
      canceledPrice : '70$',
      name : ' TURKEY (Ancestral Blend)​'
    },
    {
      img: img3,
      discription : '100% TURKEY & Wild SALMON ',
       detail : "Anti-inflammatory, omega-rich blend targeting skin, coat, joints, and cognitive health.​Ingredients: Wild salmon (with skin and head), whole turkey, heart, gizzard, neck, liver.",
      price : '50$',
      canceledPrice : '70$',
      name : ' TURKEY + SALMON (Omega Blend)​'
    },
    {
      img: img1,
      discription : 'Content 1',
       detail : "",
      price : '50$',
      canceledPrice : '70$',
      name : ''
    },
  ];

  const reels = ['Built for Biology','Regenerative Farms','Holistically Sourced', 'Made in the USA',
     'No Seed oils. No Fillers. No Grains. No Bullsh*t.','Nothing Artificial','Lab-Backed','Feed Wild. Forget the Rest'];
  
  
  
  const [activeProduct , setActiveProduct] = useState(0);

const handleProductClick = (side: "left" | "right") => {
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
       
        <div className="h-screen bg-[url(https://images.pexels.com/photos/6568950/pexels-photo-6568950.jpeg)] bg-cover bg-left-bottom flex items-center justify-end ">
             
            <div className=" ms-10 mt-20 font-satisfy relative w-4/12 flex flex-col   items-center  ps-5">
                
                <p className="text-7xl mt-16 text-primary  text-center font-extrabold text-wrap italic ">FEED INSTINCT. NOT INDUSTRY</p>
                <Button variant={'outline'} className="mt-20 h-auto text-2xl hover:bg-quaternary hover:text-primary text-tertiary border-quaternary border-2 rounded-[8rem] bg-primary"> start feeding instinct </Button>

            </div>

        </div>


        <figure className="w-full text-accent">
          <Wave1 className="w-full  -mt-28 fill-primary" />
          <figcaption className="sr-only">Decorative wave divider between sections</figcaption>
        </figure>
       

        <div className="relative justify-self-center w-10/12 overflow-hidden my-10 py-3">
          <div className="flex animate-marquee whitespace-nowrap gap-16">
            {[...reels, ...reels].map((item, index) => (
              <span
                key={index}
                className="flex items-center justify-center  text-quaternary text-xl px-6"
              >
                <Check className="size-8 mr-3" /> {item}
              </span>
            ))}
          </div>
        </div>

        
        
        <section className=" py-10 font-arvo flex-col justify-items-center justify-self-center">
          
            <p className="mb-10 text-5xl text-quaternary font-bold"> How It Works</p>
            <div className="flex py-5  justify-between w-10/12 ">
                 <div className="w-1/4 text-quaternary text-center">
                      <p className="text-3xl justify-self-center  font-extrabold border-4 rounded-[10rem] flex items-center border-secondary/40 justify-center w-14 h-14 bg-quaternary text-primary">1</p>
                     <p className="text-2xl font-light  my-4"> Tell Us About Your Dawg</p>
                     <p > Answer a few quick questions about your dog’s age, weight, activity level, and quirks. In
                        minutes, we’ll build a raw meal plan tailored to their biology. No guesswork, no generic charts.</p>
                  </div>

                  <div className="w-1/4 text-quaternary text-center">
                     <p className="text-3xl justify-self-center  font-extrabold border-4 rounded-[10rem] flex items-center border-secondary/40 justify-center w-14 h-14 bg-quaternary text-primary">2</p>
                     <p className="text-2xl font-light  my-4"> Get It Delivered</p>
                     <p> We prep, portion, and ship meals frozen straight to your door. Every box is packed with
                          eco-coolers to keep the cold chain unbroken, so it’s fresh, raw, and ready when you are. </p>
                  </div>

                  <div className="w-1/4 text-center text-quaternary">
                     <p className="text-3xl justify-self-center  font-extrabold border-4 rounded-[10rem] flex items-center border-secondary/40 justify-center w-14 h-14 bg-quaternary text-primary">3</p>
                     <p className="text-2xl font-light  my-4"> Watch Instinct Kick In</p>
                     <p> The difference is visible. Shinier coats. Cleaner teeth. Stronger digestion. More energy. Happier
                          tail wags. When you feed instinct, you’ll see biology at work.</p>
                  </div> 
            </div>
            <Button  className="mt-10 hover:bg-quaternary hover:text-primary border-quaternary border-2 text-quaternary text-lg font-arvo font-bold h-auto"> Read More </Button>
        </section>
        
         <figure className="w-full text-accent">
          <Wave2 className="w-full -mb-40 fill-primary" />
          <figcaption className="sr-only">Decorative wave divider between sections</figcaption>
        </figure>

        <section className="py-32 flex-col bg-quinary w-full font-arvo justify-items-center justify-self-center">
            <p className="mb-10 text-5xl text-primary font-bold"> Our Products</p>
            <div className="flex flex-wrap gap-[2rem] py-5 justify-around w-4/6  ">
                 
                 {
                  items.slice(0,3).map((item, index) => (
                     <div className="flex flex-col items-center justify-between bg-primary group rounded-lg hover:bg-primary hover:text-tertiary text-quinary  w-3/12 text-clip text-center">
                      <img alt="Progress Steps" className="w-40 my-8 justify-self-center " src={item.img.src}/>
                     <p className="text-4xl font-extrabold mt-4 mb-3 hover:text-quaternary"> {item.price} <span className="ms-1 group-hover:text-quaternary/50 text-quinary/30 line-through decoration-double"> {item.canceledPrice} </span></p>
                     <p className="text-3xl font-bold text-center"> {item.discription}</p>
                     <span className="text-sm block mt-8"> 12552 reviews</span>
                     <Button size={'default'} className="my-5 group-hover:bg-tertiary font-bold group-hover:text-primary bg-primary text-quinary"> Shop Now </Button>
                  </div>
                  ))
                 }
                
            </div>
            <Button  className="mt-20  rounded-2xl hover:bg-primary hover:text-quaternary border-4 border-primary border-double bg-quaternary text-primary h-auto text-3xl font-bold"> Shop All Products  </Button>
        </section>


        <figure className="w-full ">
          <Wave4 className="w-full -mb-40 fill-quinary" />
          <figcaption className="sr-only">Decorative wave divider between sections</figcaption>
        </figure>

        <section className=" py-24 mt-20 flex-col font-arvo justify-items-center justify-self-center">
            <p className="mb-10 text-5xl text-quaternary font-bold"> Whats the Secret</p>
            <div className="flex py-5 justify-between items-center w-3/4 ">
                 <div className="w-1/4 text-right">

                     <p className="text-3xl font-satisfy text-quaternary "> Built for Biology </p>
                     <p className=" mt-5 leading-[1.5rem] font-light font-roboto"> Ancestral, whole-prey formulas grounded in what dogs are made to eat (grounded in nature
                     built for instinct)</p>
                  </div>

                  
                  <div className="w-1/4   text-center">
                     <p className="text-3xl font-satisfy text-quaternary "> No Fillers. No Bullsh*t.</p>
                   <p className="mt-5 mb-10 leading-[1.5rem] font-light font-roboto"> No grains. No fillers. No seed oils. No synthetic vitamins. No artificial bullsh*t. No shortcuts. Just
                  raw, real food for dogs.</p>
                  
                    <picture className=" flex justify-center"><source type="image/gif" srcSet={img4.src}/>
                    <img alt="Progress Steps" className="h-80"/>
                  </picture>

                   <p className="mt-10 text-3xl font-satisfy text-quaternary "> Lab-backed</p>
                   <p className="mt-5 leading-[1.5rem] font-light font-roboto"> 
                    Balanced, pathogen-screened, and verified through lab analysis. No industry dogma. No
                    vet-pharma agendas. Just primal proof.</p>
                  
                  </div> 

                  <div className="w-1/4 text-left">

                     <p className="text-3xl font-satisfy text-quaternary "> Whole Prey Formula </p>
                     <p className=" mt-5 leading-[1.5rem] font-light font-roboto"> 
                      Biologically appropriate nutrition from nose to tail — muscle, bone, organ, and connective
                      tissue. Complete, balanced, and instinct-driven, just as nature intended.</p>
                  </div>
            </div>
          
        </section>

            <figure className="w-full ">
              <Wave1 className="w-full fill-secondary" />
              <figcaption className="sr-only">Decorative wave divider between sections</figcaption>
            </figure>

            <div className="w-full py-16 ps-16 bg-secondary flex justify-center ">
              <p className="text-6xl font-bold text-primary w-9/12 px-4 capitalize justify-self-start leading-[5rem]">
                If nature wrote the recipe, it would look like Raw Dawg
            </p>
            </div>

            <figure className="w-full mb-10">
              <Wave2 className="w-full fill-secondary" />
              <figcaption className="sr-only">Decorative wave divider between sections</figcaption>
            </figure>


        <section className="my-10  border-2 font-arvo text-quaternary border-tertiary  rounded-lg w-11/12 py-10 flex-col justify-items-center justify-self-center">
            <p className="mb-10 text-5xl  font-bold "> Why Its Special</p>
            <p className="mb-10 text-1xl font-light text-lg italic"> Raw Dawg Vs Other Brands  </p>
            
            <table className="w-11/12 table-fixed">
                <thead className="">
                    <tr >
                        <th></th>
                        <th>
                              <p className="text-xl font-light">Dry Food (Hill's, Purina, Royal Canin, lams)
                            </p>
                        </th>
                        {/* <th><img alt="Progress Steps" className="w-28 my-4 justify-self-center " src="https://magicspoon.com/cdn/shop/files/MS_G_VARIETY4_DCA_HERO.png?v=1738958405"/></th> */}
                        <th>
                            <p className="text-xl font-light">Gently Cooked (Ollie, Farmer’s Dog, Nom Nom,)
                            </p>
                        </th>
                        <th>
                            <p className="text-xl font-light">Frozen / Fresh (Maev, We Feed Raw)

                            </p>
                        </th>
                        
                        <th className="bg-tertiary/60 rounded-t-2xl text-primary font-bold text-2xl">
                          <p className="my-8">Raw Dawg</p>
                          </th>
                        
                    </tr>
                </thead>
                <tbody className="text-center font-extralight italic">
                    <tr className=" border-y text-2xl leading-[2rem] py-20 border-tertiary border-collapse ">
                        <td className="text-center p-10 align-middle text-xl font-bold ">Canine-Grade
Ingredients</td>
                        <td className="p-10 align-middle ">< CircleX className="size-14 stroke-quaternary mx-auto" /></td>
                        <td className="p-10 align-middle ">< CheckCircle className="size-14  mx-auto" /></td>
                         <td className="p-10 align-middle ">< CheckCircle className="size-14  mx-auto" /></td>
                        <td className="p-10 align-middle bg-tertiary/60 ">< CheckCircle className="size-14  mx-auto stroke-primary" /></td>
                        
                        
                    </tr>

                    <tr className=" border-y text-2xl leading-[2rem] py-20 border-tertiary border-collapse ">
                        <td className="text-center  p-10 align-middle text-xl font-bold ">100% real meat,
organ, and bone</td>
                        <td className="p-10 align-middle ">< CheckCircle className="size-14  mx-auto" /></td>
                        <td className="p-10 align-middle ">< CheckCircle className="size-14  mx-auto" /></td>
                         <td className="p-10 align-middle ">< CheckCircle className="size-14  mx-auto" /></td>
                        <td className="p-10 align-middle bg-tertiary/60 ">< CheckCircle className="size-14  mx-auto stroke-primary" /></td>
                        
                        
                    </tr>

                    <tr className=" border-y text-2xl leading-[2rem] py-20 border-tertiary border-collapse ">
                        <td className="text-center  p-10 align-middle text-xl font-bold ">No Fillers, Grains,
Seed Oils, or
Synthetic Additives</td>
                        <td className="p-10 align-middle ">< CircleX className="size-14 stroke-quaternary mx-auto" /></td>
                        <td className="p-10 align-middle ">< CheckCircle className="size-14  mx-auto" /></td>
                         <td className="p-10 align-middle ">< CheckCircle className="size-14  mx-auto" /></td>
                        <td className="p-10 align-middle bg-tertiary/60 ">< CheckCircle className="size-14  mx-auto stroke-primary" /></td>
                        
                        
                    </tr>
                    <tr className=" border-y text-2xl leading-[2rem] py-20 border-tertiary border-collapse ">
                        <td className="text-center  p-10 align-middle text-xl font-bold ">Biologically
appropriate
nutrition</td>
                        <td className="p-10 align-middle ">< CheckCircle className="size-14 mx-auto" /></td>
                         <td className="p-10 align-middle ">< CheckCircle className="size-14  mx-auto" /></td>
                        <td className="p-10 align-middle "><CircleX className="size-14 stroke-quaternary mx-auto" /></td>
                        <td className="p-10 align-middle bg-tertiary/60 ">< CheckCircle className="size-14  mx-auto stroke-primary" /></td>
                        
                        
                    </tr>
                    <tr className=" border-y text-2xl leading-[2rem] py-20 border-tertiary border-collapse ">
                        <td className="text-center  p-10 align-middle text-xl font-bold ">Heat-Free / Raw
Integrity</td>
                        <td className="p-10 align-middle ">< CheckCircle className="size-14  mx-auto" /></td>
                         <td className="p-10 align-middle ">< CheckCircle className="size-14  mx-auto" /></td>
                        <td className="p-10 align-middle ">< CircleX className="size-14 stroke-quaternary  mx-auto" /></td>
                        <td className="p-10 align-middle bg-tertiary/60 ">< CheckCircle className="size-14  mx-auto stroke-primary" /></td>
                        
                        
                    </tr>
                  
                    
                </tbody>
            </table>
          
        </section>

        <figure className="w-full -mb-60 ">
          <Wave2 className="w-full fill-primary" />
          <figcaption className="sr-only">Decorative wave divider between sections</figcaption>
        </figure>

        <section className="bg-secondary w-full py-24 flex-col my-20  mb-0 font-arvo justify-items-center justify-self-center">
            <p className="my-16 text-5xl text-primary font-bold"> Recipes </p>
            <p className="w-3/5 text-center text-surface/60 mb-10 text-xl font-light"> 
                 Recipes designed to meet a range of canine needs–
                from performance and recovery to gentle digestion and daily nourishment.
            </p>
            <div className="flex py-5 justify-between items-center w-11/12 ">
                <div className="w-2/5 border-2 bg-primary border-quaternary text-secondary rounded-xl p-5 text-3xl ">
                    <div className="my-10 flex items-center justify-between ">
                      <p className="text-4xl w-3/5"> {items[activeProduct].name} </p>
                      <div >
                        <Button variant={'outline'} onClick={() => handleProductClick('left') } className="bg-primary text-secondary  hover:bg-secondary hover:text-primary  border-secondary rounded-full size-12 " > 
                          <MoveLeft style={{ width: '2rem' , height: '2rem' }} /> 
                        </Button> 
                        <Button variant={'outline'} onClick={() => handleProductClick('right')} className="bg-primary text-secondary  hover:bg-secondary hover:text-primary  border-secondary rounded-full size-12 ms-5" > 
                          <MoveRight style={{ width: '2rem' , height: '2rem' }}/> 
                        </Button>
                      </div>

                    </div>
                    <div>
                      <p className="text-base italic font-light ">
                        {items[activeProduct].detail}
                      </p>
                    </div>
                    
                </div>
                <div className="w-3/5    flex justify-center">
                
                <img alt="Progress Steps" className=" w-80  my-4 justify-self-center  " src={items[activeProduct].img.src}/>
                                    
                </div>
                    
            </div>

          
        </section>


        <section className="bg-secondary text-primary  font-arvo flex-col justify-items-center justify-self-center">
            <div className="flex justify-between ">
                 <div className="  text-3xl font-light w-2/6  flex flex-col justify-around text-center  px-10">

                     <div className=" block"> <span className="text-8xl mb-10 font-bold block"> 75<span className="text-3xl m-0 p-0">%</span> </span> Muscle Meat</div>
                    
                    <div className=" block"> <span className="text-8xl mb-10  font-bold block"> 10<span className="text-3xl m-0 p-0">%</span> </span> Bone</div>
                    
                    <div className=" block"> <span className="text-8xl mb-10 font-bold block"> 10<span className="text-3xl m-0 p-0">%</span> </span> Organs </div>

                    <div className=" block"> <span className="text-8xl mb-10 font-bold block"> 5<span className="text-3xl m-0 p-0">%</span> </span> Instinct Boost </div>
                    
                    
                  </div>

                  
                  <div className="w-4/6  text-3xl font-serif text-center">

                    <picture className="bg-fuchsia-400 w-1/4"><source type="image/gif" srcSet="https://magicspoon.imgix.net/files/MS_VARIETY_STACK_10.21.webp?v=1760730509&auto=format,compress&w=2222"/>
                    <img alt="Progress Steps" className="h-full"/>
                  </picture>

                  </div> 

                  
            </div>
          
        </section>
        
         <figure className="w-full mb-32 ">
          <Wave2 className="w-full fill-secondary" />
          <figcaption className="sr-only">Decorative wave divider between sections</figcaption>
        </figure>

        <section className="bg-quinary pb-20 flex-col justify-items-center w-11/12 justify-self-center">
            <div className="flex flex-wrap py-5 justify-between items-center gap-4 w-10/12 font-arvo ">
                 {
                  items.slice(0,3).map((item) => (
                    
                   <div className="w-1/4 flex-col justify-items-center mt-40 p-3 relative text-quinary  bg-primary/80  ">
                  <picture className="absolute left-1/2  -translate-x-1/2 -translate-y-3/4"><source type="image/gif" srcSet="https://magicspoon.imgix.net/files/KELLY-LEVEQUE_2x_3b58a2bf-4c78-4d18-be5d-2bbce7d784dc.webp?v=1760730701&width=304&auto=format,compress"/>
                    <img alt="Progress Steps" className="border-4 border-quinary/80 h-36 w-36 rounded-full"/>
                  </picture>
                     <blockquote className="text-2xl mt-12 w-11/12 ">" I just ate delicious cereal for dinner and the last time I did that was my sophomore year in college! "</blockquote>
                     <p className="  my-8 text-4xl font-bold text-quinary/90"> Kelly Leveque </p>
                     <p className="  w-10/12 text-sm "> Holistic Nutritionist, Wellness Expert, and Celebrity Health Coach</p>

                   

                  </div> 



                  ))
                 }
                  
 
            </div>
          
        </section>

        <section className="bg-quaternary py-10 w-full mt-10 flex items-center font-arvo justify-around ">
            <p className="mb-10 w-3/6 text-8xl font-bold text-primary " style={{lineHeight: '8rem'}}> The rebellion against Big Pet Food starts in your dog's bowl.</p>
            <a href="/About" className="text-4xl p-4 w-1/5 text-center border-tertiary  hover:border-primary hover:text-primary hover:bg-primary/10 hover:cursor-pointer border-4 text-quaternary bg-primary/80 rounded-3xl"> Our Story </a>
        </section>

        <figure className="w-full ">
          <Wave2 className="w-full fill-quaternary" />
          <figcaption className="sr-only">Decorative wave divider between sections</figcaption>
        </figure>

        <section className=" pb-36  flex-col justify-items-center text-3xl font-arvo font-light w-3/5 justify-self-center">
            <p className="mb-10 text-5xl text-tertiary"> FAQ </p>
             <Accordion
              type="single"
              collapsible
              className="w-11/12 p-5 bg-tertiary text-3xl text-primary"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1 ">
                <AccordionTrigger className="text-3xl capitalize "> Why feed raw instead of kibble or human-grade</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Dogs share 99% of their DNA with wolves. Their bodies are designed to thrive on raw,
                    whole-prey nutrition — muscle, bone, organ, connective tissue, and primal extras.
                  </p>
                  <p>
                     Kibble is
                     made with fillers, starch, and synthetics. RawDawg gives dogs food their biology actually
                     recognizes.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-3xl"> Is raw food safe for my dog</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Yes. Dogs are built to handle raw meat. Their short digestive tracts and acidic stomachs are
                    designed to process bacteria that humans cannot.
                  </p>
                  <p>
                    Every RawDawg batch is pathogen-screened
                    and formulated for balance and safety.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-3xl">What about bacteria like Salmonella and E. coli</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Dogs are naturally resistant to most bacteria that concern humans.
                  </p>
                  <p>
                    Still, we follow strict
                    sourcing, handling, and lab testing protocols to ensure every batch meets safety standards.
                  </p>
                </AccordionContent>
              </AccordionItem>
              </Accordion>
          
        </section>

       



    </div>
    
  );
}
