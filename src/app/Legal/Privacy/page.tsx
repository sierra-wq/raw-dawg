import { Button } from "@/components/ui/button";
import { ArrowBigLeft, Globe, Home, Paperclip, SkipBack, Space, Star, Verified } from "lucide-react";

export default function Post() {
  
  return (
         <div className=" flex-col content-center font-arvo justify-items-center ">

                
          <div className="py-20 text-center bg-secondary flex-col justify-items-center w-full font-satisfy ">
                    <p className="text-7xl text-accent capitalize font-extrabold ">Raw Dawg</p>
                </div>
                
               

                


                <div className="w-full flex flex-col items-center justify-center ">
                    <div className="w-8/12 bg-white py-10 flex flex-wrap justify-around gap-[1rem]"
                        
                    >

                               <div className="blog-post-content bg-white text-neutral-800 dark:bg-black dark:text-neutral-100">
  
                                            <div className="max-w-4xl mx-auto px-4 py-10">
                                                <section className="heading mb-10">
                                                
                                                <h1 className="text-4xl text-center md:text-5xl font-arvo underline underline-offset-8 font-light leading-tight mb-2">
                                                    Privacy Policy
                                                </h1>

                                                </section>

                                              
                                                <div className=" max-w-none dark:prose-invert">

<section className="max-w-4xl mx-auto px-6 py-12">
  <h1 className="text-3xl font-bold mb-6 text-brand-primary">Privacy Policy</h1>

  <p className="mb-4">
    We respect your privacy as much as your dog respects a fresh bone.
    Our Privacy Policy explains how we collect, use, and protect your information when you visit our site,
    place orders, or contact our team.
  </p>

  <p>
    By using our website, you consent to the practices described there.
  </p>
</section>



                                                </div>
                                            </div>
                                    </div>
  
                        
                    </div>

               

                   
                </div>
            


                    



        </div>
  )
}