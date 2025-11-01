import { Button } from "@/components/ui/button";
import { X } from "lucide-react";


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



  return (
         <div className=" flex-col content-center font-arvo justify-items-center ">

              <div className="mt-20 flex items-center justify-around text-accent">
                <div className=" w-3/5 text-center flex-col justify-items-center ">
                    <p className="text-7xl mt-16  capitalize font-extrabold w-11/12 ">Human-grade, all-natural dog food made easy.</p>
                    <p className="text-sm my-10 text-secondary font-satisfy font-thin w-3/5 "> Sundays for Dogs is what dog food always should have been: human-grade, vet-formulated, and air-dried to make dog parents lives easier.</p>
                    <span className="text-6xl font-light mt-4"> what makes us special </span>
                </div>
            </div>

             <div className="mt-40 flex w-11/12 mb-8 items-center justify-between">
                 
                <div className="h-[32rem] bg-[url('https://images.pexels.com/photos/2255459/pexels-photo-2255459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]
                         border-4 border-accent rounded-xl w-5/12 flex items-center justify-center object-cover">
                    <p className="text-8xl text-accent mb-6 capitalize  font-extrabold ">
                        Chiken
                    </p>
                </div>
                <div className=" py-10 px-5 rounded-lg  bg-secondary text-accent w-6/12 flex-col  ">
                    <p className="text-4xl mb-6  capitalize font-extrabold w-11/12 ">
                        Human-grade, all-natural dog food made easy.
                    </p>
                    <span className="text-sm font-light mt-4"> Here's what makes our recipes special
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, laboriosam! Laboriosam ipsa, 
                        nesciunt assumenda illo soluta praesentium ab perferendis eius ad voluptatem totam quis libero voluptatum ipsum. Voluptas, fuga!
                       </span>
                </div>
            </div>

            <div className="mt-40 flex w-11/12 mb-8 items-center justify-between">
                 
                <div className=" py-10 px-5 rounded-lg  bg-secondary text-accent w-6/12 flex-col  ">
                    <p className="text-4xl mb-6  capitalize font-extrabold w-11/12 ">
                        Human-grade, all-natural dog food made easy.
                    </p>
                    <span className="text-sm font-light mt-4"> Here's what makes our recipes special
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, laboriosam! Laboriosam ipsa, 
                        nesciunt assumenda illo soluta praesentium ab perferendis eius ad voluptatem totam quis libero voluptatum ipsum. Voluptas, fuga!
                       </span>
                </div>
                <div className="h-[32rem] bg-[url('https://images.pexels.com/photos/4921185/pexels-photo-4921185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]
                         border-4 border-accent rounded-xl w-5/12 flex items-center justify-center bg-cover">
                    <p className="text-8xl text-accent mb-6 capitalize  font-extrabold ">
                        Lamb
                    </p>
                </div>
            </div>


            <div className="mt-40 flex w-11/12 mb-8 items-center justify-between">
                 
                <div className="h-[32rem] bg-[url('https://images.pexels.com/photos/551627/pexels-photo-551627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]
                         border-4 border-accent rounded-xl w-5/12 flex items-center justify-center bg-cover">
                    <p className="text-8xl text-accent mb-6 capitalize  font-extrabold ">
                        Beef
                    </p>
                </div>
                <div className=" py-10 px-5 rounded-lg  bg-secondary text-accent w-6/12 flex-col  ">
                    <p className="text-4xl mb-6  capitalize font-extrabold w-11/12 ">
                        Human-grade, all-natural dog food made easy.
                    </p>
                    <span className="text-sm font-light mt-4"> Here's what makes our recipes special
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, laboriosam! Laboriosam ipsa, 
                        nesciunt assumenda illo soluta praesentium ab perferendis eius ad voluptatem totam quis libero voluptatum ipsum. Voluptas, fuga!
                       </span>
                </div>
            </div>

           

            <p className="text-6xl font-bold text-accent my-40 w-8/12 px-4 capitalize justify-self-start leading-[4rem]">
              Every Sundays for Dogs recipe starts with 83%+ premium protein. No meat meals, no synthetics, and no substitutes.
            </p>
            
            <div className=" p-8 my-20 flex gap-[3rem] w-full overflow-x-auto no-scrollbar  justify-self-start ">
                    <div className="bg-secondary text-surface p-4 rounded-lg   w-2/5 shrink-0">
                          <picture className=" float-right -mt-16 me-2 "><source type="image/webp" 
                            srcSet="https://d3rekvgx2f3gtb.cloudfront.net/images/webp/redesign-v4/product-images/beef-angled-bowl.webp"/>
                          <img alt="Progress Steps" className="h-[10rem] w-[10rem]"/>
                        </picture>
                          
                          <p className="text-3xl mb-3  capitalize font-extrabold w-11/12 ">Food made easy.</p>
                          <span className="text-sm  font-extralight mt-4"> 
                              <strong className="font-bold text-base">Here's what makes our recipes special </strong>
                              makes our recipes special Here's what makes our hyhy recipes special 
                              makes our recipes special Here's what makes our recipes special 
                              makes our recipes special Here's what makes our recipes special 
                          </span>
                      </div>

                    <div className="bg-success text-surface p-4 rounded-lg   w-2/5 shrink-0">
                          <picture className=" float-right -mt-16 me-2 "><source type="image/webp" 
                            srcSet="https://d3rekvgx2f3gtb.cloudfront.net/images/webp/redesign-v4/product-images/beef-angled-bowl.webp"/>
                          <img alt="Progress Steps" className="h-[10rem] w-[10rem]"/>
                        </picture>
                          
                          <p className="text-3xl mb-3  capitalize font-extrabold w-11/12 ">Food made easy.</p>
                          <span className="text-sm  font-extralight mt-4"> 
                              <strong className="font-bold text-base">Here's what makes our recipes special </strong>
                              makes our recipes special Here's what makes our hyhy recipes special 
                              makes our recipes special Here's what makes our recipes special 
                              makes our recipes special Here's what makes our recipes special 
                          </span>
                      </div>

                      <div className="bg-primary text-white p-4 rounded-lg   w-2/5 shrink-0">
                          <picture className=" float-right -mt-16 me-2 "><source type="image/webp" 
                            srcSet="https://d3rekvgx2f3gtb.cloudfront.net/images/webp/redesign-v4/product-images/beef-angled-bowl.webp"/>
                          <img alt="Progress Steps" className="h-[10rem] w-[10rem]"/>
                        </picture>
                          
                          <p className="text-3xl mb-3  capitalize font-extrabold w-11/12 ">Food made easy.</p>
                          <span className="text-sm  font-extralight mt-4"> 
                              <strong className="font-bold text-base">Here's what makes our recipes special </strong>
                              makes our recipes special Here's what makes our hyhy recipes special 
                              makes our recipes special Here's what makes our recipes special 
                              makes our recipes special Here's what makes our recipes special 
                          </span>
                      </div>
                      
                      


                      

            </div>

          <div className=" p-8 flex w-full justify-center  ">   
              <Button className=" w-1/6 p-3 text-3xl h-auto bg-accent hover:bg-secondary hover:text-accent hover:border-double border-4 border-accent rounded-[4rem]"> Learn More </Button>
          </div>

          <div className=" p-8 my-20 flex-col  ">
                    
                    <div className=" flex justify-between">

                      <div className="bg-secondary text-accent p-4 rounded-lg  sm:w-4/6 xl:w-3/5 shrink-0 ">
                          <div className=" flex justify-between">
                              <Button className="p-3 w-1/6 hover:bg-accent hover:text-secondary
                                 bg-secondary text-accent border-2
                                 border-accent  text-lg hover:font-bold h-auto font-light"> 
                                    Minirals 
                                 </Button>
                              <Button className="p-3 w-1/6 hover:bg-accent hover:text-secondary
                                 bg-secondary text-accent border-2
                                 border-accent  text-lg hover:font-bold h-auto font-light"> Supplements </Button>
                              <Button className="p-3 w-1/6 hover:bg-accent hover:text-secondary
                                 bg-secondary text-accent border-2
                                 border-accent  text-lg hover:font-bold h-auto font-light"> Vitamins </Button>
                              
                            
                          </div>
                          <span className="text-xl w-11/12 block font-extralight mt-6"> 
                              Here's what makes our recipes special 
                              makes our recipes special Here's what makes our hyhy recipes special 
                              makes our recipes special Here's what makes our recipes special 
                              makes our recipes special Here's what makes our recipes special 
                          </span>

                      </div>

                      <div className="bg-accent p-4 rounded-lg  w-1/5 shrink-0 text-surface">
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
                         <div key={index} className="border-2 border-secondary group rounded-lg h-[35rem]  w-2/6 shrink-0 flex-col content-end
                        bg-[url(https://images.pexels.com/photos/4946940/pexels-photo-4946940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-bg-center
                      ">
                          <div className="bg-accent p-8 py-6 text-secondary ">
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

             <p className="text-5xl  text-accent capitalize font-extrabold text-center  bg-white"> 
                    We Never Use   
              </p>

               <div className="text-3xl gap-[3rem] w-full overflow-x-auto no-scrollbar my-10 py-3 capitalize flex font-extrabold bg-dark rounded-sm "> 
                    
                    {
                      items.map((item, index) => (
                        <p key={index} className="w-2/5 animate-marquee shrink-0 flex font-inter font-extralight text-error justify-center " > <X className="size-10"/> No junk in our food, ever</p>  
                    
                      ))
                    }
                    
              </div>
                    
              <p className="text-3xl font-satisfy capitalize font-extrabold text-center  bg-white"> 
                    our list grows more but never less  
              </p>
                      
          </div>




          <p className="text-5xl mt-40 mb-20  px-4 text-accent text-center capitalize font-extrabold bg-white">
            No compromise , Fully Transparent.
          </p>
            

          <div className="mt-10 flex w-11/12 mb-8 bg-white  justify-between">

                 <div className=" border-2 border-accent rounded-xl w-5/6 bg-[url(https://images.pexels.com/photos/8477228/pexels-photo-8477228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover">
                    
                  </div>
                
                <div className=" ps-10 rounded-lg gap-[0.5rem] w-3/6 flex flex-col items-end justify-between  ">
                    {
                      items.slice(0, 3).map((item, index) => (
                      <div key={index} className=" py-10 rounded-lg border-4 border-secondary bg-accent text-secondary ps-5     ">
                      <p className="text-2xl mb-6 capitalize font-light w-11/12 ">Human-grade, all-natural dog food made easy.</p>
                      <span className="text-sm  font-light mt-4"> 
            Each recipe is 100% human-grade, starting with 83%+ premium protein. We add whole grains, fruits, and vegetables for optimal nutrition, digestion, and overall health.
           </span>
                    </div>
                      ))
                    }
                
                </div>
                
            </div>


          <p className="text-5xl mt-40 mb-20 px-4 text-accent text-center capitalize font-extrabold">What you Get</p>
 
          <div className="mt-10 flex w-11/12 mb-8   border-2 border-accent rounded-md   justify-between">

                  {
                       items.slice(0, 3).map((item, index) => (
                        
                       <div key={index} className=" py-10 border-2 text-accent bg-secondary border-accent flex justify-between  items-center ps-5 ">
                     
                              <div className="  w-7/12">
                                  <p className="text-3xl mt-3  capitalize font-extrabold  ">Food made easy.</p>
                                    
                                  
                                    
                                  <span className="text-sm block font-inter font-light mt-2"> 
                                      
                                      makes our recipes special Here's what makes our hyhy recipes special 
                                      makes our recipes special Here's what makes our recipes special 
                                      makes our recipes special Here's what makes our recipes special 
                                  </span>
                              </div>

                                  <picture className=" w-4/12  "><source type="image/gif" 
                                      srcSet="https://sundaysfordogs.com/assets/v4/food-bag-bowl-4584effc02ead82c86bb3730283300c4e3ad05448af6a0f285349212091e0e42.svg"/>
                                    <img alt="Progress Steps" className="h-[10rem] w-[8rem] "/>
                                  </picture>
                                    
                      </div>

                  
                      
                      ))
                      
                  }
                
            </div>

          <p className="text-9xl mt-40 mb-20  px-4 text-accent font-satisfy text-center capitalize font-thin bg-white">Only The Best.</p>
 


         </div>
  )

}