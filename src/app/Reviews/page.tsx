import { Button } from "@/components/ui/button";
import { Star, Verified } from "lucide-react";

export default function Reviews() {
  
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
         <div className=" flex-col font-arvo content-center justify-items-center ">

                <div className="bg-[url('https://images.pexels.com/photos/29298410/pexels-photo-29298410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]  bg-cover pt-20 text-center flex-col h-[80vh] justify-items-center ">
                        <span className="text-3xl  flex gap-[1rem] font-extrabold "> 
                                 <Star className="fill-accent stroke-accent"/> 
                                  <Star className="fill-accent stroke-accent"/> 
                                   <Star className="fill-accent stroke-accent"/> 
                                    <Star className="fill-accent stroke-accent"/> 
                                     <Star className="fill-accent stroke-accent"/> 
                         </span>
                    <p className="text-7xl mt-10 capitalize font-extrabold text-accent w-7/12 ">Human-grade, all-natural dog food made easy.</p>
                    <span className="text-3xl  font-extrabold capitalize mt-20 block font-satisfy"> The reviews never lie </span>
                </div>

                <div className=" flex-col my-24 w-8/12">
                         <div className=" flex justify-between">
                            <p className="w-4/12 text-4xl capitalize leading-[3rem] flex items-center text-center font-extrabold "> 
                                You don't only speak for yourself
                            </p>

                            <div className="flex-col w-6/12 justify-between items-center content-center font-light">
                                    <div className="flex justify-between " >
                                        <p className="text-2xl  text-center font-extrabold "> 
                                                Filter 
                                        </p>
                                        <select className="p-1 w-3/6 border rounded-[0.6rem] border-accent bg-accent " data-action="change->review#updateReviews" data-review-target="select" id="review-options" name="reviews">
                                                <option value="0">All Reviews</option>
                                                <option value="5">5 Stars</option>
                                                <option value="4">4 Stars</option>
                                                <option value="3">3 Stars</option>
                                                <option value="2">2 Stars</option>
                                                <option value="1">1 Star</option>
                                        </select>
                                    </div>
                                    <div className="flex justify-between mt-8  border-b-4 border-accent pb-3" >
                                        <p className="text-2xl  text-center  "> 
                                                3.8/5 
                                        </p>
                                        <p className="text-2xl  text-center  "> 
                                                2564 <span className="text-sm ">reviews</span> 
                                        </p>
                                    </div>

                                    <div className=" flex flex-col">

                                        {
                                                items.map((item,index) => (
                                                    <div key={index} className="flex justify-between items-end mt-3  " >
                                                    <p className="  w-1/5 flex "> 
                                                            {items.slice(0,(5-index)).map((item,index) => (
                                                                    < Star key={index} className="fill-accent stroke-accent size-5" />
                                                            ))} 
                                                    </p>
                                                    <div className="bg-white w-3/5 rounded-2xl h-[1.3rem] overflow-clip">
                                                        <p style={{width:`${(index+1)*20}%` }} className={`bg-accent text-transparent `}>hidden</p>
                                                    </div>
                                                    <p className="  text-center  "> 
                                                            {(index+1)*20} 
                                                    </p>
                                            </div>    
                                                ))
                                        }
                                            

                                         
                                            
                                    </div>


                            </div> 

                         </div> 
                         <div className=" mt-24  flex-col justify-between">
                            
                                {
                                     items.map((item,index) => (
                                             <div key={index} className=" w-11/12 my-10 py-2" >
                                                        <p className="  w-1/5 flex my-4"> 
                                                                                {items.slice(0,(5-index)).map((item,index) => (
                                                                                        < Star key={index} className="fill-accent stroke-accent size-5" />
                                                                                ))} 
                                                        </p>
                                                        <p className="leading-[2rem] text-lg flex items-center font-bold "> 
                                                        Mike Hanna <span className="ms-5"> <Verified className="stroke-accent" /></span> 
                                                        </p>
                                                        <p className=" text-base text-accent capitalize leading-[2rem] font-extralight "> 
                                                        am really suprised 
                                                        </p>
                                                        <p className=" text-sm font-roboto font-light leading-[1.5rem] "> 
                                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis deleniti laborum tempora 
                                                                laboriosam inventore labore! Voluptatem, officiis? Laborum laudantium adipisci modi, 
                                                                amet itaque deleniti doloribus facere odit. Ullam recusandae fugiat placeat deleniti ea 
                                                                harum voluptates officia inventore, ratione accusantium iure incidunt, 
                                                                impedit dolor expedita soluta magni dicta aspernatur possimus saepe!
                                                        </p>
                                                </div>
                                     ))   
                                }
                             
                        </div>
                           
                </div>  

                <div className="bg-[url('https://images.pexels.com/photos/5264053/pexels-photo-5264053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center  w-full pt-20 text-center flex-col h-[40vh] justify-items-center ">
                    <span className="text-4xl text-accent font-extrabold block"> Because They can't Say It Like You </span>
                    <Button className="mt-10 bg-accent text-2xl h-auto font-bold"> Hellow </Button>
                </div>
            


                    



        </div>
  )
}