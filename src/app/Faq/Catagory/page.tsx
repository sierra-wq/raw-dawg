import { Calendar, Paperclip } from "lucide-react";
import {
  Breadcrumb,
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
         <div className="flex-col font-arvo py-40 bg-tertiary/70 content-center justify-items-center ">

                

                
                <div className="text-primary w-7/12">
                  <Breadcrumb className="text-primary">
                      <BreadcrumbList>
                        <BreadcrumbItem>
                          <BreadcrumbLink asChild>
                            <a className="text-primary/60 font-bold text-lg"  href="/">Home</a>
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-primary/60 font-bold text-lg" />
                        <BreadcrumbItem>
                          <BreadcrumbLink asChild>
                            <a className="text-primary/60 font-bold text-lg" href="/docs/components">Components</a>
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="text-primary font-bold text-lg"/>
                        <BreadcrumbItem>
                          <BreadcrumbPage className="text-primary font-bold text-lg underline">Breadcrumb</BreadcrumbPage>
                        </BreadcrumbItem>
                      </BreadcrumbList>
                    </Breadcrumb>
                </div>

                <span className="text-5xl text-primary flex w-7/12 items-center justify-start capitalize w-f font-extrabold mt-10">
                    Topic
                    </span>

                <span className="text-xl flex text-primary w-7/12 ms-4 items-center justify-start capitalize w-f font-light mt-5">
                    <Paperclip className="me-2" />
                    4 Articles.
                    </span>


               <div className="w-full p-20 flex flex-wrap justify-center gap-[4rem]">
                    {
                      items.map((item,index) => (
                  <div key={index} className="bg-primary text-quaternary border-quaternary p-3 w-6/12 border-4 rounded-[0.8rem] flex    items-center ">
                     
                     <picture className=" "><source type="image/gif" 
                            srcSet="https://sundaysfordogs.com/assets/v4/high-five-958b63329006e01221e9aed785cae24dab29debe13dfa150375b47647534e020.svg"/>
                          <img alt="Progress Steps" className="h-[10rem] w-[8rem] "/>
                        </picture>

                        <div className="flex flex-col justify-center items-center  flex-grow  ">
                          <a href="/Faq/Catagory/cat-658" className="text-5xl mt-8  capitalize font-extrabold ">Food made easy.</a>

                         <p className="text-base text-end flex justify-end items-center text-quaternary w-4/6 mt-2 py-5 capitalize font-light border-quaternary/70 border-t-2 "> <Calendar className="size-4 me-2"/> April 15, 2025 at 5:42 PM </p>
                          
                        </div>
                    </div>

                      ))
                    }
                   
                </div>
            


                    



        </div>
  )
}