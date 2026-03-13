'use client'

import { Button } from "@/components/ui/button";
import {  useRouter } from "next/navigation";


import { useEffect, useMemo, useState } from "react";
import { client } from "@/lib/shopifyClient";

export type Product = {
    id: string;
    handle: string;
    title: string;
    availableForSale: boolean;
    description: string;
    featuredImage: string;
    maxPrice : number;
    minPrice : number;
    images : {
      edges: {
        node: {
          url: string;
        };
      }[];
    };
    variants : {
      edges: {
        node: {
          id: string;
          title: string;
          price: {
            amount : string;
          };
        };
      }[];
    };
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
    const [isLoading, setIsLoading] = useState(true);
    const [orderedProducts, setOrderedProducts] = useState<Product[]>([]);
    const varietyHandle = "best-seller-variety-pack";
    const turkeyHandle = "free-range-turkey-ancestral-blend";
    const storeMode = process.env.NEXT_STORE_MODE || "PRE_LAUNCH";
    

  const productQuery = `
    query getProducts($first: Int) {
     products(first: $first) {
        edges {
          node {
            id
            handle
            availableForSale
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
          price {
                amount
              }
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
    setIsLoading(true);
    try {
      setProducts([]);
      const { data, errors, extensions } = await client.request(productQuery, {
        variables: { first: 10 },
      });
      console.log(data);
      const productTemp: Product[] = [];
      data.products.edges.map((elm: any, index: number) => {
        const product: Product = {
          ...elm.node,
          featuredImage: elm.node.featuredImage.url,
          maxPrice: elm.node.priceRange.maxVariantPrice.amount,
          minPrice: elm.node.priceRange.minVariantPrice.amount,
        };
        productTemp.push(product);
      });
      console.log("Fetched Products:", productTemp);
      setProducts(productTemp);
    } catch (err) {
      console.error("Failed to fetch products", err);
    } finally {
      setIsLoading(false);
    }
    }
    fetchProduct();


  },[])


    useMemo(() => {
    const existingVariety = products.find(
      (product) =>
        product.handle === varietyHandle
    );
    const turkeyProduct = products.find((product) => product.handle === turkeyHandle);
    const rest = products.filter(
      (product) => product.handle !== varietyHandle && product.handle !== turkeyHandle
    );
   
    console.log("Existing Variety Pack:", existingVariety);
    console.log("Turkey Product:", turkeyProduct);

     setOrderedProducts(turkeyProduct && existingVariety ? [ existingVariety,...rest, turkeyProduct] : existingVariety ? [ existingVariety,...rest] : rest);
  }, [products]);

  const displayTitle = (product: Product) => {
    console.log("Product handle:", product.handle);
    switch (product.handle) {
      case "grass-fed-beef-instinct-blend":
        return "Instinct Blend";
      case "free-range-turkey-ancestral-blend":
        return "Ancestral Blend";
      case "turkey-salmon-wild-blend":
        return "Wild Blend";
      case "best-seller-variety-pack":
        return "Bestseller Variety Pack";
      default:
        return product.handle;
    }
  };

  return (
         <div className="min-h-screen flex flex-col bg-primary content-center justify-items-center font-acumin ">

                

                <div className="w-full flex-1 mt-32 pb-20 flex flex-col items-center justify-center">
                    <div className="w-10/12 mb-10 py-10 flex flex-wrap justify-around gap-[3rem]">

                        {isLoading ? (
                          <div className="w-full flex-1 flex items-center justify-center ">
                            <div className="size-12 rounded-full border-4 border-quaternary border-t-transparent animate-spin" />
                          </div>
                        ) : (
                          orderedProducts.map((item, index) => (
                            item.availableForSale ? (
                              <div key={index} className=" flex flex-col items-center justify-between group rounded-lg hover:cursor-pointer  shrink  w-[26em] text-clip text-center">
                                <img alt="Progress Steps" className="w-[26em] h-[36em] justify-self-center border-black mb-5 rounded-lg border-2 " src={item.featuredImage}/>
                               <p className="text-3xl font-germania text-center text-tertiary  ">{displayTitle(item)}</p>
                               <Button
                                 
                                 onClick={() => router.push(`/Products/${item.handle}`)}
                                 size={'default'}
                                 className="my-5  font-germania text-2xl border-2  bg-tertiary hover:bg-tertiary hover:text-3xl py-5  text-primary w-3/4 disabled:opacity-60 disabled:cursor-not-allowed"
                               >
                                 {storeMode === "PRE_LAUNCH" ? "Pre-Order" : "Add to Cart"} — ${item?.variants?.edges[0]?.node?.price?.amount}
                               </Button>
                            </div>
                            ) : null
                          ))
                        )}
                        
                    </div>

              

                   
                </div>
            


                    



        </div>
  )
}
