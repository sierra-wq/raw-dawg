import { Button } from "@/components/ui/button";

export default function Post() {
  
  return (
         <div className=" flex-col content-center font-acumin justify-items-center ">

                
          <div className="py-20 text-center bg-secondary flex-col justify-items-center w-full font-satisfy ">
                    <p className="text-7xl text-accent capitalize font-extrabold ">Raw Dawg</p>
                </div>
                
               

                


                <div className="w-full flex flex-col items-center justify-center ">
                    <div className="w-8/12 bg-white py-10 flex flex-wrap justify-around gap-[1rem]"
                        
                    >

                                <article className="mx-auto max-w-3xl px-4 py-12">
                                    <div className="blog-post-content bg-white text-neutral-800 dark:bg-black dark:text-neutral-100">
  
  <div className="max-w-4xl mx-auto px-4 py-10">
    <section className="heading mb-10">
      
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <div className="category-header text-sm uppercase text-brand-accent font-semibold tracking-wide">
          <a href="/Blg" className="hover:underline">Back to Blog</a>
        </div>
        <div className="back text-sm text-brand-accent font-semibold">
          <a href="/" className="hover:underline"> Home </a>
        </div>
      </div>

        <h1 className="text-4xl md:text-5xl font-playfair font-light leading-tight text-brand-accent mb-2">
        Can Dogs Have Cinnamon? Is Cinnamon Bad for Dogs?
      </h1>

         <h2 className="text-lg font-medium text-neutral-600 dark:text-neutral-300">
        <span className="font-bold text-neutral-800 dark:text-white">by</span> Hannah Roundy
      </h2>
    </section>

    
    <section className="main-image rounded-xl overflow-hidden shadow-md mb-10">
      <img
        className="w-full object-cover h-[400px] sm:h-[500px]"
        src="https://sundaysfordogs.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6IjEwM2YxY2MwLTczY2MtNGRjOC04YTc1LWIyOGEwOWM2YzgxMyIsInB1ciI6ImJsb2JfaWQifX0=--dc233ce559b1aa695645ae9b593abddd0f911af9/pexels-ngo-tr-ng-an-837314-1717767.jpg"
        alt="Can dogs eat cinnamon - cinnamon sticks in a teacup"
      />
    </section>

      <div className="blog-content prose prose-lg prose-neutral max-w-none dark:prose-invert">
      <h2>Everyone’s favorite fall spice may not be toxic to dogs, but it can cause issues if fed incorrectly.</h2>

      <p>
        Humans love cinnamon! It’s in our desserts, drinks, pastries, and anything that needs an extra sprinkle of fall magic.
        Cinnamon smells amazing, tastes delicious, and may even have a few potential benefits for our dogs.
      </p>

      <h2>Can Dogs Eat Cinnamon?</h2>
      <p>
        Before you feed any <a href="../blog/what-foods-can-dogs-eat">human food</a> to your dog, do your due diligence and find
        out if it’s safe for them to eat. So, can dogs eat cinnamon? Yes, a little sprinkle of cinnamon is perfectly safe for
        dogs to enjoy.
      </p>

      <ul>
        <li>Hip and joint support from natural anti-inflammatory properties</li>
        <li>Rich source of antioxidants to fight off illness or infection</li>
        <li>Promotes a healthy heart</li>
        <li>Gently supports easy digestion</li>
      </ul>

      <h2>Is Cinnamon Bad for Dogs?</h2>
      <p>
        Many dog food and treat brands use little to no seasonings in their recipes. Garlic, nutmeg,
        <a href="../blog/xylitol-and-dogs">sugar-free sweeteners</a>, and other popular seasonings are notably toxic to dogs.
        But, is <a href="https://www.akc.org/expert-advice/nutrition/can-dogs-eat-cinnamon/">cinnamon</a> toxic to dogs?
      </p>

      <p>
        While this spice isn’t toxic to our dogs, it can pose a threat when served incorrectly. In large servings, cinnamon sticks
        and ground powder can be choking hazards. Some pups can experience breathing difficulty, coughing, or choking. For smaller
        breeds, even a teaspoon of cinnamon can cause serious health problems.
      </p>

      <h2>The Dangers of Cinnamon for Dogs</h2>
      <p>
        Dogs that consume unsafe parts of this spice should be taken to the vet or animal hospital immediately. If you notice any
        of these symptoms after your pup eats cinnamon, call your vet as soon as possible:
      </p>

      <ul>
        <li>Choking</li>
        <li>Coughing</li>
        <li>Mouth blisters</li>
        <li>Severe skin irritation</li>
        <li>Vomiting</li>
        <li>Diarrhea</li>
      </ul>

      <p>
        If you’re unsure how to help your dog, call
        <a href="https://www.aspca.org/pet-care/aspca-poison-control">ASPCA Poison Control</a> at (888) 426-4435. They are
        available to call 24/7, 365 days a year.
      </p>

      <h2>Looking to Spice Up Your Dog’s Food?</h2>
      <p>
        Instead of adding toppers or seasonings, spice up your dog’s meals with
        <a href="http://sundaysfordogs.com/food">Sundays for Dogs</a>. Our air-dried fresh dog food is 100% human-grade, so every
        ingredient is clean, fresh, and safe.
      </p>
    </div>
  </div>
</div>

                                </article>
  
                        
                    </div>

                    <Button variant='outline' className="my-20 text-3xl text-accent border-accent hover:bg-secondary h-auto rounded-lg font-semibold decoration-slice">
                        Get Started
                    </Button>

                   
                </div>
            


                    



        </div>
  )
}