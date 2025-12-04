import Wave1 from "@/assets/layered-waves-haikei (1).svg"
import Wave2 from "@/assets/layered-waves-haikei (2).svg"
import Wave3 from "@/assets/layered-waves-haikei (3).svg"
import Wave4 from "@/assets/layered-waves-haikei (4).svg"
import Wave from "@/assets/layered-waves-haikei.svg"
export default function Post() {
  
  return (
         <div className=" flex-col content-center font-acumin justify-items-center bg-primary">

                
               <figure className="w-full ">
          <Wave4 className="w-full   fill-quaternary h-60" />
          <figcaption className="sr-only">Decorative wave divider between sections</figcaption>
        </figure>
                
               

                


                <div className="w-full flex flex-col items-center justify-center ">
                    <div className="w-8/12  py-10 flex flex-wrap justify-around gap-[1rem]"
                        
                    >

                               <div className="blog-post-content text-quaternary ">
  
                                            <div className="max-w-4xl mx-auto px-4 py-10">
                                                <section className="heading mb-10">
                                                
                                                <h1 className="text-4xl text-center md:text-5xl font-acumin underline underline-offset-8 font-light leading-tight mb-2">
                                                    Shipping 
                                                </h1>

                                                </section>

                                              
                                                <div className=" max-w-none dark:prose-invert">

                                                    <section className="max-w-4xl mx-auto px-6 py-12">
  <h1 className="text-3xl font-bold mb-6 text-brand-primary">Shipping Policy</h1>

  <p className="mb-4">
    We only ship frozen because that’s how real food should arrive... raw, real, and ready to feed.
  </p>

  <p className="mb-4">
    All orders are produced in a CDFA-registered facility and shipped from our fulfillment center using insulated liners,
    dry ice, and/or gel packs built to keep your dog’s meals frozen for up to 48 hours in transit.
  </p>

  <p className="mb-4">
    We currently ship nationwide through FedEx, and you’ll get tracking info the moment your order leaves our hands.
  </p>

  <h2 className="text-2xl font-semibold mt-8 mb-4">Shipping Schedule</h2>
  <p className="mb-4">
    We ship on Mondays and Tuesdays to make sure your box doesn’t get stuck thawing over the weekend.
    Orders placed after Tuesday will go out the following Monday.
  </p>

  <h2 className="text-2xl font-semibold mt-8 mb-4">When Your Box Arrives</h2>
  <ul className="list-disc ml-6 mb-4">
    <li>Open your box right away.</li>
    <li>If the food is still cold or partially thawed but under 40°F, it’s good to refreeze.</li>
    <li>Move everything straight to your freezer.</li>
    <li>Never leave it sitting outside or thaw it on the counter.</li>
    <li>Wash your hands, bowls, and surfaces like you would after handling any raw meat.</li>
  </ul>

  <h2 className="text-2xl font-semibold mt-8 mb-4">Carriers & Responsibility</h2>
  <p className="mb-4">
    Once your order leaves our facility, title and risk transfer to you.
    Raw Dawg isn’t responsible for carrier delays, missed deliveries, or thawing in transit.
    If FedEx drops the ball, they’re the ones to contact for delivery claims.
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