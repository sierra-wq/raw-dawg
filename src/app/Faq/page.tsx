
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
         <div className=" flex-col font-arvo content-center justify-items-center ">

                <div className="bg-[url('https://images.pexels.com/photos/5789123/pexels-photo-5789123.jpeg')] h-[60vh] bg-cover bg-bottom w-full py-20 text-center flex-col content-center justify-items-center ">
                    <span className="text-8xl text-accent font-extrabold block font-satisfy"> Raw Dawg </span>
                    <p className="text-3xl mt-16 capitalize font-light w-7/12 ">All the help you ever need </p>
                   
                </div>

                <div className="w-full p-20 flex flex-wrap justify-center gap-[4rem]">
                    {
                      items.map((item,index) => (
                  <div key={index} className="bg-accent text-white border-secondary w-3/12 py-10 border-4 rounded-[0.8rem] flex-col justify-items-center  items-center ">
                     
                     <picture className=" "><source type="image/gif" 
                            srcSet="https://sundaysfordogs.com/assets/v4/high-five-958b63329006e01221e9aed785cae24dab29debe13dfa150375b47647534e020.svg"/>
                          <img alt="Progress Steps" className="h-[10rem] w-[8rem] "/>
                        </picture>

                        <p className="text-3xl mt-8 capitalize font-extrabold ">Food made easy.</p>

                         <a href="Faq/Catagory/" className="text-base w-3/6 text-center mt-10 py-5 capitalize font-light block border-surface border-t-2 ">Food made easy.</a>
                          
                    </div>

                      ))
                    }
                   
                </div>
            


                    



        </div>
  )
}