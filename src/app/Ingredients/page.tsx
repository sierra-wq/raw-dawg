import { Button } from "@/components/ui/button";
import { Dot, X } from "lucide-react";
import { Check, CheckCircle, CircleX,  MoveLeft, MoveRight, } from "lucide-react";
import Wave1 from "@/assets/layered-waves-haikei (1).svg"
import Wave2 from "@/assets/layered-waves-haikei (2).svg"
import Wave3 from "@/assets/layered-waves-haikei (3).svg"
import Wave4 from "@/assets/layered-waves-haikei (4).svg"
import Wave from "@/assets/layered-waves-haikei.svg"

import img1 from "@/assets/product1.jpg"
import img2 from "@/assets/product2.jpg"

import Logo from "@/assets/RawDawg.svg";
import { useRouter } from "next/navigation";

export default function Ingredients() {
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

  const whatYouget = [
    {
      title : 'High-Quality Meats',
      detail : `We start with premium cuts of beef, turkey, chicken, and salmon — responsibly sourced from
                                  farms that raise animals right. No scraps, no waste-bin leftovers. Just clean, nutrient-dense
                                  proteins that fuel strength, lean muscle, and vitality.`
    },
    {
      title : 'Sourcing with Integrity',
      detail : `every part of our process is intentional and transparent. We use regeneratively raised proteins 
                                  from farms that actively heal the land, and we only work with animals raised with respect—never 
                                  factory-farmed. Every cut is chosen for its nutrient density and alignment with true canine biology, 
                                  and every ingredient is clearly listed. Nothing is hidden, nothing diluted, and absolutely no fillers 
                                  or shortcuts ever make it into the bowl.`
    },
    {
      title : "Benefits You'll See",
      detail : `A raw, biologically aligned diet leads to better digestion with smaller, 
                                 firmer stools, and supports stronger immunity through a balanced gut biome.
                                The natural inclusion of cartilage and connective tissue promotes joint health and mobility,
                                 while nutrient-dense whole foods fuel shiny coats, lean muscle, and boundless energy. 
                                 Over time, this approach nurtures longer vitality and resilience—the way nature intended.`
    },

  ]
  
  return (
         <div className=" flex-col content-center  bg-primary font-arvo justify-items-center ">

            <section className="py-20 w-full flex items-center bg-quaternary  justify-around text-primary">
                <div className=" w-3/5 text-center flex-col justify-items-center ">
                    <p className="text-7xl mt-16  capitalize font-extrabold w-11/12 ">Human-grade, all-natural dog food made easy.</p>
                    <p className="text-lg my-10 text-primary/90 font-satisfy font-thin w-3/5 "> Sundays for Dogs is what dog food always should have been: human-grade, vet-formulated, and air-dried to make dog parents lives easier.</p>
                  
                </div>
            </section>

            <figure className="w-full ">
          <Wave2 className="w-full fill-quaternary" />
          <figcaption className="sr-only">Decorative wave divider between sections</figcaption>
        </figure>



             <section className="mt-40 flex w-11/12 mb-8 items-center justify-between">
                 
                <div className="h-[32rem] bg-[url('https://images.pexels.com/photos/2255459/pexels-photo-2255459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]
                         border-4 border-quaternary rounded-xl w-5/12 flex items-center justify-center object-cover">
                    <p className="text-8xl text-primary mb-6 capitalize  font-extrabold ">
                        Original
                    </p>
                </div>
                <div className=" py-10 px-5 rounded-lg  bg-quaternary text-primary/90 w-6/12 flex-col  ">
                    <p className="text-5xl mb-6  capitalize font-extrabold w-11/12 ">
                        What's Inside
                    </p>
                    <span className="text-sm font-light mt-4"> 
                       Raw Dawg meals are built on the whole prey model: muscle, organ, bone, connective tissue,
                        and instinct-driven extras that mirror what wild dogs instinctively consume. Nothing missing.
                        Nothing wasted.
                        Every ingredient is chosen for biological appropriateness, not industry trends. No grains. No
                        fillers. No seed oils. No synthetic vitamins. No artificial bullsh*t.
                       </span>
                </div>
            </section>

            <section className="mt-40 flex w-11/12 mb-8 items-center justify-between">
                 
                <div className=" py-10 px-5 rounded-lg  bg-quaternary text-primary/90 w-6/12 flex-col  ">
                    <p className="text-4xl mb-6  capitalize font-extrabold w-11/12 ">
                        Whole Prey Formula
                    </p>
                    <span className="text-sm  font-light mt-4"> 

                      At Raw Dawg we offer raw, instinct-driven meals built on real, whole-animal nutrition. Every
                      recipe follows our proprietary Whole Prey Formula (75/10/10/5)

                        <span className="flex items-center w-2/4"> <Dot className="size-10"/> 75 percent meat </span>
                        <span className="flex items-center w-2/4"> <Dot className="size-10"/>  10 percent vegetables</span> 
                        <span className="flex items-center w-2/4"> <Dot className="size-10"/>  10 percent fruits</span>
                        <span className="flex items-center w-2/4"> <Dot className="size-10"/>  5 percent nuts</span>

                      This framework delivers the full spectrum of nutrients dogs need - from muscle to marrow -
                      without preservatives, fillers, or synthetic Band-Aids.
                      <br/>
                      <br/>
                      Inspired by the ancestral diet of the gray wolf - before agriculture, before kibble, before
                      compromise. Our recipes are designed for modern dogs who still share 99% of their DNA with
                      their wild relatives. 
                      <br/>
                      <br/>
                      Most are fed food their bodies were never built to digest.
                      We're not reinventing dog food. We're correcting it.
                    </span>
                </div>
                <div className="h-[32rem] bg-[url('https://images.pexels.com/photos/4921185/pexels-photo-4921185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]
                         border-4 border-quaternary rounded-xl w-5/12 flex items-center justify-center bg-cover">
                    <p className="text-8xl text-primary mb-6 capitalize  font-extrabold ">
                        Original
                    </p>
                </div>
            </section>


            <section className="mt-40 flex w-11/12 mb-8 items-center justify-between">
                 
                <div className="h-[32rem] bg-[url('https://images.pexels.com/photos/551627/pexels-photo-551627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]
                         border-4 border-quaternary rounded-xl w-5/12 flex items-center justify-center bg-cover">
                    <p className="text-8xl text-primary mb-6 capitalize  font-extrabold ">
                        Original
                    </p>
                </div>
                <div className=" py-10 px-5 rounded-lg  bg-quaternary text-primary/90 w-6/12 flex-col  ">
                    <p className="text-4xl mb-6  capitalize font-extrabold w-11/12 ">
                        Custom Formula.
                    </p>
                    <span className="text-sm font-light mt-4"> 
                      The raw feeding world leans on two main models:
                      <span className="flex my-10 ms-10 items-center font-bold w-3/4"> <Dot className="size-10"/>  Prey Model (80/10/10): Simple and ancestral, but leaves out the extras wild dogs
                      instinctively consume.</span>

                      <span className="flex  mt-10 ms-10 items-center font-bold w-3/4"> <Dot className="size-10"/> BARF Model (Biologically Appropriate Raw Food): Adds fruits and veggies, which may
                      be digestible, but they’re not optimal fuel for carnivores.</span>
                     
                      <br/>

                      Raw Dawg bridges the gap. We kept the wild foundation of prey-based feeding, elevated it with
                      instinct-led ingredients(tripe, raw hide, cartilage, brain, trachea, gizzards), and cut out the plants
                      and fillers that don’t serve your dog’s biology.
                    
                    </span>
                </div>
            </section>

            <figure className="w-full mt-20">
              <Wave1 className="w-full fill-quaternary" />
              <figcaption className="sr-only">Decorative wave divider between sections</figcaption>
            </figure>

            <div className="w-full py-16 ps-16 bg-quaternary flex justify-center ">
              <p className="text-6xl font-bold text-primary w-9/12 px-4 capitalize justify-self-start leading-[5rem]">
                Raw Dawg isn't just food — it's an investment in years of better health and 30-50%
                fewer vet visits.
            </p>
            </div>

            <figure className="w-full mb-10">
              <Wave2 className="w-full fill-quaternary" />
              <figcaption className="sr-only">Decorative wave divider between sections</figcaption>
            </figure>
            
          <section className=" p-8 my-20  flex gap-[3rem] w-full overflow-x-auto no-scrollbar  justify-self-start ">
                  <div className="bg-tertiary text-primary p-4 rounded-lg   w-2/5 shrink-0">
                        <picture className=" float-right -mt-16 me-2 "><source type="image/webp" 
                          srcSet={img1.src}/>
                        <img alt="Progress Steps" className="h-[10rem] w-[10rem]"/>
                      </picture>
                        
                        <p className="text-3xl mb-3  capitalize font-extrabold w-11/12 ">BEEF</p>
                        <span className="text-lg font-bold mt-4"> 
                            Beef muscle meat, heart, liver, kidney, spleen, ground bone, green tripe,
                            beef trachea, beef fur 
                        </span>
                    </div>

                  <div className="bg-quaternary/20 text-tertiary p-4 rounded-lg   w-2/5 shrink-0">
                        <picture className=" float-right -mt-16 me-2 "><source type="image/webp" 
                          srcSet={img2.src}/>
                        <img alt="Progress Steps" className="h-[10rem] w-[10rem]"/>
                      </picture>
                        
                        <p className="text-3xl mb-3  capitalize font-extrabold w-11/12 ">TURKEY </p>
                        <span className="text-lg font-bold mt-4"> 
                             Whole turkey, turkey heart, gizzard, neck, liver.
                        </span>
                    </div>

                    <div className="bg-quaternary text-white p-4 rounded-lg   w-2/5 shrink-0">
                        <picture className=" float-right -mt-16 me-2 "><source type="image/webp" 
                          srcSet="https://d3rekvgx2f3gtb.cloudfront.net/images/webp/redesign-v4/product-images/beef-angled-bowl.webp"/>
                        <img alt="Progress Steps" className="h-[10rem] w-[10rem]"/>
                      </picture>
                        
                        <p className="text-3xl mb-3  capitalize font-extrabold w-11/12 "> TURKEY + SALMON </p>
                        <span className="text-lg font-bold mt-4"> 
                          Wild salmon (with skin and head), whole turkey, heart, gizzard, neck, liver.
                        </span>
                    </div>
                    
                    


                    

          </section>

          <section className=" p-8 flex  w-full justify-center  ">   
              <a href="/About" className=" w-1/6 p-3 text-3xl h-auto text-primary text-center bg-tertiary hover:bg-quaternary hover:text-white hover:border-double hover:border-2 hover:border-primary rounded-[4rem]"> Learn More </a>
          </section>

          <section className=" p-8 my-20 flex-col  ">
                    
                    <div className=" flex justify-between">

                      <div className="bg-quaternary text-primary p-4 rounded-lg  sm:w-4/6 xl:w-3/5 shrink-0 ">
                          <div className=" flex justify-between">
                              <Button className="p-3 w-1/6 hover:bg-primary hover:text-quaternary
                                 bg-qatext-quaternary text-primary border-2
                                 border-primary  text-lg hover:font-bold h-auto font-light"> 
                                    Minirals 
                                 </Button>
                              <Button className="p-3 w-1/6 hover:bg-primary hover:text-quaternary
                                 bg-qatext-quaternary text-primary border-2
                                 border-primary  text-lg hover:font-bold h-auto font-light"> Supplements </Button>
                              <Button className="p-3 w-1/6 hover:bg-primary hover:text-quaternary
                                 bg-qatext-quaternary text-primary border-2
                                 border-primary  text-lg hover:font-bold h-auto font-light"> Vitamins </Button>
                              
                            
                          </div>
                          <span className="text-xl w-11/12 block font-extralight mt-6"> 
                              Here's what makes our recipes special 
                              makes our recipes special Here's what makes our hyhy recipes special 
                              makes our recipes special Here's what makes our recipes special 
                              makes our recipes special Here's what makes our recipes special 
                          </span>

                      </div>

                      <div className="border-2 border-tertiary  p-4 rounded-lg  w-1/5 shrink-0 text-tertiary">
                          <picture className=" float-right -mt-16 me-2 "><source type="image/gif" 
                            srcSet="https://sundaysfordogs.com/assets/v4/dr-tory-sm-03215bf3e071aef635b0d561318285648128c8e319bc465201d0bf5612a4197c.svg"/>
                          <img alt="Progress Steps" className="h-[5rem] w-[5rem]"/>
                        </picture>
                          
                          <span className="text-sm  font-light mt-4"> 
                              <strong className="font-bold text-2xl block   ">Dr. Lisa </strong>
                              Co-Founder & Practicing Veterinarian
                          </span>
                          <p className="text-sm mt-3  w-11/12 ">We source all of our ingredients in the USA, except for beef bone and fish oil, which come from New Zealand. We prefer local sources, but we’re willing to go the distance.</p>
                          
                      </div>

                    </div>

                    <div className=" p-8 my-20 flex gap-[3rem] w-full overflow-x-auto no-scrollbar  justify-self-start ">
                    
                    {
                      items.map((item, index) => (
                         <div key={index} className="border-4 border-tertiary group rounded-lg h-[35rem]  w-2/6 shrink-0 flex-col content-end
                        bg-[url(https://images.pexels.com/photos/4946940/pexels-photo-4946940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-bg-center
                      ">
                          <div className="bg-quaternary/90 p-8 py-6 text-primary ">
                            <p className="text-3xl mb-3  capitalize font-extrabold w-11/12 ">Food made easy.</p>
                            <span className="text-lg  font-light mt-4 hidden group-hover:block"> 
                                <strong className="font-bold">Here's what makes our recipes special </strong>
                                makes our recipes special Here's what makes our hyhy recipes special 
                                makes our recipes special Here's what makes our recipes special 
                                makes our recipes special Here's what makes our recipes special ...
                            </span>
                          </div>
                        </div>

                      ))
                    }

                     
                    
                     

            </div>

             
                      
          </section>

           <figure className="w-full ">
              <Wave1 className="w-full fill-tertiary" />
              <figcaption className="sr-only">Decorative wave divider between sections</figcaption>
            </figure>

          <section className="bg-tertiary font-arvo text-primary  w-full flex flex-col items-center gap-[6rem]  py-16">
                   <p className="text-5xl  px-4 text-primary text-center capitalize font-extrabold ">
                      No compromise , Fully Transparent.
                    </p>
                      
                    <table className="w-11/12 table-fixed  ">
                <thead className=" font-bold text-2xl">
                    <tr >
                        <th>
                            <p className=" ">Brand
                            </p>
                        </th>
                        <th>
                              <p className=" "> Claims
                            </p>
                        </th>
                        {/* <th><img alt="Progress Steps" className="w-28 my-4 justify-self-center " src="https://magicspoon.com/cdn/shop/files/MS_G_VARIETY4_DCA_HERO.png?v=1738958405"/></th> */}
                        
                        <th>
                            <p className=" ">Ingredient 

                            </p>
                        </th>
                        
                        <th className="bg-primary rounded-t-2xl text-quaternary font-bold text-3xl">
                          <p className="my-8">Why Raw Dawg ? </p>
                          </th>
                        
                    </tr>
                </thead>
                <tbody className="text-center font-extralight italic">
                    <tr className=" border-y text-lg leading-[2rem] py-20 border-tertiary border-collapse ">
                        
                        <td className="text-center p-10 align-middle text-lg font-bold "> Purina Pro Plan / ONE </td>
                        <td className="p-10 align-middle "> “High-quality,”
science-based
formulas for sensitive
needs  </td>
                        <td className="p-10 align-middle  ">
                          Corn, wheat, soybean meal,
meat by-products, synthetic
additives
                        </td>
                        <td className="p-10 align-middle bg-primary text-quaternary ">No grains, no by-products
— Raw DawgTM uses
whole, raw animal parts
                        </td>
                        
                    </tr>

                    <tr className=" border-y text-lg leading-[2rem] py-20 border-tertiary border-collapse ">
                        <td className="text-center  p-10 align-middle text-lg font-bold ">Hill's Science Diet</td>
                        <td className="p-10 align-middle "> Vet-backed for weight and life stage support </td>
                        <td className="p-10 align-middle ">Chicken meal, corn gluten, soy, brewers rice, plant oils not biologically idea </td>
                        <td className="p-10 align-middle bg-primary text-quaternary "> No high-heat processing or plant fillers — just instinctual nutrition </td>
                        
                        
                    </tr>

                    <tr className=" border-y text-lg leading-[2rem] py-20 border-tertiary border-collapse ">
                        <td className="text-center  p-10 align-middle text-lg font-bold ">
                          Royal
                          Canin
                        </td>
                        <td className="p-10 align-middle "> 
                          Breed/size-specific
formulas
                        </td>
                        <td className="p-10 align-middle ">
                          Corn, by-products, added
flavors, synthetic nutrients —
all marketing, no biology
                        </td>
                        <td className="p-10 align-middle bg-primary text-quaternary ">
                          Raw Dawg feeds all
breeds the way nature 
intended: with whole prey
                        </td>
                        
                        
                    </tr>
                    <tr className=" border-y text-lg leading-[2rem] py-20 border-tertiary border-collapse ">
                        <td className="text-center  p-10 align-middle text-lg font-bold "> 
                           Iams
                        </td>
                        <td className="p-10 align-middle ">
                          Affordable with
                          “proactive” health
                          support
                        </td>
                         <td className="p-10 align-middle ">
                          Grains, by-product meal, beet
                          pulp, artificial preservatives
                         </td>
                        <td className="p-10 align-middle bg-primary text-quaternary ">
                          We don't cut corners. Real
                          food only. Every time.
                        </td>
                        
                        
                    </tr>
                    <tr className=" border-y text-lg leading-[2rem] py-20 border-tertiary border-collapse ">
                        <td className="text-center  p-10 align-middle text-lg font-bold "> Sundays </td>
                        <td className="p-10 align-middle ">
                          Human-grade, gently
air-dried, convenient
                        </td>
                         <td className="p-10 align-middle ">
Chicory root, apples,
pumpkin, blueberries, quinoa
— marketable, not digestible
                         </td>
                        <td className="p-10 align-middle bg-primary text-quaternary ">
Looks good on paper. Raw
DawgTM fuels real gut
health, not trends.
                        </td>
                        
                        
                    </tr>

                   
                  
                    
                </tbody>
            </table>
                    
          </section>
         
         <figure className="w-full ">
              <Wave2 className="w-full fill-tertiary" />
              <figcaption className="sr-only">Decorative wave divider between sections</figcaption>
            </figure>


          {/*<p className="text-6xl mt-40 mb-20 px-4 text-tertiary text-center capitalize font-bold">What you Get</p>
 
           <section className="mt-10 flex w-11/12 mb-8   border-2 border-tertiary rounded-md   justify-between">

                  {
                       whatYouget.slice(0, 3).map((item, index) => (
                        
                       <div key={index} className="w-4/12 py-10 border-2 text-tertiary bg-quaternary/20 border-tertiary flex justify-between  ps-5 ">
                     
                              <div className="  w-6/12">
                                  <p className="text-3xl mt-3  capitalize font-extrabold  ">{item.title}</p>
                                    
                                  
                                    
                                  <span className="text-sm block font-inter font-light mt-2"> 
                                      {item.detail}
                                  </span>
                              </div>

                                  <picture className=" w-4/12 self-center "><source type="image/gif" 
                                      srcSet="https://sundaysfordogs.com/assets/v4/food-bag-bowl-4584effc02ead82c86bb3730283300c4e3ad05448af6a0f285349212091e0e42.svg"/>
                                    <img alt="Progress Steps" className="h-[10rem] w-[8rem] "/>
                                  </picture>
                                    
                      </div>

                  
                      
                      ))
                      
                  }
                
            </section> */}

          <figure className="w-full mt-32">
              <Wave1 className="w-full fill-quaternary" />
              <figcaption className="sr-only">Decorative wave divider between sections</figcaption>
            </figure>

            <div className="w-full py-16 ps-16 bg-quaternary flex justify-center ">
              <p className="text-6xl font-bold text-primary w-9/12 px-4 capitalize justify-self-start leading-[5rem]">
                No compromises. No lies. Just raw
            </p>
            </div>

            <figure className="w-full mb-32">
              <Wave2 className="w-full fill-quaternary" />
              <figcaption className="sr-only">Decorative wave divider between sections</figcaption>
            </figure>

          <figure className="w-full ">
              <Wave1 className="w-full fill-quaternary/20" />
              <figcaption className="sr-only">Decorative wave divider between sections</figcaption>
            </figure>

          <section className="bg-quaternary/20 font-arvo text-quaternary  w-full flex flex-col items-center gap-[6rem]  py-16">
                   <p className="text-5xl  px-4  text-center capitalize font-extrabold ">
                        Trendy Ingredients to Watch Out For
                    </p>

                    <p className="mb-10 text-1xl font-light text-lg italic"> Not All Glitter Is Gold  </p>
            

                      
                    <table className="w-11/12 table-fixed  ">
                <thead className=" font-bold text-2xl">
                    <tr >
                        
                        <th>
                              <p className=" "> Ingredient
                            </p>
                        </th>
                        {/* <th><img alt="Progress Steps" className="w-28 my-4 justify-self-center " src="https://magicspoon.com/cdn/shop/files/MS_G_VARIETY4_DCA_HERO.png?v=1738958405"/></th> */}
                        
                        <th>
                            <p className=" ">Why It’s Used 

                            </p>
                        </th>
                        
                        <th className="bg-primary rounded-t-2xl text-quaternary font-bold text-3xl">
                          <p className="my-8">Why It’s Not Good for Dogs </p>
                          </th>
                        
                    </tr>
                </thead>
                <tbody className="text-center font-extralight italic">
                    <tr className=" border-y text-lg leading-[2rem] py-20 border-tertiary border-collapse ">
                        
                        <td className="text-center p-10 align-middle text-lg font-bold "> Peas, Lentils, Chickpeas  </td>
                       
                        <td className="p-10 align-middle  ">
                           Plant-based protein boosters, cheap fillers
                        </td>
                        <td className="p-10 align-middle bg-primary text-quaternary ">
                            Linked to heart disease (DCM) in some dogs, high in lectins which may
                            damage the gut, and are not well-digested by dogs
                        </td>
                        
                    </tr>

                    <tr className=" border-y text-lg leading-[2rem] py-20 border-tertiary border-collapse ">
                        <td className="text-center  p-10 align-middle text-lg font-bold ">
                          Sweet Potatoes and Potatoes
                        </td>
                        <td className="p-10 align-middle ">
                            “Wholesome” carb
                            source for bulk/calories
                        </td>
                        <td className="p-10 align-middle bg-primary text-quaternary ">
                           High starch → spikes blood sugar, can feed yeast, and dogs have no
                           dietary need for starch
                        </td>
                        
                        
                    </tr>

                    <tr className=" border-y text-lg leading-[2rem] py-20 border-tertiary border-collapse ">
                        <td className="text-center  p-10 align-middle text-lg font-bold ">
                          Carrots, Spinach,Kale
                        </td>
                        <td className="p-10 align-middle ">
                          “Superfoods” for humans
                        </td>
                        <td className="p-10 align-middle bg-primary text-quaternary ">
                            Oxalates can inhibit calcium absorption, and dogs don’t produce the
                            enzymes needed to break down plant cell walls
                        </td>
                        
                        
                    </tr>
                    <tr className=" border-y text-lg leading-[2rem] py-20 border-tertiary border-collapse ">
                        <td className="text-center  p-10 align-middle text-lg font-bold "> 
                           Zucchini
                        </td>
                        
                         <td className="p-10 align-middle ">
                          Low-calorie veggie used for texture
                         </td>
                        <td className="p-10 align-middle bg-primary text-quaternary ">
                          Adds fiber dogs don't need, doesn't contribute meaningful nutrition to a
                          carnivore diet
                        </td>
                        
                        
                    </tr>
                    <tr className=" border-y text-lg leading-[2rem] py-20 border-tertiary border-collapse ">
                        <td className="text-center  p-10 align-middle text-lg font-bold "> Peanut Butter </td>
                        
                         <td className="p-10 align-middle ">
                              Used for flavor and
                              calories
                         </td>
                        <td className="p-10 align-middle bg-primary text-quaternary ">
                              Can contain xylitol (toxic), high in omega-6 fats → can cause
                              inflammation, not part of a natural diet
                        </td>
                        
                        
                    </tr>

                     <tr className=" border-y text-lg leading-[2rem] py-20 border-tertiary border-collapse ">
                        <td className="text-center  p-10 align-middle text-lg font-bold "> Blueberries & Apples </td>
                        
                         <td className="p-10 align-middle ">
                              “Antioxidant-rich” human foods
                         </td>
                        <td className="p-10 align-middle bg-primary text-quaternary ">
                              High in natural sugars, not harmful in small amounts but unnecessary,
                              can mess with blood sugar regulation in sensitive dogs
                        </td>
                        
                        
                    </tr>

                     <tr className=" border-y text-lg leading-[2rem] py-20 border-tertiary border-collapse ">
                        <td className="text-center  p-10 align-middle text-lg font-bold "> Quinoa,Oats Rice, </td>
                        
                         <td className="p-10 align-middle ">
                              Grain alternatives for “digestibility”
                         </td>
                        <td className="p-10 align-middle bg-primary text-quaternary ">
                              Starches that ferment in the gut, contribute to inflammation, and are
                              evolutionarily inappropriate for dogs
                        </td>
                        
                        
                    </tr>
                   
                  
                    
                </tbody>
            </table>
                    
          </section>
         
         <figure className="w-full ">
              <Wave2 className="w-full fill-quaternary/20" />
              <figcaption className="sr-only">Decorative wave divider between sections</figcaption>
            </figure>


          <p className="text-9xl mt-40 mb-40  px-4 text-tertiary font-satisfy text-center capitalize font-thin ">Only The Best.</p>
 

         </div>
  )

}