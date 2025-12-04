
import Wave1 from "@/assets/layered-waves-haikei (1).svg"
import Wave2 from "@/assets/layered-waves-haikei (2).svg"
import Wave3 from "@/assets/layered-waves-haikei (3).svg"
import Wave4 from "@/assets/layered-waves-haikei (4).svg"
import Wave from "@/assets/layered-waves-haikei.svg"
export default function Post() {
  
  return (
         <div className=" flex-col content-center font-acumin justify-items-center bg-primary ">

                
                  <figure className="w-full ">
          <Wave4 className="w-full   fill-quaternary h-60" />
          <figcaption className="sr-only">Decorative wave divider between sections</figcaption>
        </figure>
                
               

                


                <div className="w-full flex flex-col items-center justify-center ">
                    <div className="w-8/12  py-10 flex flex-wrap justify-around gap-[1rem]"
                        
                    >

                               <div className="blog-post-content  text-quaternary  pb-40">
  
                                            <div className="max-w-4xl mx-auto px-4 py-10">
                                                <section className="heading mb-10">
                                                
                                                <h1 className="text-4xl text-center md:text-5xl font-acumin underline underline-offset-8 font-light leading-tight mb-2">
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