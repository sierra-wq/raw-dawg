'use client'
import Wave1 from "@/assets/layered-waves-haikei (1).svg"
import Wave2 from "@/assets/layered-waves-haikei (2).svg"


import Logo from "@/assets/RawDawg.svg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import { useState } from "react"
export default function Faq() {
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
      
  return (
         <div className=" flex-col bg-primary font-acumin content-center  ">

                 

                <div className="bg-tertiary h-[45vh] bg-cover bg-bottom w-full py-20 text-center flex-col content-center justify-items-center ">
                   
                    <p className="text-9xl font-bold text-primary mt-28 capitalize font-germania w-7/12 ">FAQ's</p>
                   
                    <p className="text-4xl font-bold text-primary mt-10 capitalize font-satisfy w-7/12 ">All the help you ever need </p>
                   
                </div>

                   <figure className="w-full ">
          <Wave2 className="w-full fill-tertiary" />
          <figcaption className="sr-only">Decorative wave divider between sections</figcaption>
        </figure>


               <section className=" pb-36  flex-col justify-items-center  font-arvo font-light w-3/5 gap-10 justify-self-center">
            <p className="mb-10 text-7xl text-tertiary font-germania font-bold">FAQ's</p>

                <Tabs defaultValue="Raw Feeding" onValueChange={(value)=> {
                            console.log("the value " , value);
                            setMode(value as "Raw Feeding" | "Our Products");
                        }}>
                            <TabsList className=" mb-8 font-arvo p-1 text-2xl  text-primary " >
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
                                          <AccordionTrigger className="text-3xl capitalize text-start leading-10 hover:underline "> {item.title} </AccordionTrigger>
                                          <AccordionContent className="flex flex-col gap-4 p-2 leading-9 text-base text-start">
                                              <p className=""> {item.content} </p>
                                          </AccordionContent>
                                        </AccordionItem>
                                    ))
                                 }
                            
                                  </Accordion>

            
          
        </section>
          
        </div>

        
  )
}
