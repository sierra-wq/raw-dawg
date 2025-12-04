'use client'

import { Button } from "@/components/ui/button";
import {  useRouter } from "next/navigation";

import Wave1 from "@/assets/layered-waves-haikei (1).svg"
import Wave2 from "@/assets/layered-waves-haikei (2).svg"
import Wave3 from "@/assets/layered-waves-haikei (3).svg"
import Wave4 from "@/assets/layered-waves-haikei (4).svg"
import Wave from "@/assets/layered-waves-haikei.svg"
import { useEffect, useState } from "react";
import { client } from "@/lib/shopifyClient";

export type Product = {
    id: string;
    handle: string;
    title: string;
    description: string;
    featuredImage: string;
    maxPrice : number;
    minPrice : number;
    sellingPlan ?: {
      id: string;
      name: string;
      description: string;
      priceAdjustment: number;
    } 
  };

export default function Products() {

    const router = useRouter();
    const [products , setProducts] = useState<Product[]>([]);
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

  const productQuery = `
    query getProducts($first: Int) {
     products(first: $first) {
        edges {
          node {
            id
            handle
            priceRange{
                maxVariantPrice{
                    amount
                }
                minVariantPrice{
                    amount
                }
            }
            variants(first: $first) {
      edges {
        node {
          id
          title
        }
      }
    }
            title
            description
            featuredImage {
              url
            }
          }
        }
      }
    }
  `
  useEffect( () => {
    
    async function fetchProduct() {
    const { data, errors, extensions } = await client.request(productQuery, {
      variables: { first: 10 },
    });
    console.log(data);
    data.products.edges.map((elm : any,index : number)=>{
      const product : Product = {
        ...elm.node,
        featuredImage : elm.node.featuredImage.url,
        maxPrice : elm.node.priceRange.maxVariantPrice.amount,
        minPrice : elm.node.priceRange.minVariantPrice.amount
      }
      
      setProducts((prev) => [...prev, product])
    })
    //setProducts(data.products.edges[0].node.variants.edges[0].node)
    }
    fetchProduct();


  },[])


  return (
         <div className=" flex-col bg-primary content-center justify-items-center font-acumin ">

                <div className="bg-quaternary w-full py-36 text-center flex-col justify-items-center  h-[30rem]">
                    <p className="text-7xl mt-10 text-primary capitalize  font-satisfy font-extrabold w-7/12 ">Human-grade, all-natural dog food made easy.</p>
                </div>

                 <figure className="w-full ">
          <Wave3 className="w-full -mt-40 bg-transparent fill-primary" />
          <figcaption className="sr-only">Decorative wave divider between sections</figcaption>
        </figure>
                
                <div className="text-3xl w-full p-2 mt-10 text-center justify-between ">
                    <p className="h-auto  text-quaternary/60 text-3xl font-bold  "> Pick What You Like </p>
                </div>



                <div className=" w-full flex pb-20 flex-col items-center justify-center ">
                    <div className="w-10/12  mb-10 py-10 flex flex-wrap justify-around gap-[3rem]">

                        {
                  products.map((item, index) => (
                     <div className="bg-quaternary/70 group rounded-lg hover:bg-quaternary hover:text-primary text-primary/60  w-1/5 text-clip text-center">
                      <img alt="Progress Steps" className="w-40 my-8 justify-self-center " src={item.featuredImage}/>
                     <span className="text-lg block mt-8"> 12552 reviews</span>
                     <p className="text-3xl font-bold text-center group-hover:text-primary/70 "> {item.title}</p>
                     <p className="text-4xl font-extrabold mt-4 mb-3 text-primary group-hover:text-surface"> $ {item.maxPrice} </p>
                     <Button onClick={()=> router.push(`/Products/${item.handle}`)} size={'default'} className="my-5 group-hover:bg-primary font-bold border-2  group-hover:text-quaternary bg-tertiary text-primary w-3/4 "> Shop Now </Button>
                  </div>
                  ))
                 }
                        
                    </div>

              

                   
                </div>
            


                    



        </div>
  )
}