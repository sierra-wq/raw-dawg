import { Button } from "@/components/ui/button";
import { Calendar, Globe, Paperclip, Space, Star, Verified } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

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

export default function Faq() {
  
  return (
         <div className="flex-col font-arvo content-center justify-items-center ">

                <div className="py-20 text-center flex-col justify-items-center w-full font-satisfy ">
                    <p className="text-7xl mt-10 text-accent capitalize font-extrabold ">Raw Dawg</p>
                </div>

                
                <div className="bg-amber-50 w-7/12">
                  <Breadcrumb>
                      <BreadcrumbList>
                        <BreadcrumbItem>
                          <BreadcrumbLink asChild>
                            <a href="/">Home</a>
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbLink asChild>
                            <a href="/docs/components">Components</a>
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                        </BreadcrumbItem>
                      </BreadcrumbList>
                    </Breadcrumb>
                </div>

                <span className="text-5xl flex w-7/12 items-center justify-start capitalize w-f font-extrabold mt-10">
                    Topic
                    </span>

                <span className="text-xl flex w-7/12 ms-4 items-center justify-start capitalize w-f font-light mt-5">
                    <Paperclip className="me-2" />
                    4 Articles.
                    </span>


               <div className="w-full p-20 flex flex-wrap justify-center gap-[4rem]">
                    {
                      items.map((item,index) => (
                  <div key={index} className="bg-accent text-white border-secondary p-3 w-6/12 border-4 rounded-[0.8rem] flex    items-center ">
                     
                     <picture className=" "><source type="image/gif" 
                            srcSet="https://sundaysfordogs.com/assets/v4/high-five-958b63329006e01221e9aed785cae24dab29debe13dfa150375b47647534e020.svg"/>
                          <img alt="Progress Steps" className="h-[10rem] w-[8rem] "/>
                        </picture>

                        <div className="flex flex-col justify-center items-center  flex-grow  ">
                          <a href="/Faq/Catagory/cat-658" className="text-5xl mt-8  capitalize font-extrabold ">Food made easy.</a>

                         <p className="text-base text-end flex justify-end items-center text-secondary w-4/6 mt-2 py-5 capitalize font-light border-surface border-t-2 "> <Calendar className="size-4 me-2"/> April 15, 2025 at 5:42 PM </p>
                          
                        </div>
                    </div>

                      ))
                    }
                   
                </div>
            


                    



        </div>
  )
}