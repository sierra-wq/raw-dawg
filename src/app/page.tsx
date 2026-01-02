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
import Dog from "@/assets/Raw Dawg_iconlogo_4.svg"

import img1 from "@/assets/product1.png"
import img2 from "@/assets/product2.png"
import img3 from "@/assets/product3.png"
import img4 from "@/assets/product4.png"
import img5 from "@/assets/product-dog.webp"
import img6 from "@/assets/founders.webp"
import img7 from "@/assets/product-varaity.webp"
import img8 from "@/assets/RAW DAWG-PRODUCT -04.webp"
import img9 from "@/assets/RAW DAWG-PRODUCT -28.webp"
import img10 from "@/assets/product-in-fridge.webp"


import { StaticImageData } from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"



export default function Home() {

  const router = useRouter();
  const items : {
    img: StaticImageData;
    discription: string;
    detail : string;
    price: string;
    canceledPrice: string;
    name : string;
    tags : string[];
}[]  = [
    {
      img: img1,
      discription : '100% GRASS-FED BEEF ',
      detail : "A whole-prey beef recipe built for strength, stamina, and durability. Lean beef and heart support muscle and sustained energy, while liver, kidney, and spleen deliver essential nutrients for immune and metabolic health. Ground bone, green tripe, and trachea provide natural minerals, digestive support, and joint resilience.",
      price : '50$',
      canceledPrice : '70$',
      name : 'BEEF (Instinct Blend)',
      tags : ["Single-Protein" , "Strength-Building" ,"Mineral-Dense"]
    },
    {
      img: img2,
      discription : '100% FREE-RANGE TURKEY ',
      detail : "A clean, single-protein turkey recipe for sensitive dogs and simplified feeding. Lean turkey provides highly digestible protein, while heart, liver, and gizzard supply essential nutrients for energy, immunity, and digestion. Turkey necks deliver natural calcium and phosphorus for strong bones and teeth.",
      price : '50$',
      canceledPrice : '70$',
      name : ' TURKEY (Ancestral Blend)​',
      tags : ["Single-Protein" , "Lean",  "Sensitive-Dog Friendly"]
    },
    {
      img: img3,
      discription : '100% TURKEY & Wild SALMON ',
       detail : "A dual-protein recipe designed to support skin, joints, and balanced energy. Lean turkey fuels muscle and daily vitality, while wild-caught salmon delivers omega-3s for inflammation control and coat health. Bone, organs, and cartilage supply natural minerals and connective tissue support.",
      price : '50$',
      canceledPrice : '70$',
      name : ' TURKEY + SALMON (Omega Blend)​',
      tags : ["Dual-Protein" , "Omega-Rich" , "Anti-Inflammatory"]
    },
  ];
      const data = {
        "Raw Feeding": [
          {
            title : "Why do people feed raw in the first place?",
            content : `Because dogs digest real food better than processed food. Raw feeding supports gut health,
              nutrient absorption, hydration, dental health, and steady energy. When food is biologically
              appropriate, the body does less compensating. Smaller stools, cleaner teeth, better skin, and
              calmer digestion tend to follow.
              It’s not magic. It’s alignment. `
        }
  
        ,
          {
            title : "If my dog reacts to certain proteins, can raw still work?",
            content : `Often, yes. Many reactions aren’t to the protein itself but to how it’s processed. High heat,
              additives, and fillers can change how the immune system responds.
              Raw feeding removes a lot of that noise. While no food is allergy-proof, dogs generally tolerate
              simple, single-protein raw diets better than processed formulas. `
        }
        ,
          {
            title : "Will raw food help with environmental allergies?",
            content : `Sometimes. Raw feeding supports the gut and immune system, which can help reduce
              inflammatory responses overall. Many dogs see improvements in itching, redness, ear issues,
              and excessive scratching once their digestion stabilizes.
              It’s not a cure-all. But it often removes one major stressor from the system. `
        }
        ,
          {
            title : "How do I transition my dog to raw?",
            content : `There’s no single “right” way to transition your dog to raw food—the goal is simply to support digestion while your dog adjusts from processed food to real,
             whole ingredients. A gradual transition is often recommended for older dogs or those with sensitive stomachs. This involves slowly replacing a small portion of your dog’s current food with raw food 
             and increasing the raw portion every few days, as long as stool quality remains firm. Many pet owners follow a gradual schedule that moves from roughly 25% raw food at the start, to 50%, then 75%, until the dog is fully transitioned to 
             100% raw. Throughout this process, stool consistency is the most reliable indicator of how well your dog is adapting.
              In contrast, many young and healthy dogs do well with a direct transition, switching fully to raw food right away. Some owners choose to include a short 12–24 hour fast beforehand to help clear the digestive tract before introducing
               raw food exclusively. Both approaches can be effective—the best method is the one that suits your dog’s age, health, and individual needs, rather than following a strict rule. `
        }
        ,
          {
            title : "How should I store and serve raw food?",
            content : `Keep raw food frozen until you’re ready to use it. Thaw slowly in the refrigerator, ideally over
                    12–24 hours. Once thawed, keep it refrigerated and use within 3–4 days.
                    Serve cold or at room temperature. Do not cook.
  
                    Handle it the same way you would raw meat for yourself: clean surfaces, wash hands, and
                    discard uneaten portions after a reasonable time. `
        }
        ,
          {
            title : "Should I worry about bacteria or parasites?",
            content : `Dogs are biologically equipped to handle raw meat. Their stomach acid is significantly more
              acidic than a human’s, and their digestive tract moves quickly. This makes it difficult for harmful
              bacteria to take hold.
              We also source clean ingredients and deep-freeze all products, which significantly reduces
              parasite risk. Raw feeding isn’t unsafe when done with intention and proper handling `
          },
  
           {
            title : "Will my dog get digestive upset when switching?",
            content : `Some dogs experience temporary changes during transition, especially if they’ve eaten
              processed food for most of their life. This can include softer stools or more frequent bowel
              movements.
              These changes usually resolve as digestion adapts. Starting with lean proteins and transitioning
              gradually can help if your dog is sensitive.
              Loose stool during transition isn’t failure. It’s feedback.`
          },
  
           {
            title : "Will my dog drink less water on raw?",
            content : `Yes, often. Raw food contains natural moisture, unlike kibble. Many dogs meet a significant
              portion of their hydration needs through their food once they switch.
              Always provide fresh water, but don’t be alarmed if your dog drinks less.`
          },
  
           {
            title : "Will raw feeding change my dog’s behavior or make them aggressive?",
            content : `No. Diet does not create aggression.
              Behavior is shaped by genetics, training, environment, and handling. Feeding raw does not
              increase prey drive or aggression. That belief has been repeated often, but it isn’t supported by
              biology or experience. `
          },
  
           {
            title : "Are raw meaty bones safe?",
            content : `Raw bones are soft and pliable. Cooked bones are not and should never be fed.
              Always choose bones appropriate for your dog’s size and supervise chewing. Raw bones
              support dental health and provide natural calcium when used correctly. `
          },
  
           {
            title : "What is “detox” when switching to raw?",
            content : `Some dogs experience short-term changes as their body adjusts after years of processed food.
              This may include loose stool, increased shedding, mild skin changes, or ear wax.
              These symptoms typically resolve within a few weeks as the gut and immune system rebalance.
              Keep hydration up and allow time for adjustment.`
          },
  
           {
            title : "Can puppies eat raw food?",
            content : `Yes. Puppies are designed to eat raw once weaned. Starting early supports gut development,
              immune health, and proper growth.
              Feed appropriately sized portions and balanced recipes, adjusting amounts as they grow.`
          },
  
           {
            title : "Can I feed raw alongside other foods?",
            content : `Yes. Raw and kibble can be fed in the same day or even the same bowl. The canine stomach
              maintains an acidic environment regardless of food type.
  
              That said, consistency matters. The more whole and unprocessed the diet, the clearer the
              benefits tend to be. `
          },
  
  
  
  
  
  
        ],
        "Our Products": [
          {
            title: `Does Raw Dawg food need to be cooked? Can it be cooked?`,
            content: `No. RawDawgTM food is designed to be fed raw. Cooking alters the structure of the food,
              degrading naturally occurring amino acids and enzymes that dogs rely on. It also makes raw
              bones unsafe by hardening them, which can cause splintering.
              This food works as intended when it stays raw.`,
          },
          {
            title: `Do Raw Dawg meals meet AAFCO requirements?`,
            content: `Our recipes are built around whole-prey ratios and biologically appropriate nutrition, not
              minimums on a spreadsheet. Where applicable, formulas are designed to meet established
              nutritional standards using real food, not synthetic fillers.
              We focus on what dogs actually use and absorb, not what looks complete on paper alone.`,
          },{
            title: `Do you use HPP (High Pressure Processing)?`,
            content: ` No. We do not use HPP.
  HPP can alter the structure of raw food and reduce some of the biological integrity we’re
  intentional about preserving. Instead, we rely on clean sourcing, controlled processing, and
  deep freezing to maintain safety without compromising the food itself.`,
          },{
            title: `How long does Raw Dawg food last in the freezer?`,
            content: ` When kept frozen, Raw Dawg food stays fresh for up to a year. Once thawed, store it in the
  refrigerator and use within 3–4 days.
  If it looks off or smells wrong, don’t serve it. Trust your senses.`,
          },{
            title: `Do I need to add anything to Raw Dawg food?`,
            content: `While RawDawgTM meals are complete as they are and don’t require anything added, we fully
  support personalization. Toppers, mix-ins, and extras your dog enjoys can be a great way to add
  variety, enrichment, or targeted support. Whole foods like raw eggs, sardines, bone broth, or
  seasonal additions are all fair game if your dog tolerates them well.
  Think of Raw Dawg as a solid foundation. What you build on top is up to you and your dog. `,
          },{
            title: `Are your products organic?`,
            content: `We prioritize clean sourcing over labels. Raw Dawg uses human-grade ingredients from
  USDA-inspected facilities, sourced domestically and free from added hormones and antibiotics.
  Many of our ingredients are organic when available, but we don’t force the claim at the expense
  of quality or integrity. Seasonality, supplier availability, and whole-animal sourcing mean not
  every ingredient carries an organic label.
  What matters more to us is how the food is raised, handled, and fed. Real ingredients. Ethical
  sourcing. No shortcuts. `,
          },{
            title: `What is your kill step?`,
            content: ` We don’t rely on a single blunt intervention. Our approach is layered, intentional, and built
  around preserving the integrity of raw food while prioritizing safety.
  
  RawDawgTM starts with human-grade ingredients sourced from USDA-inspected facilities. From
  there, all products are handled under strict sanitation protocols and deep-frozen immediately
  after production. Deep freezing is a well-established method for reducing parasite risk and
  limiting bacterial growth without compromising the food itself.
  We choose freezing, sourcing, and handling over harsh processing because it keeps the food
  biologically intact.`,
          },{
            title: `Do you test your food?`,
            content: ` Yes. Every batch is tested.
  We perform routine batch testing for common pathogens, including Salmonella, E. coli, and
  Listeria, before products are cleared for distribution. If a batch doesn’t meet standards, it doesn’t
  ship. Period.
  Safety isn’t something we outsource to marketing language. It’s built into how the food is made,
  handled, frozen, and verified before it ever reaches your dog.`,
          },{
            title: `What essential vitamins and minerals do you add to your mixes?`,
            content: ` None.
  Raw Dawg doesn’t add synthetic vitamins or mineral premixes. We build nutrition the way dogs
  evolved to receive it: from whole, intact ingredients in biologically appropriate ratios.
  Muscle meat provides protein and energy. Organs supply naturally occurring vitamins and trace
  minerals. Bone delivers calcium and phosphorus in a form the body recognizes and uses. When
  food is structured correctly, nutrients don’t need to be “added back.”
  Synthetic supplementation is often used to replace what processing destroys. We don’t
  overprocess our food, so there’s nothing missing that needs correcting.
  Real food covers the bases when it’s done right.`,
          }
          
          
        ],
      }
      const [mode, setMode] = useState<"Raw Feeding" | "Our Products">("Raw Feeding");
        
  const reels = ['No Seed Oils.', 'No Fillers.', 'No Grains.', 'No Synthetics','No Bullsh*t.'];
  
  
  
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
             
            <div className=" ms-10 mt-20 font-germania relative w-4/12 flex flex-col   items-center  ps-5">
                
                <p className="text-7xl mt-16 text-primary  text-center font-extrabold text-wrap italic ">FEED INSTINCT. NOT INDUSTRY</p>
                <Button onClick={() => router.push('/Products')} variant={'outline'} className="mt-20 h-auto text-2xl hover:bg-quaternary hover:text-primary text-tertiary border-quaternary border-2 rounded-[8rem] bg-primary"> Shop Raw Blends </Button>

            </div>

        </div>


      
       

        <div className="relative justify-self-center w-10/12 overflow-hidden my-4">
          <div className="flex justify-center whitespace-nowrap  gap-16">
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

        <section className="py-32 flex-col bg-quinary w-full font-arvo justify-items-center justify-self-center">
            <p className="mb-10 text-7xl text-primary font-germania font-bold"> Our Products</p>
            <div className="flex flex-wrap gap-[2rem] py-5 justify-around w-4/6  ">
                 
                 {
                  items.slice(0,3).map((item, index) => (
                     <div className="px-10 flex flex-col items-center justify-between bg-primary group rounded-lg hover:bg-primary bg-primary/70 hover:text-tertiary text-quinary  w-3/12 text-clip text-center">
                      <img alt="Progress Steps" className="w-64 justify-self-center " src={item.img.src}/>
                     <p className="text-3xl font-bold  mb-3 hover:text-quaternary"> {item.price} <span className="ms-1 group-hover:text-quaternary/50 text-quinary/30 line-through decoration-double"> {item.canceledPrice} </span></p>
                     <p className="text-xl text-center"> {item.discription}</p>
                     <Button size={'default'} className="text-2xl my-5 group-hover:bg-tertiary border-quinary border-2  font-bold group-hover:text-primary bg-primary text-quinary"> Shop Now </Button>
                  </div>
                  ))
                 }
                
            </div>
            <Button onClick={() => router.push('/Products')} className="mt-20  rounded-2xl hover:bg-primary hover:text-quaternary border-4 border-primary border-double bg-quaternary text-primary h-auto text-4xl font-germania font-bold"> Shop All Products  </Button>
        </section>

         <section className="py-32 flex-col w-full font-arvo justify-items-center justify-self-center">
            <p className="mb-10 text-7xl font-germania text-tertiary font-bold"> Meet The Line Up</p>
            <div className="flex flex-wrap gap-[2rem] text-tertiary  justify-around w-4/6 py-8 relative">
                 
                  <img alt="Progress Steps" className="w-100 my-8 justify-self-center  " src={img8.src}/>
                  
                   <div className="absolute -left-32 top-2/4 -translate-y-12 max-w-xs text-left">
          <h3 className="font-bold font-satisfy text-2xl mb-2">
            Turkey & Salmon
          </h3>
          <p className="text-sm text-quaternary">
            Free-range turkey and wild salmon deliver clean protein,
            essential organs, and natural omegas for full-body support.
          </p>
        </div>

        {/* Center Callout */}
        <div className="absolute  bottom-4 translate-x-28   text-center max-w-sm">
          <h3 className="font-bold font-satisfy text-2xl mb-2">
            GRASS-FED BEEF
          </h3>
          <p className="text-sm text-quaternary">
            A dense, whole-prey blend of muscle meat, organs, bone,
            trachea, and raw green tripe to support power,
            endurance, and digestion.
          </p>
        </div>

        {/* Right Callout */}
        <div className="absolute -right-32 top-3/4 -translate-y-12  max-w-xs text-left">
          <h3 className="font-bold font-satisfy text-2xl mb-2">
            Free-Range Turkey
          </h3>
          <p className="text-sm text-quaternary">
            A clean, lower-fat turkey blend made with muscle meat,
            heart, gizzard, and liver for steady energy and easy digestion.
          </p>
        </div>
                
            </div>
        </section>
      
   

        <section className=" py-10 font-arvo bg-tertiary w-full flex-col justify-items-center justify-self-center">
          
            <div className="flex py-5 text-primary justify-between w-10/12 ">
                 <div className="w-1/4  text-center">
                      <p className="text-3xl justify-self-center  font-extrabold border-4 rounded-[10rem] flex items-center border-secondary/40 justify-center w-14 h-14 bg-primary text-quaternary">1</p>
                     <p className="text-3xl font-light font-germania  my-4"> We use whole-animal, ethically sourced ingredients. </p>
                  </div>

                  <div className="w-1/4  text-center">
                     <p className="text-3xl justify-self-center  font-extrabold border-4 rounded-[10rem] flex items-center border-secondary/40 justify-center w-14 h-14 bg-primary text-quaternary">2</p>
                     <p className="text-3xl font-light font-germania  my-4">  Raw and frozen to preserve nutrients and protect instinct. </p>
                  </div>

                  <div className="w-1/4 text-center ">
                     <p className="text-3xl justify-self-center  font-extrabold border-4 rounded-[10rem] flex items-center border-secondary/40 justify-center w-14 h-14 bg-primary text-quaternary">3</p>
                     <p className="text-3xl font-light font-germania  my-4"> Watch Instinct <br /> Kick In</p>
                  </div> 
            </div>
            <Button  onClick={() => router.push('/login')} className="mt-10 hover:bg-quaternary hover:text-primary border-quaternary border-2 text-quaternary text-lg font-arvo font-bold h-auto"> Join The Club </Button>
            </section>
        

       

        <section className=" py-24 mt-20 flex-col font-arvo justify-items-center justify-self-center">
            <p className="mb-10 text-7xl text-quaternary font-germania font-bold"> The Secret’s Out... </p>
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

          

            <div className="w-full mb-32 py-16 bg-quinary flex flex-row items-center justify-center gap-16 ">/
                <div className=" text-7xl gap-y-8 font-germania text-primary  px-4  justify-self-start leading-[5rem] flex flex-col ">
                      <p >
                          Some things are better raw
                      </p>
                      <p >
                          including our ingridents
                      </p>
                </div>
                <Dog className=" justify-self-end  size-60" />
            </div>

          


        <section className="my-10  border-2 font-arvo text-quaternary border-tertiary  rounded-lg w-11/12 py-10 flex-col justify-items-center justify-self-center">
            <p className="mb-10 text-7xl  font-bold font-germania "> Raw Dawg & The Industry </p>
            <p className="mb-10 text-1xl font-light text-lg italic"> Raw Dawg Vs Other Brands  </p>
            
            <table className="w-11/12 table-fixed">
                <thead className="">
                    <tr >
                        <th></th>
                        <th>
                              <p className="text-3xl font-light font-satisfy">Dry Food 
                            </p>
                        </th>
                        {/* <th><img alt="Progress Steps" className="w-28 my-4 justify-self-center " src="https://magicspoon.com/cdn/shop/files/MS_G_VARIETY4_DCA_HERO.png?v=1738958405"/></th> */}
                        <th>
                            <p className="text-3xl font-light font-satisfy">Gently Cooked 
                            </p>
                        </th>
                       
                        
                        <th className="bg-tertiary rounded-t-2xl text-primary font-bold font-satisfy text-3xl">
                          <p className="my-8">Raw Dawg</p>
                          </th>
                        
                    </tr>
                </thead>
                <tbody className="text-center font-extralight italic">
                    <tr className=" border-y text-2xl leading-[2rem] py-20 border-quaternary border-collapse ">
                        <td className="text-center p-10 align-middle text-2xl font-bold font-germania ">Heat-Free
Ingredients</td>
                        <td className="p-10 align-middle ">< CircleX className="size-14 stroke-quaternary mx-auto" /></td>
                         <td className="p-10 align-middle ">< CircleX className="size-14  mx-auto" /></td>
                        <td className="p-10 align-middle bg-tertiary ">< CheckCircle className="size-14  mx-auto stroke-primary" /></td>
                        
                        
                    </tr>

                    <tr className=" border-y text-2xl leading-[2rem] py-20 border-quaternary border-collapse ">
                        <td className="text-center  p-10 align-middle text-2xl font-bold font-germania ">Species-Appropriate Ingredients</td>
                        <td className="p-10 align-middle ">< CircleX className="size-14  mx-auto" /></td>
                         <td className="p-10 align-middle ">< CircleX className="size-14  mx-auto" /></td>
                        <td className="p-10 align-middle bg-tertiary ">< CheckCircle className="size-14  mx-auto stroke-primary" /></td>
                        
                        
                    </tr>

                    <tr className=" border-y text-2xl leading-[2rem] py-20 border-quaternary border-collapse ">
                        <td className="text-center  p-10 align-middle text-2xl font-bold font-germania ">No Fillers, Synthetics</td>
                        <td className="p-10 align-middle ">< CircleX className="size-14 stroke-quaternary mx-auto" /></td>
                         <td className="p-10 align-middle ">< CircleX className="size-14  mx-auto" /></td>
                        <td className="p-10 align-middle bg-tertiary ">< CheckCircle className="size-14  mx-auto stroke-primary" /></td>
                        
                        
                    </tr>
                    <tr className=" border-y text-2xl leading-[2rem] py-20 border-quaternary border-collapse ">
                        <td className="text-center  p-10 align-middle text-2xl font-bold font-germania ">100 % Animal Based</td>
                        <td className="p-10 align-middle ">< CircleX className="size-14 mx-auto" /></td>
                        <td className="p-10 align-middle "><CircleX className="size-14 stroke-quaternary mx-auto" /></td>
                        <td className="p-10 align-middle bg-tertiary ">< CheckCircle className="size-14  mx-auto stroke-primary" /></td>
                        
                        
                    </tr>
                    <tr className=" border-y text-2xl leading-[2rem] py-20 border-quaternary border-collapse ">
                        <td className="text-center  p-10 align-middle text-2xl font-bold font-germania ">Built For Longevity</td>
                        <td className="p-10 align-middle ">< CircleX className="size-14  mx-auto" /></td>
                         <td className="p-10 align-middle ">< CheckCircle className="size-14 stroke-quaternary  mx-auto" /></td>
                        <td className="p-10 align-middle bg-tertiary ">< CheckCircle className="size-14  mx-auto stroke-primary" /></td>
                        
                        
                    </tr>
                  
                    
                </tbody>
            </table>
          
        </section>

      
        <section className=" w-full  flex-col my-24  mb-0 font-arvo justify-items-center justify-self-center">
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

          
        </section>


        <section className="mb-32 py-8 text-quinary font-arvo flex-col justify-items-center justify-self-center">
            <div className="flex justify-between ">
                 <div className="  text-3xl font-light w-2/6  flex flex-col justify-around text-center gap-8  font-germania px-10">

                     <div className=" block"> <span className="text-8xl mb-10 font-ger font-bold block"> 75<span className="text-3xl m-0 p-0">%</span> </span> Muscle Meat</div>
                    
                    <div className=" block"> <span className="text-8xl mb-10  font-ger font-bold block"> 10<span className="text-3xl m-0 p-0">%</span> </span> Bone</div>
                    
                    <div className=" block"> <span className="text-8xl mb-10 font-ger font-bold block"> 10<span className="text-3xl m-0 p-0">%</span> </span> Organs </div>

                    <div className=" block"> <span className="text-8xl mb-10 font-ger font-bold block"> 5<span className="text-3xl m-0 p-0">%</span> </span> Instinct Boost </div>
                    
                    
                  </div>

                  
                  <div className="w-4/6  text-3xl font-serif text-center">

                    <picture className="bg-fuchsia-400 w-1/4"><source type="image/gif"/>
                    <img alt="Progress Steps" className="h-full" src={img9.src}/>
                  </picture>

                  </div> 

                  
            </div>
          
        </section>

         <section className="bg-quinary w-11/12 justify-self-center mt-64 py-10 px-20  text-primary flex flex-col gap-16  font-arvo  ">

                             <div className="w-3/5 self-start ">
                                <p className="text-3xl my-6 font-light"> WHY WE EXIST AND WHY <span className="font-bold font-germania text-6xl">RAW DAWG?</span> </p>
                                <p className="my-4 text-lg leading-[2.3em]" >
                                  Raw Dawg exists to restore what the modern dog food industry abandoned: real nourishment
                                  built for health, not profit. Big Pet Food optimized for shelf life and margins, and the result isn’t
                                  health. It’s chronic illness, normalized and dismissed as “aging.” That isn’t normal.
                                 
                                  Raw Dawg makes food dogs are built to thrive on, not tolerate. This isn’t a trend or an extreme
position. It’s a direct response to a broken system.
                                  <br /><br />
                                  The name Raw Dawg reflects that mindset. While the industry hides behind soft language and
reassurance layered over hard processing, we chose the opposite. A name that cuts through
the noise and says exactly what it means.
                                  <br /><br />
                                  Raw Dawg refuses to sanitize reality to make it more comfortable or more marketable. Just like
the food, the name stays intact. Unfiltered. Unprotected.
                                   </p>

                            </div> 

                            <div className="w-3/5  self-end">
                                <p className="text-5xl my-6 font-bold font-germania"> OUR STORY </p>
                                <p className="my-4 text-lg leading-[2.3em]" >
                                  Raw Dawg didn’t begin as a business. It began as a lifeline!
                                 
                               <br /><br />
                                   When our puppy, Bojangles, got sick, we did exactly what we were told to do. Vet visits.
                                  Prescription food. Medications. Trust the system. Trust the label. But he kept getting worse. So
                                  we slowed down and looked closer. What we found wasn’t nourishment. It was food engineered
                                  for convenience, shelf life, and margins, not for dogs. We stripped everything back and fed Bo
                                  food his body recognized. The response didn’t need interpretation. That’s when we understood
                                  this wasn’t just a diet. It was a return to instinct. Raw Dawg was born for Bo, and for every dog
                                  who deserves the same chance.
                                </p>
                               
                            </div>

                            <div className=" self-center ">
                                <p className="text-3xl my-6 text-center font-light"> THE ANCESTRAL <span className="font-bold font-germania text-5xl">BLUEPRINT</span> </p>
                                <div className="flex text-lg justify-center gap-20">
                                    <p className="w-4/12  my-4 leading-[2.3em]" >
                                 Dogs are still built like the animals they came from. Their biology was shaped long before
modern food systems existed. Humans and dogs evolved alongside each other. We hunted
together, moved together, survived together. That alignment held until humans changed how
food was produced. Agriculture replaced hunting. Processing replaced preparation.
Convenience replaced necessity. And dogs were pulled into a food system their bodies were
never designed for.
<br /><br />
The biggest break came with kibble.
                                  </p>
                                  <p className="w-4/12 my-4 leading-[2.3em]" >
                                 introduced in the 1920s, kibble was designed to be cheap, shelf-stable,
and easy to mass-produce. It solved a manufacturing problem, not a biological one. From that
point on, dog food became increasingly shaped by processing, preservation, and scale.
<br /><br />
Dogs are not small humans. They aren’t built for cooked, ultra-processed diets. Their stomach
acid is highly acidic. Their digestive tract is short and fast. Their jaws tear and crush, not grind.
Every part of their anatomy points to raw, unprocessed food.
                                  </p>
                                  <p className="w-4/12 my-4 leading-[2.3em]" >
                                 Cooking destroys nutrients dogs rely on. Raw food delivers nourishment in a form their bodies
recognize. This isn’t a trend. It’s a biological match. Once you understand that, kibble stops
making sense.
That’s why we feed raw. Not because it’s extreme or fashionable, but because it aligns with how
dogs are built. At Raw Dawg, we follow that original blueprint. No grains. No fillers. No
compromises. Just food that respects biology.
                                  </p>
                                </div>
                            </div>

                    <div className="mt-40 gap-20 justify-center items-center self-center w-4/5 flex">
                            <picture className="w-2/5"><source type="image/gif"/>
                            <img alt="Progress Steps" className="border-2 rounded-2xl border-secondary w-96 h-86" src={img6.src}/>
                          </picture>
                         <div className="w-2/5">
                             <p className="text-3xl text-center font-light"> From our <span className="font-bold font-germania text-6xl">Founders </span> </p>
                                
                          <p className="text-center mt-4"> 
                            “We made Raw Dawg for our dog just as much as we made it for every dog out there. Dogs give
us everything without hesitation. Their energy. Their loyalty. Their presence. We believe feeding
them should be just as intentional. Raw Dawg was built for the dogs who run with us, sleep next
to us, grow old with us, and make our lives better just by being in them. It’s for anyone who sees
their dog not as a pet, but as a best friend, and wants to give them food that actually helps them
thrive!” <br /> <br />
<span className="text-end"> Sierra & Blake</span>
                          </p>
                         </div>
                   </div>









         </section>
        
        <section className="flex  justify-center p-4 gap-x-32 w-10/12 justify-self-center my-24">
                   <div className="w-1/5">
                            <div className="border-2 rounded-2xl border-secondary w-80 h-64 bg-cover bg-[url(..\/assets\/product-varaity.webp)]" />
                            <p className="text-center mt-8 font-germania text-2xl"> we use whole-animal, ethically sourced ingredients </p>
                   </div>

                  <div className="w-1/5">
                            <div className="border-2 rounded-2xl border-secondary w-80 h-64 bg-cover bg-center bg-[url(..\/assets\/product-dog.webp)]" />
                            <p className="text-center mt-8 font-germania text-2xl"> Raw and frozen to preserve nutrients and protect instinct </p>
                   </div>
                   <div className="w-1/5">
                            <div className="border-2 rounded-2xl border-secondary w-80 h-64 bg-cover bg-[url(..\/assets\/product-in-fridge.webp)]" />
                            <p className="text-center mt-8 font-germania text-2xl"> And deliver it straight to your door. <br /> Ancestral nutrition made simple! </p>
                   </div>
        </section>
       
     

        <section className="bg-quaternary my-64 py-10 w-full  flex items-center font-arvo justify-around ">
            <p className="mb-10 w-3/6 text-8xl font-bold font-germania text-primary " style={{lineHeight: '8rem'}}> The rebellion against Big Pet Food starts in your dog's bowl.</p>
            <a href="/About" className="text-4xl font-germania p-4 w-1/5 text-center border-tertiary  hover:border-primary hover:text-primary hover:bg-primary/10 hover:cursor-pointer border-4 text-quaternary bg-primary/80 rounded-3xl"> Read More  </a>
        </section>

       
        <section className=" pb-36  flex-col justify-items-center text-3xl font-arvo font-light w-3/5 justify-self-center">
            <p className="mb-10 text-7xl font-bold font-germania first-letter:text-8xl text-tertiary"> FAQ </p>
              <Tabs defaultValue="Raw Feeding" onValueChange={(value)=> {
                            console.log("the value " , value);
                            setMode(value as "Raw Feeding" | "Our Products");
                        }}>
                            <TabsList className=" mb-8 font-germania p-1 text-3xl  text-primary " >
                                <TabsTrigger value="Raw Feeding" className="p-2 rounded-xl data-[state=active]:bg-tertiary data-[state=inactive]:text-tertiary data-[state=active]:font-bold me-6 ">Raw Feeding</TabsTrigger>
                                <TabsTrigger value="Our Products" className="p-2 rounded-xl data-[state=active]:bg-tertiary data-[state=inactive]:text-tertiary data-[state=active]:font-bold  " >Our Products</TabsTrigger>
                            </TabsList>
                        </Tabs>
                        
                        <Accordion
                                  type="single"
              collapsible
              className="w-11/12 p-5 bg-tertiary text-3xl text-primary font-arvo font-light"
              defaultValue="item-0"
                                >
                                 {
                                    data[mode].map((item,index) => (
                                              <AccordionItem value={"item-" + index} className="mb-8 py-4 border-b-2 border-primary">
                                          <AccordionTrigger className="text-3xl font-germania capitalize text-start leading-10 hover:underline "> {item.title} </AccordionTrigger>
                                          <AccordionContent className="flex flex-col gap-4 p-2 leading-9 text-base text-start">
                                              <p className=""> {item.content} </p>
                                          </AccordionContent>
                                        </AccordionItem>
                                    ))
                                 }
                            
                                  </Accordion>
          
        </section>

       



    </div>
    
  );
}
