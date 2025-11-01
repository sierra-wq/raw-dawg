import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Activity, CheckCircle, CircleX, FacebookIcon, Instagram, InstagramIcon, LogIn, MoveLeft, MoveRight, TwitterIcon, User, X } from "lucide-react";
import { useState } from "react";

export default function Home() {

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

    <div className="bg-white flex-col">
       
        <div className="h-screen flex items-center justify-center relative">
             <video autoPlay={true} className=" bg-white absolute top-0 left-0 w-full h-full object-cover "   loop={true} muted={true} playsInline={true} poster="https://d3rekvgx2f3gtb.cloudfront.net/images/webp/redesign-v4/home-v4/legacy/poster2.webp">
              <source  src="https://d3rekvgx2f3gtb.cloudfront.net/videos/legacy-hero-no-bag-2.webm" type="video/webm"/>
              <source  src="https://d3rekvgx2f3gtb.cloudfront.net/videos/legacy-hero-no-bag.mp4" type="video/mp4"/>
            </video>
            <div className=" ms-10 -mt-20 font-satisfy relative w-7/12 flex flex-col items-center  ps-5">
                <p className="text-7xl mt-16 text-accent  text-center font-extrabold text-wrap italic ">Dog Food Made Easy</p>
                <Button variant={'outline'} className="mt-20 h-auto text-2xl text-accent rounded-[2rem] bg-secondary"> Customize Your Plan </Button>
            </div>

        </div>

        <div className="bg-white py-10 font-arvo flex-col justify-items-center justify-self-center">
            <p className="mb-10 text-5xl text-accent font-light"> How It Works</p>
            <picture><source type="image/gif" srcSet="https://www.thefarmersdog.com/images/progress-steps-desktop-9515cb.gif"/><img alt="Progress Steps" className="w-2/3 justify-self-center"/></picture>
            <div className="flex py-5 justify-between w-3/4  ">
                 <div className="w-1/4  text-center">
                     <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia</p>
                     <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia</p>
                  </div>

                  <div className="w-1/4 text-center">
                     <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia</p>
                     <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia</p>
                  </div>

                  <div className="w-1/4 text-center">
                     <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia</p>
                     <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia</p>
                  </div> 
            </div>
            <Button  className="mt-10 bg-secondary text-accent font-arvo h-auto"> Read More </Button>
        </div>

        <div className="py-10 flex-col bg-amber-900/90  font-arvo justify-items-center justify-self-center">
            <p className="mb-10 text-5xl text-accent font-bold"> Our Best Sellers</p>
            <div className="flex flex-wrap gap-[2rem] py-5 justify-around w-5/6  ">
                 
                 {
                  items.slice(0,4).map((item, index) => (
                     <div className="bg-secondary group rounded-lg hover:bg-yellow-500 hover:text-secondary text-white  w-1/5 text-clip text-center">
                      <img alt="Progress Steps" className="w-40 my-8 justify-self-center " src="https://magicspoon.com/cdn/shop/files/MS_G_VARIETY4_DCA_HERO.png?v=1738958405"/>
                     <p className="text-4xl font-extrabold mt-4 mb-3 text-primary"> $45+ <span className="ms-1 group-hover:text-secondary text-surface line-through"> $100</span></p>
                     <p className="text-3xl font-bold text-center"> Lorem ipsum dolor sit amet consectetur Quae, quia</p>
                     <span className="text-sm block mt-8"> 12552 reviews</span>
                     <Button size={'default'} className="my-5 group-hover:bg-secondary group-hover:text-accent bg-accent text-secondary"> Shop Now </Button>
                  </div>
                  ))
                 }
                
            </div>
            <Button  className="mt-20  rounded-2xl hover:bg-accent hover:text-secondary border-4 border-accent border-double bg-secondary text-accent h-auto text-3xl font-bold"> Shop All Products  </Button>
        </div>

        <div className="bg-white py-10 flex-col font-arvo justify-items-center justify-self-center">
            <p className="mb-10 text-5xl text-accent font-light"> Whats the Secret</p>
            <div className="flex py-5 justify-between items-center w-3/4 ">
                 <div className="w-1/4 text-right">

                     <p className="text-5xl text-accent font-bold"> Only the Best </p>
                     <p className=" mt-5 leading-[1.5rem] font-light font-roboto"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia</p>
                  </div>

                  
                  <div className="w-1/4 text-center">
                     <p className="text-5xl text-accent font-bold"> No one can say no</p>
                   <p className="mt-5 mb-10 leading-[1.5rem] font-light font-roboto"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia</p>
                  
                    <picture className="bg-fuchsia-400 w-1/4"><source type="image/gif" srcSet="https://www.thefarmersdog.com/images/progress-steps-desktop-9515cb.gif"/>
                    <img alt="Progress Steps" className="h-80"/>
                  </picture>

                   <p className="mt-10 text-5xl text-accent font-bold"> No one can say no</p>
                   <p className="mt-5 leading-[1.5rem] font-light font-roboto"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia</p>
                  
                  </div> 

                  <div className="w-1/4 text-left">

                     <p className="text-5xl text-accent font-bold"> Only the Best </p>
                     <p className=" mt-5 leading-[1.5rem] font-light font-roboto"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia</p>
                  </div>
            </div>
          
        </div>


        <div className="my-10 bg-secondary border-2 font-arvo text-accent border-accent  rounded-lg w-11/12 py-10 flex-col justify-items-center justify-self-center">
            <p className="mb-10 text-5xl text-accent font-light "> Why Its Special</p>
            <p className="mb-10 text-1xl font-light text-lg italic"> we dont use any preservatives  </p>
            
            <table className="w-10/12 table-fixed">
                <thead className="">
                    <tr >
                        <th></th>
                        <th><img alt="Progress Steps" className="w-28 my-4 justify-self-center " src="https://magicspoon.com/cdn/shop/files/MS_G_VARIETY4_DCA_HERO.png?v=1738958405"/></th>
                        <th><img alt="Progress Steps" className="w-28 my-4 justify-self-center " src="https://magicspoon.com/cdn/shop/files/MS_G_VARIETY4_DCA_HERO.png?v=1738958405"/></th>
                        <th className="bg-surface rounded-t-2xl ">
                          <img alt="Progress Steps" className=" w-28 my-4 justify-self-center  " src="https://magicspoon.com/cdn/shop/files/MS_G_VARIETY4_DCA_HERO.png?v=1738958405"/>
                          </th>
                        
                    </tr>
                </thead>
                <tbody className="text-center font-extralight italic">
                    <tr className=" border-y text-2xl leading-[2rem] py-20 border-accent border-collapse ">
                        <td className="text-center p-10 align-middle ">Human-grade Ingredients</td>
                        <td className="p-10 align-middle ">< CircleX className="size-14 stroke-error mx-auto" /></td>
                        <td className="p-10 align-middle ">< CheckCircle className="size-14  mx-auto" /></td>
                        <td className="p-10 align-middle bg-white ">< CheckCircle className="size-14  mx-auto stroke-success" /></td>
                        
                    </tr>

                    <tr className=" border-y text-2xl leading-[2rem] py-20 border-accent border-collapse ">
                        <td className="text-center  p-10 align-middle ">Human-grade Ingredients</td>
                        <td className="p-10 align-middle ">< CheckCircle className="size-14  mx-auto" /></td>
                        <td className="p-10 align-middle ">< CheckCircle className="size-14  mx-auto" /></td>
                        <td className="p-10 align-middle bg-white ">< CheckCircle className="size-14  mx-auto stroke-success" /></td>
                        
                    </tr>

                    <tr className=" border-y text-2xl leading-[2rem] py-20 border-accent border-collapse ">
                        <td className="text-center  p-10 align-middle ">Human-grade Ingredients</td>
                        <td className="p-10 align-middle ">< CircleX className="size-14 stroke-error mx-auto" /></td>
                        <td className="p-10 align-middle ">< CheckCircle className="size-14  mx-auto" /></td>
                        <td className="p-10 align-middle bg-white ">< CheckCircle className="size-14  mx-auto stroke-success" /></td>
                        
                    </tr>
                    <tr className=" border-y text-2xl leading-[2rem] py-20 border-accent border-collapse ">
                        <td className="text-center  p-10 align-middle ">Human-grade Ingredients</td>
                        <td className="p-10 align-middle ">< CheckCircle className="size-14 mx-auto" /></td>
                        <td className="p-10 align-middle "><CircleX className="size-14 stroke-error mx-auto" /></td>
                        <td className="p-10 align-middle bg-white ">< CheckCircle className="size-14  mx-auto stroke-success" /></td>
                        
                    </tr>
                    <tr className=" border-y text-2xl leading-[2rem] py-20 border-accent border-collapse ">
                        <td className="text-center  p-10 align-middle ">Human-grade Ingredients</td>
                        <td className="p-10 align-middle ">< CheckCircle className="size-14  mx-auto" /></td>
                        <td className="p-10 align-middle ">< CircleX className="size-14 stroke-error  mx-auto" /></td>
                        <td className="p-10 align-middle bg-white ">< CheckCircle className="size-14  mx-auto stroke-success" /></td>
                        
                    </tr>
                    <tr className=" border-y text-2xl leading-[2rem] py-20 border-accent border-collapse ">
                        <td className="text-center  p-10 align-middle ">Human-grade Ingredients</td>
                        <td className="p-10 align-middle ">< CheckCircle className="size-14  mx-auto" /></td>
                        <td className="p-10 align-middle ">< CheckCircle className="size-14  mx-auto" /></td>
                        <td className="p-10 align-middle bg-white ">< CheckCircle className="size-14  mx-auto stroke-success" /></td>
                        
                    </tr>
                    
                </tbody>
            </table>
          
        </div>


        <div className="bg-white w-full py-10 flex-col my-20 font-arvo justify-items-center justify-self-center">
            <p className="mb-10 text-5xl font-light text-accent"> How It Works </p>
            <p className="w-3/5 text-center mb-10 text-3xl font-light"> The same ingredients you'd put in your salad, now in your dog's bowl.</p>
            <div className="flex py-5 justify-between items-center w-11/12 ">
                <div className="w-2/5 border-2 bg-accent border-secondary rounded-xl p-5 text-3xl ">
                    <div className="my-10 flex text-secondary items-center justify-between ">
                      <p className="text-secondary"> Learn More </p>
                      <div >
                        <Button variant={'outline'} className="bg-accent text-secondary border-2 hover:border-surface hover:bg-secondary hover:text-accent  border-secondary rounded-full size-12 " > 
                          <MoveLeft style={{ width: '2rem' , height: '2rem' }} /> 
                        </Button> 
                        <Button variant={'outline'} className="bg-accent text-secondary border-2 hover:border-surface hover:bg-secondary hover:text-accent  border-secondary rounded-full size-12 ms-5" > 
                          <MoveRight style={{ width: '2rem' , height: '2rem' }}/> 
                        </Button>
                      </div>

                    </div>
                    <div>
                      <p className="text-base italic font-light text-secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Officiis error incidunt voluptatem asperiores deserunt nam ratione unde similique
                         maiores nulla eligendi mollitia, quo molestiae accusantium hic voluptatibus, voluptas cum?
                        Ipsum, consequatur iure! Eum consectetur facere vero, nulla magni recusandae eius, amet laudantium qui
                         itaque voluptatum rerum consequuntur? Explicabo, incidunt mollitia.
                      </p>
                    </div>
                    
                </div>
                <div className="w-3/5 relative  flex">
                
                <img alt="Progress Steps" className=" w-80  my-4 rotate-12 translate-y-1/3 justify-self-center  " src="https://magicspoon.imgix.net/t/667/assets/MS-Cereal-Right-02.png?v=53237899182246501941748358445&auto=format,compress&w=1500"/>
                <img alt="Progress Steps" className=" w-80 -translate-x-1/3 my-4 justify-self-center  " src="https://magicspoon.imgix.net/t/667/assets/MS-Cereal-Right-02.png?v=53237899182246501941748358445&auto=format,compress&w=1500"/>
                <img alt="Progress Steps" className=" w-80 -translate-x-2/3 -rotate-12  translate-y-1/3 my-4 justify-self-center  " src="https://magicspoon.imgix.net/t/667/assets/MS-Cereal-Right-02.png?v=53237899182246501941748358445&auto=format,compress&w=1500"/>
                                    
                </div>
                    
            </div>

          
        </div>

        <div className="bg-accent text-secondary  font-arvo flex-col justify-items-center justify-self-center">
            <div className="flex bg-red-200 justify-between ">
                 <div className="bg-secondary text-accent text-3xl font-light w-2/6  flex flex-col justify-around text-center  px-10">

                     <div className=" block"> <span className="text-8xl mb-10 font-bold block"> 20<span className="text-3xl m-0 p-0">%</span> </span> Minirals, Vitamins</div>
                    
                    <div className=" block"> <span className="text-8xl mb-10  font-bold block"> 40<span className="text-3xl m-0 p-0">%</span> </span> Fats , Protiens , Natural Fibers</div>
                    
                    <div className=" block"> <span className="text-8xl mb-10 font-bold block"> 40<span className="text-3xl m-0 p-0">%</span> </span> Grey Wolf Code</div>
                    
                    
                  </div>

                  
                  <div className="w-4/6  text-3xl font-serif text-center">

                    <picture className="bg-fuchsia-400 w-1/4"><source type="image/gif" srcSet="https://magicspoon.imgix.net/files/MS_VARIETY_STACK_10.21.webp?v=1760730509&auto=format,compress&w=2222"/>
                    <img alt="Progress Steps" className="h-full"/>
                  </picture>

                  </div> 

                  
            </div>
          
        </div>


        <div className="bg-white py-10 flex-col justify-items-center w-11/12 justify-self-center">
            <div className="flex flex-wrap py-5 justify-between items-center gap-4 w-10/12 font-arvo ">
                 {
                  items.slice(0,3).map((item) => (
                    
                   <div className="w-1/4 flex-col justify-items-center mt-40 p-3 relative  bg-accent  ">
                  <picture className="absolute left-1/2  -translate-x-1/2 -translate-y-3/4"><source type="image/gif" srcSet="https://magicspoon.imgix.net/files/KELLY-LEVEQUE_2x_3b58a2bf-4c78-4d18-be5d-2bbce7d784dc.webp?v=1760730701&width=304&auto=format,compress"/>
                    <img alt="Progress Steps" className="bg-slate-100 border-4 border-accent h-36 w-36 rounded-full"/>
                  </picture>
                     <blockquote className="text-2xl mt-12 w-11/12 ">" I just ate delicious cereal for dinner and the last time I did that was my sophomore year in college! "</blockquote>
                     <p className="  my-8 text-4xl font-bold text-surface "> Kelly Leveque </p>
                     <p className="  w-10/12 text-sm "> Holistic Nutritionist, Wellness Expert, and Celebrity Health Coach</p>

                   

                  </div> 



                  ))
                 }
                  
 
            </div>
          
        </div>

        <div className="bg-secondary py-10 w-full mt-10 flex items-center font-arvo justify-around ">
            <p className="mb-10 w-3/6 text-8xl font-bold text-accent " style={{lineHeight: '8rem'}}> Why did we puppy up, but our food didn't?</p>
            <a className="text-4xl p-4 w-1/5 text-center hover:bg-accent hover:text-secondary border-accent border-4 text-accent rounded-3xl"> Our Story </a>
        </div>

        <div className="bg-white py-10 my-10 flex-col justify-items-center text-3xl font-arvo font-light w-3/5 justify-self-center">
            <p className="mb-10 text-5xl text-accent"> FAQ </p>
             <Accordion
              type="single"
              collapsible
              className="w-11/12 p-5 bg-secondary text-3xl text-accent"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1 ">
                <AccordionTrigger className="text-3xl ">Product Information</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Our flagship product combines cutting-edge technology with sleek
                    design. Built with premium materials, it offers unparalleled
                    performance and reliability.
                  </p>
                  <p>
                    Key features include advanced processing capabilities, and an
                    intuitive user interface designed for both beginners and experts.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-3xl">Shipping Details</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    We offer worldwide shipping through trusted courier partners.
                    Standard delivery takes 3-5 business days, while express shipping
                    ensures delivery within 1-2 business days.
                  </p>
                  <p>
                    All orders are carefully packaged and fully insured. Track your
                    shipment in real-time through our dedicated tracking portal.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-3xl">Return Policy</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    We stand behind our products with a comprehensive 30-day return
                    policy. If you&apos;re not completely satisfied, simply return the
                    item in its original condition.
                  </p>
                  <p>
                    Our hassle-free return process includes free return shipping and
                    full refunds processed within 48 hours of receiving the returned
                    item.
                  </p>
                </AccordionContent>
              </AccordionItem>
              </Accordion>
          
        </div>


    

    </div>
    
  );
}
