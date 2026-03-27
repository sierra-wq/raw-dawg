
import Wave1 from "@/assets/layered-waves-haikei (1).svg"
import Wave2 from "@/assets/layered-waves-haikei (2).svg"
import Wave3 from "@/assets/layered-waves-haikei (3).svg"
import Wave4 from "@/assets/layered-waves-haikei (4).svg"
import Wave from "@/assets/layered-waves-haikei.svg"
export default function Post() {
  
  return (
         <div className=" flex-col content-center  text-xl font-acumin justify-items-center bg-primary ">

                
                
                


                <div className="w-full mt-32 flex flex-col items-center justify-center ">
                    <div className=" sm:w-8/12  py-10 flex flex-wrap justify-around gap-[1rem]"
                        
                    >

                               <div className="blog-post-content  text-quaternary ">
  
                                            <div className="max-w-4xl mx-auto px-4 py-10">
                                                <section className="heading mb-10">
                                                
                                                <h1 className="text-4xl sm:text-6xl text-center font-germania underline underline-offset-8 font-light leading-tight mb-2">
                                                    Privacy Policy
                                                </h1>

                                                </section>

                                              
                                                <div className=" max-w-none dark:prose-invert">

<section className="text-sm sm:text-xl  font-arvo mx-auto px-6 sm:py-6">
 
  <p className="mb-4 ">
    We respect your privacy as much as your dog respects a fresh bone.
    Our Privacy Policy explains how we collect, use, and protect your information when you visit our site,
    place orders, or contact our team.
  </p>

  <p>
    By using our website, you consent to the practices described{" "}
    <a href="/Legal/FullPrivacy" className="text-brand-accent font-bold underline">
      here
    </a>
    .
  </p>
</section>



                                                </div>
                                            </div>
                                    </div>
  
                        
                    </div>

                                   
        <section className="flex flex-col w-full  items-center  p-4 gap-x-32  justify-self-center py-24 ">
                   
                   <p className="text-center text-6xl w-10/12 sm:w-8/12 sm:text-7xl text-tertiary font-germania"> Get intimate with  <span className="text-6xl mt-4 block sm:text-7xl"> @my.rawdawg </span></p>
                   
                   <div className="mt-16 gap-5  self-center w-full  overflow-x-scroll no-scrollbar flex">
                       <div className=" grow flex flex-col items-center ">
                            <div className="border-2 rounded-2xl border-secondary w-[20em] h-[26em] sm:w-[30em] sm:h-[36em] bg-cover bg-[url(..\/assets\/social_img1.jpg)]" />
                            </div>

                  <div className=" grow flex flex-col items-center">
                            <div className="border-2 rounded-2xl border-secondary w-[20em] h-[26em] sm:w-[30em] sm:h-[36em] bg-cover bg-center bg-[url(..\/assets\/social_img2.jpg)]" />
                            </div>
                   <div className=" grow flex flex-col items-center ">
                            <div className="border-2 rounded-2xl border-secondary w-[20em] h-[26em] sm:w-[30em] sm:h-[36em] bg-cover bg-[url(..\/assets\/social_img3.jpg)]" />
                            </div>
                   </div>
                  
        </section>

                   
                </div>
            


        </div>
  )
}
