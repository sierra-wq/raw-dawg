import Wave1 from "@/assets/layered-waves-haikei (1).svg"
import Wave2 from "@/assets/layered-waves-haikei (2).svg"
import Wave3 from "@/assets/layered-waves-haikei (3).svg"
import Wave4 from "@/assets/layered-waves-haikei (4).svg"
import Wave from "@/assets/layered-waves-haikei.svg"

import Logo from "@/assets/RawDawg.svg";
export default function Faq() {
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
  return (
         <div className=" flex-col bg-primary font-acumin content-center justify-items-center ">

                 

                <div className="bg-tertiary h-[60vh] bg-cover bg-bottom w-full py-20 text-center flex-col content-center justify-items-center ">
                    <p className="text-8xl font-bold text-primary mt-16 capitalize font-satisfy w-7/12 ">All the help you ever need </p>
                   
                </div>

                   <figure className="w-full ">
          <Wave2 className="w-full fill-tertiary" />
          <figcaption className="sr-only">Decorative wave divider between sections</figcaption>
        </figure>

                <div className="w-full p-20 flex flex-wrap justify-center gap-[4rem]">
                    {
                      items.map((item,index) => (
                  <div key={index} className="bg-quaternary/30 text-tertiary border-tertiary w-3/12 py-10 border-4 rounded-[0.8rem] flex-col justify-items-center  items-center ">
                     
                     <picture className=" "><source type="image/gif" 
                            srcSet="https://sundaysfordogs.com/assets/v4/high-five-958b63329006e01221e9aed785cae24dab29debe13dfa150375b47647534e020.svg"/>
                          <img alt="Progress Steps" className="h-[10rem] w-[8rem] "/>
                        </picture>

                        <p className="text-3xl mt-8 capitalize font-extrabold ">Food made easy.</p>

                         <a href="Faq/Catagory/" className="text-base w-3/6 text-center mt-10 py-5 capitalize font-light block border-tertiary border-t-2 ">Food made easy.</a>
                          
                    </div>

                      ))
                    }
                   
                </div>
            


                    



        </div>
  )
}