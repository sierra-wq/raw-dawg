import Wave1 from "@/assets/layered-waves-haikei (1).svg"
import Wave2 from "@/assets/layered-waves-haikei (2).svg"
import Wave3 from "@/assets/layered-waves-haikei (3).svg"
import Wave4 from "@/assets/layered-waves-haikei (4).svg"
import Wave from "@/assets/layered-waves-haikei.svg"
export default function Post() {
  
  return (
         <div className=" flex-col content-center font-arvo justify-items-center bg-primary">

                
           <figure className="w-full ">
          <Wave4 className="w-full   fill-quaternary h-60" />
          <figcaption className="sr-only">Decorative wave divider between sections</figcaption>
        </figure>
                
               

                


                <div className="w-full flex flex-col items-center justify-center ">
                    <div className="w-8/12 py-10 flex flex-wrap justify-around gap-[1rem]"
                        
                    >

                               <div className="blog-post-content text-quaternary ">
  
                                            <div className="max-w-4xl mx-auto px-4 py-10">
                                                <section className="heading mb-10">
                                                
                                                <h1 className="text-4xl text-center md:text-5xl font-arvo underline underline-offset-8 font-light leading-tight mb-2">
                                                    Refund  
                                                </h1>

                                                </section>

                                              
                                                <div className=" max-w-none dark:prose-invert">

                                                    <section className="max-w-4xl mx-auto px-6 py-12">
  <h1 className="text-3xl font-bold mb-6 text-brand-primary">Refund Policy</h1>
  <p className="mb-4">
    If we mess up -- wrong product, busted seal, damaged shipment -- we’ll make it right. Just do the following:
  </p>
  <ul className="list-disc ml-6 mb-4">
    <li>Email <a href="mailto:hello@rawdawgnutrition.com" className="text-brand-accent font-bold underline">hello@rawdawgnutrition.com</a> within 24 hours of delivery.</li>
    <li>Include clear photos of the box and product.</li>
    <li>Add your order number and delivery date.</li>
  </ul>
  <p className="mb-4">
    If it’s on us, we’ll fix it. Replacement or store credit, your choice.
  </p>
  <h2 className="text-2xl font-semibold mt-8 mb-4">Refunds & Returns</h2>
  <p className="mb-4">
    Because we sell perishable, raw food, returns and refunds aren’t an option once your order ships.
    We’ll only replace or credit verified Raw Dawg™ errors.
  </p>
  <p className="mb-4">
    Heads up: Raw feeding means handling raw meat. We follow Good Manufacturing Practices (21 CFR Part 507)
    and CDFA Feed & Livestock regulations, and we batch-test for safety, but no raw product is ever 100% bacteria-free.
    By ordering, you agree to store, handle, and serve Raw Dawg safely.
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