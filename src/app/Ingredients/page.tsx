import { Button } from "@/components/ui/button";
import { Dot, X } from "lucide-react";
import { Check, CheckCircle, CircleX,  MoveLeft, MoveRight, } from "lucide-react";
import Wave1 from "@/assets/layered-waves-haikei (1).svg"
import Wave2 from "@/assets/layered-waves-haikei (2).svg"
import Wave3 from "@/assets/layered-waves-haikei (3).svg"
import Wave4 from "@/assets/layered-waves-haikei (4).svg"
import Wave from "@/assets/layered-waves-haikei.svg"
import IconLogo from "@/assets/Raw Dawg_iconlogo_4.svg"
import Dog2 from "@/assets/filthy-0.svg"

import img1 from "@/assets/product1.jpg"
import img2 from "@/assets/product2.jpg"
import img3 from "@/assets/product3.jpg"
import img4 from "@/assets/product4.png"
import img5 from "@/assets/ECOMM-RAWDAWG-BEEF-02.webp"
import img6 from "@/assets/ECOMM-RAWDAWG-TURKEY&SALMON-02.webp"
import img7 from "@/assets/ECOMM-RAWDAWG-TURKEY-02.webp"
import img8 from "@/assets/RAW DAWG-PRODUCT -04.webp"
import img9 from "@/assets/RAW DAWG-PRODUCT -28.webp"

import Logo from "@/assets/RawDawg.svg";
import Link from "next/link";

export default function Ingredients() {
  return (
         <div className=" flex-col content-center  bg-primary font-acumin justify-items-center overflow-hidden ">

            <section className="py-32 px-12  w-full font-arvo flex flex-col items-center bg-[#82866D] text-[#0b0b0b] text-center sm:px-24 ">
                <p className=" text-5xl  sm:text-7xl font-germania uppercase mb-6 ">Ingredients chosen by biology,<br /> not industry trends.</p>
                <p className=" sm:text-3xl  leading-relaxed ">
                  Dogs didn’t evolve eating formulas designed for shelf life.<br/> They evolved eating animals.
                </p>
                
            </section>

            <div className="w-full flex justify-center bg-[#82866D]">
              <div
                className="h-40 w-80 rounded-t-full bg-[#4e5042] -mb-16 -translate-y-[62.5px] flex items-center justify-center"
                aria-hidden="true"
              >
                <IconLogo className="h-96 w-auto translate-y-[8em] translate-x-[-1em]  sm:translate-y-[120px] sm:translate-x-[-50px] text-[#0b0b0b]" />
              </div>
            </div>

            {/* <figure className="w-full ">
          <Wave2 className="w-full fill-[#60654b]" />
          <figcaption className="sr-only">Decorative wave divider between sections</figcaption>
        </figure> */}



            <section className="w-full mx-auto bg-[#4e5042] text-white py-56 px-8 flex flex-col items-center gap-8">
              <p className="text-5xl md:text-7xl font-germania text-center text-[#0b0b0b]">The Whole Prey Formula</p>
              <p className=" sm:text-2xl font-arvo text-center w-10/12 sm:8/12 text-white/80">
                RAW DAWG doesn't  "balance" nutrition in a lab. <br /> We  build it the way nature already solved it: through whole prey.
              </p>
              <p className="text-5xl md:text-7xl font-germania tracking-widest text-center mb-10">75-10-10-5</p>
              <div className="font-arvo flex flex-col items-center lg:flex-row lg:justify-between lg:items-stretch md:gap-4 lg:gap-10 text-center flex-wrap gap-y-20  md:w-full  lg:w-10/12   text-white/85">
                <div className="lg:w-5/12 w-full shrink-0">
                  <p className="text-2xl sm:text-4xl mb-4 text-white">75% Muscle Meat</p>
                  <p className="text-sm sm:text-2xl  leading-relaxed">Whole-animal muscle and skin deliver <br/> protein, fat, and amino acids dogs are <br/> biologically built to run on.</p>
                </div>
                <div className="lg:w-5/12 w-full shrink-0 ">
                  <p className="text-2xl sm:text-4xl font-arvo mb-4 text-white">10% Raw Meaty Bone</p>
                  <p className="text-sm sm:text-2xl  leading-relaxed">Structure and minerals and <br/> bioavailable calcium and phosphorus <br/> no powders, no lab-made shortcuts.</p>
                </div>
                <div className="lg:w-5/12 w-full shrink-0">
                  <p className="text-2xl sm:text-4xl font-arvo mb-4 text-white">10% Organs</p>
                  <p className="text-sm sm:text-2xl  leading-relaxed">Nature’s multivitamin. Liver  and  <br /> secreting organs supply fat-soluble <br /> vitamins and trace minerals.</p>
                </div>
                <div className="lg:w-5/12 w-full shrink-0">
                  <p className="text-2xl sm:text-4xl font-arvo mb-4 text-white">5% Instinct Boost</p>
                  <p className="text-sm sm:text-2xl  leading-relaxed">Green tripe, connective tissue, and <br/> fur support digestion, joints, and gut <br/> health.</p>
                </div>
              </div>
              <p className="text-3xl md:text-6xl font-germania text-center text-secondary mt-16">Nothing added. Nothing missing.</p>
              <p className=" font-arvo md:text-3xl text-center w-10/12 sm:w-full text-secondary mt-4">
                Every nutrient your dog needs is already present <br/> because it comes from the animal, not a lab.
              </p>
            </section>

            

            {/* <figure className="w-full mt-20">
              <Wave1 className="w-full fill-quaternary" />
              <figcaption className="sr-only">Decorative wave divider between sections</figcaption>
            </figure>

            <div className="w-full py-16 ps-16 bg-quaternary flex justify-center ">
              <p className="text-6xl font-bold text-primary w-9/12 px-4 capitalize justify-self-start leading-[5rem]">
                Raw Dawg isn't just food — it's an investment in years of better health and 30-50%
                fewer vet visits.
            </p>
            </div> */}
{/* 
            <figure className="w-full mb-10">
              <Wave2 className="w-full fill-quaternary" />
              <figcaption className="sr-only">Decorative wave divider between sections</figcaption>
            </figure> */}


            
          <section className=" p-8 py-10 my-40   flex flex-wrap gap-12 sm:gap-[6rem] w-full  justify-center   ">
                  

                   
                  
                  <div className="bg-tertiary text-primary flex flex-col items-center p-4  rounded-lg relative w-full sm:w-10/12 text-center mb-32 lg:mb-0 lg:w-5/12 xl:w-3/12 shrink-0">
                        <div className=" absolute -top-44 sm:-top-32 sm:-right-24  h-64 w-56 bg-contain bg-no-repeat bg-right bg-[url('..\/assets\/beef.png')]"/>

                        <p className="text-3xl sm:text-5xl mt-12  sm:mb-3 capitalize  w-11/12 font-germania ">BEEF</p>
                        <span className="block w-4/5 text-sm sm:text-xl leading-relaxed capitalize font-arvo mt-4"> 
                            Beef muscle meat, beef heart, beef liver, beef kidney, beef spleen, ground beef bone, raw green tripe, beef trachea
                        </span>
                    </div>

                  <div className="bg-quaternary/20 text-quaternary flex flex-col items-center p-4 rounded-lg relative w-full sm:w-10/12 text-center mb-32 lg:mb-0 lg:w-5/12 xl:w-3/12 shrink-0">
                        <div className=" absolute -top-44 sm:-top-32 sm:-right-24  h-64 w-56 bg-contain bg-no-repeat bg-right bg-[url('..\/assets\/turkey.png')]"/>
                        
                        <p className=" text-3xl sm:text-5xl mt-12 sm:mb-3 capitalize font-germania w-11/12 ">TURKEY </p>
                        <span className="text-sm sm:text-xl block w-4/5 font-arvo capitalize mt-4"> 
                             Free-range turkey thighs, turkey heart, turkey gizzard, turkey neck bone, turkey liver.

                        </span>
                    </div>

                    <div className="bg-quinary text-white flex flex-col items-center p-4 rounded-lg relative w-full sm:w-10/12 text-center  lg:mb-0 lg:w-5/12 xl:w-3/12 shrink-0">
                        <div className=" absolute -top-44 sm:-top-32 sm:-right-24  h-64 w-56 bg-contain bg-no-repeat bg-right bg-[url('..\/assets\/wild.png')]"/>
                        
                        <p className="text-3xl sm:text-5xl mt-12 sm:mb-3 capitalize font-germania w-11/12 "> TURKEY + SALMON </p>
                        <span className="text-sm sm:text-xl block w-4/5 font-arvo capitalize leading-relaxed mt-4"> 
                          Wild-caught salmon (with skin), free-range turkey thighs, turkey heart, turkey gizzard, turkey neck bone, turkey liver, wild-caught salmon head.

                        </span>
                    </div>
                    
                    
              <div className="w-full flex justify-center">
                          <Link href="/Products">
                            <Button 
                              className="my-8 h-auto text-xl sm:text-2xl bg-white rounded-[8rem] font-germania hover:bg-tertiary hover:text-primary px-10 py-4 min-w-[10rem] "
                              style={{ boxShadow: 'inset 8px 7px 6px rgba(0,0,0,0.15),inset -8px -7px 6px rgba(255,255,255,0.3)' }}
                              >
                              
                              Shop Raw Blends
                            </Button>
                          </Link>
              </div>

                    

          </section>
          

          <section className="mb-40 w-11/12 flex flex-col  justify-between gap-y-16 mx-auto text-center font-arvo">
              <div className="py-8">
                <p className="text-4xl sm:text-6xl md:text-7xl font-germania font-bold mb-3 text-quaternary">Minerals</p>
                <p className=" text-xl sm:text-3xl md:text-4xl font-bold leading-relaxed ">From Bone, Not Powder</p>
                {/* <p className="text-lg leading-relaxed">Calcium, phosphorus, magnesium, and trace minerals come from raw meaty bones and connective tissue — the same way dogs have always consumed them.</p>
                <p className="text-lg leading-relaxed mt-3">No bone meal. No calcium carbonate. No synthetic balancing.</p> */}
              </div>
              <div className="py-8">
                <p className="text-4xl sm:text-6xl md:text-7xl font-germania font-bold mb-3 text-quaternary">Vitamins</p>
                <p className=" text-xl sm:text-3xl md:text-4xl font-bold leading-relaxed ">From Organs, Not Pills</p>
                {/* <p className="text-lg leading-relaxed">Liver and secreting organs supply fat-soluble vitamins A, D, E, and K in their natural, bioavailable form.</p>
                <p className="text-lg leading-relaxed mt-3">These nutrients can’t be replicated synthetically without losing their biological context.</p> */}
              </div>
              <div className="py-8 ">
                <p className="text-4xl sm:text-6xl md:text-7xl font-germania font-bold mb-3 text-quaternary">Functional Nutrition</p>
                <p className=" text-xl sm:text-3xl md:text-4xl font-bold leading-relaxed ">From Instinct, Not Supplements</p>
                {/* <p className="text-lg leading-relaxed">Green tripe, cartilage, trachea, fur, and connective tissue provide enzymes, collagen, probiotics, and joint-supporting compounds — without isolates or additives.</p> */}
              </div>
          </section>

           {/* <figure className="w-full ">
              <Wave1 className="w-full fill-tertiary" />
              <figcaption className="sr-only">Decorative wave divider between sections</figcaption>
            </figure> */}

          {/* <section className="bg-tertiary font-acumin text-primary  w-full flex flex-col items-center gap-[6rem]  py-16"> */}
                   {/* <p className="text-5xl  px-4 text-primary text-center capitalize font-extrabold ">
                      No compromise , Fully Transparent.
                    </p>
                       */}
                    {/* <table className="w-11/12 table-fixed  ">
                <thead className=" font-bold text-2xl">
                    <tr >
                        <th>
                            <p className=" ">Brand
                            </p>
                        </th>
                        <th>
                              <p className=" "> Claims
                            </p>
                        </th> */}
                        {/* <th><img alt="Progress Steps" className="w-28 my-4 justify-self-center " src="https://magicspoon.com/cdn/shop/files/MS_G_VARIETY4_DCA_HERO.png?v=1738958405"/></th> */}
                        
                        {/* <th>
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
                     */}
          {/* </section> */}
         
         {/* <figure className="w-full ">
              <Wave2 className="w-full fill-tertiary" />
              <figcaption className="sr-only">Decorative wave divider between sections</figcaption>
            </figure> */}


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

          
<section className="mt-10   font-arvo text-quinary border-tertiary overflow-scroll sm:overflow-hidden  rounded-lg w-full lg:w-11/12  flex-col justify-items-center justify-self-center">
        
           <p className="mb-6 text-5xl sm:text-7xl  px-4  text-center font-germania capitalize font-extrabold ">
                        TRENDY INGREDIENTS WE REFUSE
                    </p>

                    <p className="mb-8 w-10/12 text-sm text-center  sm:text-lg font-light  italic"> "If it exists to market to humans, it doesn’t belong in a dog’s bowl."  </p>
            

                   

        </section>




         <section className="mb-10 px-2 sm:p-0  font-arvo text-quinary border-quinary overflow-scroll sm:overflow-hidden  rounded-lg w-full lg:w-11/12  flex-col justify-items-center justify-self-center">
                <table className=" lg:w-11/12  justify-self-start sm:justify-self-center overflow-x-scroll no-scrollbar rounded-md bg-quaternary/30 table-fixed">
               <thead className=" font-bold text-2xl">
                    <tr className="text-sm sm:text-3xl">
                        
                        <th>
                              <p className="font-germania "> Ingredient
                            </p>
                        </th>
                        
                        <th>
                            <p className="font-germania ">Why It’s Used

                            </p>
                        </th>
                        
                        <th className="bg-tertiary font-germania rounded-t-2xl text-primary font-bold ">
                          <p className="my-8">Why We Don’t Use It </p>
                          </th>
                        
                    </tr>
                </thead>
                <tbody className="text-xs sm:text-xl leading-[2rem]  text-center font-extralight italic">
                    <tr className=" border-y   py-20 border-quinary border-collapse ">
                        
                        <td className="text-center p-10 align-middle  font-bold "> Grains (corn, wheat, rice)  </td>
                       
                        <td className="p-10 align-middle  ">
                          Cheap filler and bulky calories
                        </td>
                        <td className="p-10 align-middle bg-tertiary text-primary ">
                            Dogs don’t require carbohydrates for energy. Grains dilute species-appropriate nutrition 
                            and displace critical animal protein
                        </td>
                        
                    </tr>

                    <tr className=" border-y  leading-[2rem] py-20 border-quinary border-collapse ">
                        <td className="text-center  p-10 align-middle  font-bold ">
                          Legumes (peas, lentils, chickpeas)
                        </td>
                        <td className="p-10 align-middle ">
                           Inflate protein numbers on labels
                        </td>
                        <td className="p-10 align-middle bg-tertiary text-primary ">
                          Plant proteins aren’t species-appropriate and can be harder for dogs to digest
                        </td>
                        
                        
                    </tr>

                    <tr className=" border-y  leading-[2rem] py-20 border-quinary border-collapse ">
                        <td className="text-center  p-10 align-middle  font-bold ">
                          Plants for Fiber
                        </td>
                        <td className="p-10 align-middle ">
                          Adds bulk and “gut health” marketing appeal
                        </td>
                        <td className="p-10 align-middle bg-tertiary text-primary ">
                           Dogs have limited ability to digest plant fiber and no biological requirement for it
                        </td>
                        
                        
                    </tr>
                    <tr className=" border-y  leading-[2rem] py-20 border-quinary border-collapse ">
                        <td className="text-center  p-10 align-middle  font-bold "> 
                           Seed & Vegetable Oils
                        </td>
                        
                         <td className="p-10 align-middle ">
                          Cost-effective fat source
                         </td>
                        <td className="p-10 align-middle bg-tertiary text-primary ">
                         Highly processed omega-6 oils skew fatty acid balance, promote inflammation; not part of a natural prey-based diet
                        </td>
                        
                        
                    </tr>
                    <tr className=" border-y  leading-[2rem] py-20 border-quinary border-collapse ">
                        <td className="text-center  p-10 align-middle  font-bold "> Synthetic Vitamins & Minerals </td>
                        
                         <td className="p-10 align-middle ">
                              Replace nutrients lost during processing
                         </td>
                        <td className="p-10 align-middle bg-tertiary text-primary ">
                              We deliver nutrients through whole organs, bone, and connective tissue. Not lab-made powders
                        </td>
                        
                        
                    </tr>

                   
                    
                   
                  
                    
                </tbody>
            </table>
                    
          </section>

        

         <section className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute top-0 left-0 h-40 w-full bg-gradient-to-b from-primary " />
   <Dog2 className=" justify-self-center size-full fill-primary " />

  {/* Fade overlay */}
  <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-b from-transparent to-quaternary" />
</section>

         </div>
  )

}
