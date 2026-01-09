import { Button } from "@/components/ui/button";
import { Dot, X } from "lucide-react";
import { Check, CheckCircle, CircleX,  MoveLeft, MoveRight, } from "lucide-react";
import Wave1 from "@/assets/layered-waves-haikei (1).svg"
import Wave2 from "@/assets/layered-waves-haikei (2).svg"
import Wave3 from "@/assets/layered-waves-haikei (3).svg"
import Wave4 from "@/assets/layered-waves-haikei (4).svg"
import Wave from "@/assets/layered-waves-haikei.svg"
import IconLogo from "@/assets/Raw Dawg_iconlogo_4.svg"

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
import { useRouter } from "next/navigation";

export default function Ingredients() {
  return (
         <div className=" flex-col content-center  bg-primary font-acumin justify-items-center ">

            <section className="py-24 w-full flex flex-col items-center bg-[#82866D] text-[#0b0b0b] text-center px-24 mt-10">
                <p className=" md:text-7xl font-germania uppercase mb-6">Ingredients chosen by biology,<br /> not industry trends.</p>
                <p className="text-2xl max-w-5xl leading-relaxed">
                  Dogs didn’t evolve eating formulas designed for shelf life.<br/> They evolved eating animals.
                </p>

                <p className="text-2xl max-w-5xl leading-relaxed mt-12">
                  Raw Dawg’s recipes are built to reflect that reality.
                </p>
            </section>

            <div className="w-full flex justify-center bg-[#82866D]">
              <div
                className="h-40 w-80 rounded-t-full bg-[#4e5042] -mb-16 -translate-y-[62.5px] flex items-center justify-center"
                aria-hidden="true"
              >
                <IconLogo className="h-96 w-auto translate-y-[120px] translate-x-[-50px] text-[#0b0b0b]" />
              </div>
            </div>

            {/* <figure className="w-full ">
          <Wave2 className="w-full fill-[#60654b]" />
          <figcaption className="sr-only">Decorative wave divider between sections</figcaption>
        </figure> */}



            <section className="w-full mx-auto bg-[#4f533d] text-white py-56 px-8 flex flex-col items-center gap-8">
              <p className="text-5xl md:text-7xl font-germania text-center text-[#0b0b0b]">The Whole Prey Formula</p>
              <p className="text-lg md:text-2xl text-center max-w-4xl text-white/80">
                RAW DAWG follows a whole-prey approach, meaning every recipe includes the full spectrum of what dogs instinctively consume in nature.
              </p>
              <p className="text-5xl md:text-7xl font-germania tracking-widest text-center mb-10">75 / 10 / 10 / 5</p>
              <div className="grid grid-cols-1 md:grid-cols-2  gap-12  w-full max-w-5xl text-white/85">
                <div className="-mx-20">
                  <p className="text-4xl font-semibold mb-2 text-white">75% Muscle Meat</p>
                  <p className="text-3xl leading-relaxed">Whole-animal muscle and skin deliver <br/> protein, fat, and amino acids dogs are <br/> biologically built to run on.</p>
                </div>
                <div className="ml-20">
                  <p className="text-4xl font-semibold mb-2 text-white">10% Raw Meaty Bone</p>
                  <p className="text-3xl leading-relaxed">Structure and minerals and <br/> bioavailable calcium and phosphorus <br/> no powders, no lab-made shortcuts.</p>
                </div>
                <div className="-mx-20">
                  <p className="text-4xl font-semibold mb-2 text-white">10% Organs</p>
                  <p className="text-3xl leading-relaxed">Nature’s multivitamin. Liver <br/> and secreting organs supply fat-soluble <br/> vitamins and trace minerals.</p>
                </div>
                <div className="ml-20">
                  <p className="text-4xl font-semibold mb-2 text-white">5% Instinct Boost</p>
                  <p className="text-3xl leading-relaxed">Green tripe, connective tissue, and <br/> fur support digestion, joints, and gut <br/> health.</p>
                </div>
              </div>
              <p className="text-xl md:text-6xl font-germania text-center text-[#0b0b0b] mt-16">Nothing added. Nothing missing.</p>
              <p className="text-base md:text-3xl text-center max-w-3xl text-[#0b0b0b] mt-4">
                Every nutrient your dog needs is already present <br/> because it comes from the animal, not a lab.
              </p>
            </section>

            <section className="mt-40 flex w-11/12 mb-8 items-center justify-between">
                 
                <div className="h-[32rem] bg-center bg-contain bg-no-repeat bg-[url('..\/assets\/ECOMM-RAWDAWG-BEEF-02.webp')]
                          rounded-xl w-5/12 flex items-center justify-center object-cover">
                   
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
                 
                <div className="h-[32rem] bg-center bg-contain bg-no-repeat bg-[url('..\/assets\/ECOMM-RAWDAWG-TURKEY&SALMON-02.webp')]
                          rounded-xl w-5/12 flex items-center justify-center object-cover">
                   
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
                          srcSet={img5.src}/>
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
                          srcSet={img6.src}/>
                        <img alt="Progress Steps" className="h-[10rem] w-[10rem]"/>
                      </picture>
                        
                        <p className="text-3xl mb-3  capitalize font-extrabold w-11/12 ">TURKEY </p>
                        <span className="text-lg font-bold mt-4"> 
                             Whole turkey, turkey heart, gizzard, neck, liver.
                        </span>
                    </div>

                    <div className="bg-quaternary text-white p-4 rounded-lg   w-2/5 shrink-0">
                        <picture className=" float-right -mt-16 me-2 "><source type="image/webp" 
                          srcSet={img7.src}/>
                        <img alt="Progress Steps" className="h-[10rem] w-[10rem]"/>
                      </picture>
                        
                        <p className="text-3xl mb-3  capitalize font-extrabold w-11/12 "> TURKEY + SALMON </p>
                        <span className="text-lg font-bold mt-4"> 
                          Wild salmon (with skin and head), whole turkey, heart, gizzard, neck, liver.
                        </span>
                    </div>
                    
                    


                    

          </section>

          <section className="mt-32 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-quaternary text-primary rounded-2xl p-8">
              <p className="text-3xl font-germania mb-3">Minerals — From Bone, Not Powder</p>
              <p className="text-lg leading-relaxed">Calcium, phosphorus, magnesium, and trace minerals come from raw meaty bones and connective tissue — the same way dogs have always consumed them.</p>
              <p className="text-lg leading-relaxed mt-3">No bone meal. No calcium carbonate. No synthetic balancing.</p>
            </div>
            <div className="bg-quaternary text-primary rounded-2xl p-8">
              <p className="text-3xl font-germania mb-3">Vitamins — From Organs, Not Pills</p>
              <p className="text-lg leading-relaxed">Liver and secreting organs supply fat-soluble vitamins A, D, E, and K in their natural, bioavailable form.</p>
              <p className="text-lg leading-relaxed mt-3">These nutrients can’t be replicated synthetically without losing their biological context.</p>
            </div>
            <div className="bg-quaternary text-primary rounded-2xl p-8">
              <p className="text-3xl font-germania mb-3">Functional Nutrition — From Instinct, Not Supplements</p>
              <p className="text-lg leading-relaxed">Green tripe, cartilage, trachea, fur, and connective tissue provide enzymes, collagen, probiotics, and joint-supporting compounds — without isolates or additives.</p>
            </div>
          </section>

           <figure className="w-full ">
              <Wave1 className="w-full fill-tertiary" />
              <figcaption className="sr-only">Decorative wave divider between sections</figcaption>
            </figure>

          <section className="bg-tertiary font-acumin text-primary  w-full flex flex-col items-center gap-[6rem]  py-16">
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

          <section className="bg-quaternary/20 font-acumin text-quaternary  w-full flex flex-col items-center gap-[6rem]  py-16">
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
