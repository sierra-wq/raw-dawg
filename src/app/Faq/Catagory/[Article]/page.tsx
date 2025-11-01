import { Button } from "@/components/ui/button";
import { Edit, Paperclip, StepBack, ThumbsDown, ThumbsUp } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"



export default function Article() {
  
  return (
         <div className=" flex-col font-arvo content-center justify-items-center ">

                <div className="py-20 text-center flex-col justify-items-center w-full font-satisfy ">
                    <p className="text-7xl mt-10 text-accent capitalize font-extrabold ">Raw Dawg</p>
                </div>

                
                 <div className=" w-7/12 p-0">
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

                <span className="text-7xl text-accent font-inter flex w-7/12 items-center justify-start capitalize w-f font-light mt-10">
                    Topic
                    </span>

        

                <div className=" w-3/5 px-2 py-3 mt-10 border-t-4 border-accent/30">
                    <article className="text-base font-barlow-condensed font-light mt-8  ">

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Q
                            uae sed incidunt ipsum adipisci? Molestiae explicabo minus s
                            unt rerum officia est unde totam, maxime magni consequuntur error, atque impedit voluptas animi laboriosam aliquam 
                            fuga illum doloribus assumenda. 
                            Officiis molestiae fugit provident animi consectetur. Saepe commodi dolores ex delectus sit explicabo sunt!  
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Q
                            uae sed incidunt ipsum adipisci? Molestiae explicabo minus s
                            unt rerum officia est unde totam, maxime magni consequuntur error, atque impedit voluptas animi laboriosam aliquam 
                            fuga illum doloribus assumenda. 
                            Officiis molestiae fugit provident animi consectetur. Saepe commodi dolores ex delectus sit explicabo sunt!  
                            <br/><br/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Q
                            uae sed incidunt ipsum adipisci? Molestiae explicabo minus s
                            unt rerum officia est unde totam, maxime magni consequuntur error, atque impedit voluptas animi laboriosam aliquam 
                            fuga illum doloribus assumenda. 
                            Officiis molestiae fugit provident animi consectetur. Saepe commodi dolores ex delectus sit explicabo sunt!  
                            <br/><br/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Q
                            uae sed incidunt ipsum adipisci? Molestiae explicabo minus s
                            unt rerum officia est unde totam, maxime magni consequuntur error, atque impedit voluptas animi laboriosam aliquam 
                            fuga illum doloribus assumenda. 
                            Officiis molestiae fugit provident animi consectetur. Saepe commodi dolores ex delectus sit explicabo sunt!    
                    </article>
                    <div className="flex-col items-center justify-center my-10 gap-[2rem] border-t-2 border-accent/30 pt-10">
                            <p className="text-2xl text-accent text-center capitalize font-extrabold mb-5">
                                    What Do you think ?
                            </p>
                            
                            <div className="flex items-center justify-center gap-[2rem] ">
                                <Button variant='outline' className=" rounded-full border-success p-2 size-24"> <ThumbsUp className="text-success" style={{width: "2.5rem", height: "2.5rem" }} /> </Button>
                                <Button variant='outline' className=" rounded-full border-error p-2 size-24"> <ThumbsDown  className="text-error" style={{width: "2.5rem", height: "2.5rem" }}  /> </Button>
                   
                            </div>
                            
                    </div>
                </div>
            


                    



        </div>
  )
}