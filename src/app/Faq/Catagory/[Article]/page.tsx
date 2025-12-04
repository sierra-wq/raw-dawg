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
         <div className=" flex-col font-acumin bg-quaternary/50 pt-40 content-center justify-items-center ">

              

                
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

                <span className="text-7xl text-primary font-acumin flex w-7/12 items-center justify-start capitalize w-f font-light mt-10">
                    Topic
                    </span>

        

                <div className=" w-3/5 px-2 py-3 mt-10 border-t-8 border-primary/30 border-double">
                    <article className="text-lg font-barlow-condensed text-quaternary leading-[2rem] font-semibold mt-8  ">

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
                    <div className="flex-col items-center justify-center my-24 gap-[2rem] border-t-8 border-primary/30 border-double pt-10">
                            <p className="text-4xl text-primary text-center capitalize font-extrabold mb-5">
                                    What Do you think ?
                            </p>
                            
                            <div className="flex items-center justify-center gap-[2rem] ">
                                <Button variant='outline' className="hover:bg-primary rounded-full border-quaternary p-2 size-24"> <ThumbsUp className="text-quaternary" style={{width: "2.5rem", height: "2.5rem" }} /> </Button>
                                <Button variant='outline' className=" hover:bg-primary rounded-full border-quaternary p-2 size-24"> <ThumbsDown  className="text-quaternary" style={{width: "2.5rem", height: "2.5rem" }}  /> </Button>
                   
                            </div>
                            
                    </div>
                </div>
            


                    



        </div>
  )
}