'use client'

import { Button } from "@/components/ui/button";
import { Minus, MoveLeft, MoveRight, Plus, Star, Verified } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Product } from "../page";
import { client } from "@/lib/shopifyClient";
import { useCart } from "@/store/provider";
import ReviewDialog from "@/components/ReviewDialogue";
import { useAuth } from "@/store/authProvider";
import { items } from "@/constants/constants";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

 type Review = {
    productId: string,
    customerId: string,
    customerName: string,
    rating: number,
    review: string,
    date: Date,
  };


export default function ProductDetail({
  params,
}: Readonly<{
  params: { product: string };
}>) {

    const router = useRouter();
    const path = usePathname();
    const { open , setOpen, cart , addItem } = useCart();
    const {customer} = useAuth();
    const [selectedOption, setSelectedOption] = useState<'one-time' | null>('one-time');

    const handleSelect = (option: 'one-time' | null) => setSelectedOption(option);
    const [count, setCount] = useState(1);
    const formatPrice = (value: number) => value.toFixed(2);

    const [product , setProduct] = useState<Product>();
    const [reviews, setReviews] = useState<Review[]>([]);
    const [reviewsAverage, setReviewsAverage] = useState<number>();
    const [reviewsCount, setReviewsCount] = useState<number>();
    const [productImageCounter, setProductImageCounter] = useState(0);
    const [activeProduct , setActiveProduct] = useState(0);
    const [portion, setPortion] = useState(0);

    const displayTitle = (handle: string | undefined, title: string | undefined) => {
      switch (handle) {
        case "instinct-blend-5-pack-1-lb-each":
          return "Instinct Blend";
        case "ancestral-blend-5-pack-1-lb-each":
          return "Ancestral Blend";
        case "wild-blend-5-pack-1-lb-each":
          return "Wild Blend";
        case "best-seller-variety-pack":
          return "Variety Pack";
        default:
          return title ?? "";
      }
    };


const handleProductClick = (side: "left"  | "right") => {
  if (side === "left") {
    if (activeProduct > 0) {
      setActiveProduct(activeProduct - 1);
    } else {
      setActiveProduct(0);
    }
  } else {
    if (activeProduct < productImageCounter - 1) {
      setActiveProduct(activeProduct + 1);
    } else {
      setActiveProduct(productImageCounter - 1);
    }
  }
};
    
    const product_ingridents = [
    {
      name: 'free-range-turkey-ancestral-blend',
      content: ['beef'],
    },
    {
      name: 'Ingredient 2',
      content: ['chicken'],
    },
    {
      name: 'Ingredient 3',
      content: ['pork'],
    },
  ];

    const unitPrice = Number(product?.variants?.edges[portion]?.node?.price?.amount ?? 0);
    const subscriptionPrice =
      unitPrice -
      unitPrice *
        (product?.sellingPlan ? Number(product.sellingPlan.priceAdjustment / 100) : 0);
    const totalPrice = unitPrice * count;

    const productQuery = `
      query ProductByHandle($handle: String!) {
      product(handle: $handle) {
        id
        title
        handle
        description
        featuredImage {
              url
            }
        sellingPlanGroups(
                first:10
            ){
                 edges {
          node {
            name
            options{
                name
                values
            }
            sellingPlans(first:10){
                 edges {
          node {
            id
            priceAdjustments{
               adjustmentValue{
                ...on SellingPlanPercentagePriceAdjustment{
                    adjustmentPercentage
                }
               } 
            }
            checkoutCharge{
                
                value {
                    __typename
          ... on MoneyV2 {
            amount
            currencyCode
          }
                    }
                
            }
          }}
            }

            
          }}
            }
        
        priceRange{
                maxVariantPrice{
                    amount
                }
                minVariantPrice{
                    amount
                }
            }
        images(first: 5) {
          edges {
            node {
              url
            }
          }
        }
        variants(first: 5) {
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
      }
    }
    `
    const itemIndex: number = items.findIndex(item => item.id === params.product);

    useEffect( () => {
      
      async function fetchProduct() {
      const { data, errors, extensions } = await client.request(productQuery, {
        variables: {handle : params.product},
      });
      console.log(data);
      const item = {
        ...data.product,
        id : data.product.variants.edges[0].node.id,
        featuredImage : data.product.featuredImage.url,
        maxPrice : data.product.priceRange.maxVariantPrice.amount,
        minPrice : data.product.priceRange.minVariantPrice.amount,
        sellingPlan : {
          id: data.product.sellingPlanGroups.edges[0]?.node.sellingPlans.edges[0].node.id,
          name: data.product.sellingPlanGroups.edges[0]?.node.name,
          priceAdjustment: data.product.sellingPlanGroups.edges[0]?.node.sellingPlans.edges[0].node.priceAdjustments[0].adjustmentValue.adjustmentPercentage,
        }
      }

      console.log(" the fetched product  " , item);
      setProductImageCounter(item.images.edges.length);
      setProduct(item);
      fetchReviews(item.handle);

      }
      async function fetchReviews(handle: string){
        try {
            const res = await fetch(`/api/review/read?productId=${handle}`);
            const data = await res.json();
            console.log(" the reviews  " , data);
            if(data.reviews.length > 0)
            {
              const total = data.reviews.reduce((acc: number, r : Review) => acc + r.rating, 0);
            console.log("the sum " , total);
            const averageRating = total / data.reviews.length;
            setReviewsAverage(averageRating);
            setReviewsCount(data.reviews.length);
            }
            setReviews(data.reviews);
        } catch (err) {
          console.error(" cant fetch reviews check server ");
        } 
      }

      fetchProduct();
      
  
     },[])


  return (
         <div className="pb-40 flex flex-col bg-tertiary content-center justify-items-center font-acumin ">

               <div className="flex flex-col lg:flex-row  pt-48  ">
                 <div className=" lg:w-3/5 flex  items-center justify-center ">
                        <Button
                          variant={'outline'}
                          onClick={() => handleProductClick('left')}
                          className={`bg-quinary text-primary hover:bg-primary me-5 hover:text-quinary border-primary rounded-full size-12 ${activeProduct <= 0 ? 'invisible' : ''}`}
                        >
                          <MoveLeft style={{ width: '2rem' , height: '2rem' }} /> 
                        </Button> 


                    <img alt="Progress Steps" className="w-3/5 " src={product?.images.edges[activeProduct].node.url}/>
                     <Button
                       variant={'outline'}
                       onClick={() => handleProductClick('right')}
                       className={`bg-quinary text-primary hover:bg-primary hover:text-quinary border-primary rounded-full size-12 ms-5 ${activeProduct >= productImageCounter - 1 ? 'invisible' : ''}`}
                     > 
                          <MoveRight style={{ width: '2rem' , height: '2rem' }}/> 
                        </Button>
                </div>

                <div className="lg:w-2/5 flex flex-col items-center justify-center ">
                    <div className="w-10/12 text-primary mt-10 py-10 flex flex-col items-start gap-[1rem]">
                        
                       
                      <div tabIndex={0} onClick={() => handleSelect('one-time')} className="flex w-full justify-between items-center bg-primary mt-5 border-2 py-2 px-4 rounded-[4rem]">
                          <div className="flex items-center gap-[2em] sm:gap-[3rem] w-2/3">
                              <input type='radio' checked={selectedOption === 'one-time'} onChange={() => {}} className="peer checked:text-quaternary ring-quaternary checked:ring-quaternary focus:ring-quaternary  border-0 size-6 text-primary  text-center "/>
                              <p className="text-quaternary/60 peer-checked:text-quaternary  sm:text-xl font-germania "> One Time purchase </p>
                          </div>
                          <p className="me-5 text-quaternary peer-checked:text-quaternary/60 sm:text-2xl font-germania "> ${product?.variants?.edges[portion]?.node?.price.amount} </p>
                      </div>

                      <div tabIndex={0} onClick={() => handleSelect(null)} className={`flex w-full justify-between ${product?.sellingPlan?.id !== undefined ?  '' : 'hidden'}  items-center bg-primary mt-5  py-2 px-4 rounded-[4rem]`}>
                          <div className="flex items-center gap-[3em] sm:gap-[3rem] w-2/3">
                              <input type='radio' checked={selectedOption !== 'one-time'} onChange={() => {}} className="peer checked:text-quaternary ring-quaternary checked:ring-quaternary focus:ring-quaternary  border-0 size-6 text-primary  text-center "/>
                              <p className="text-quaternary/60 peer-checked:text-quaternary  sm:text-xl font-germania"> Subscribe &amp; Save </p>
                          </div>
                          <p className="me-5 text-quaternary peer-checked:text-quaternary/60 sm:text-2xl font-germania "> ${formatPrice(subscriptionPrice)} </p>
                      </div>
                      <p className={`text-xs sm:text-lg mb-1 sm:py-2 border-b-0 border-primary font-germania sm:mt-3 ${product?.sellingPlan?.id !== undefined ? '' : 'hidden'}`}>
                        Subscription orders ship every 2 weeks.
                      </p>

                      <div tabIndex={0}  className="flex w-full justify-between bg-primary mt-5 p-2  rounded-[4rem]">
                          
                          <div className="flex items-center w-1/3 ms-3">
                              <Tooltip>
                                 <TooltipTrigger asChild>
                                    <Button
                                      onClick={() => count > 1 ? setCount((prev) => Math.max(0, prev - 1)) : null}
                                      disabled={count === 0}
                                      variant={'outline'}
                                      size={'icon'}
                                      className="rounded-full size-4 sm:size-auto  border-quaternary hover:bg-quaternary/10"
                                    >
                                      <Minus className="stroke-quaternary "/>
                                    </Button>
                                  </TooltipTrigger>
                                 <TooltipContent className="bg-quaternary text-primary rounded-lg p-2">
                                    <p> Sold in 5 lb increments (minimum 5 lb) </p>
                                  </TooltipContent>
                              </Tooltip>
                              
                              <p className=" text-xl sm:text-3xl font-germania mx-5 text-quaternary"> {count} </p>
                              <Tooltip>
                                 <TooltipTrigger asChild>
                                      <Button onClick={() =>  setCount((prev) => prev + 1)} 
                                          variant={'outline'} size={'icon'} 
                                          className="rounded-full size-4 sm:size-auto border-quaternary hover:bg-quaternary/10 "> 
                                          <Plus className="stroke-quaternary"/> 
                                    </Button>
                                  </TooltipTrigger>
                                 <TooltipContent className="bg-quaternary text-primary rounded-lg p-2">
                                    <p> Sold in 5 lb increments (minimum 15 lb) </p>
                                  </TooltipContent>
                              </Tooltip>
                          </div>
                          <div className="w-2/3 flex me-3  items-center justify-end">
                                      <p className="text-quaternary text-xl sm:text-4xl font-germania" > ${formatPrice(totalPrice)} <span className="text-xl">({count* parseInt(product?.variants?.edges[portion]?.node?.title?.split(" ")[0] ?? "0")} lb)</span></p>
                          </div>
                          
                      </div>

                      <Button onClick={() => {
                            const subscriptionDiscounts = selectedOption !== 'one-time' && product?.sellingPlan ? product?.sellingPlan.id : "";
                            const cartnow = addItem(product?.variants?.edges[portion]?.node?.id ?? "", count,subscriptionDiscounts );
                            console.log("the cart now  " ,cartnow)
                            setOpen(true);
                          }} variant={'outline'} className="sm:h-full w-10/12 self-center sm:w-full p-4 hover:bg-quaternary text-xl hover:text-2xl hover:text-white font-germania rounded-[4rem] bg-quaternary "> Add to Cart </Button>

                        {/* { customer?.id && <ReviewDialog
                          productId={product?.handle as string}
                          customerId={customer?.id as string}
                          customerName={`${customer?.firstName} ${customer?.lastName}`}
                          triggerClassName="h-full w-full p-4 hover:bg-quaternary text-xl hover:text-2xl hover:text-white font-germania rounded-[4rem] bg-primary text-quaternary"
                        />} */}
                      
                        <p className="text-xl sm:text-4xl mt-12 font-germania">
                          {displayTitle(product?.handle ?? params.product, product?.title)}
                        </p>

                       <Accordion
                                  type="single"
                                  collapsible
                                  className="w-11/12 py-2 bg-tertiary text-3xl text-primary font-germania font-light"
                                  defaultValue="item-0">
                                 <AccordionItem value={"item-0"} className="mb-1 py-2 border-b-0 border-primary">
                                          <AccordionTrigger className="text-base sm:text-xl capitalize text-start leading-8 hover:underline"> Description </AccordionTrigger>
                                          <AccordionContent className="flex flex-col gap-3 p-1 leading-7 text-sm sm:text-base text-start">
                                               <p > {product?.description} </p>
                                            </AccordionContent>
                                  </AccordionItem>
                                   <AccordionItem value={"item-1"} className="mb-1 py-2 border-b-0 border-primary">
                                          <AccordionTrigger className="text-base sm:text-xl capitalize text-start leading-8 hover:underline"> Feeding Guide </AccordionTrigger>
                                          <AccordionContent className="flex flex-col gap-3 p-1 leading-7 text-sm sm:text-base text-start">
                                              <p className=""> 
                                               Feed based on your dog's age, activity level, and life stage. Every dog is an individual—these guidelines are a starting point, not a prescription.                                                
                                                 
                                                 <ul className="my-3 list-disc ch list-inside *:mt-4">
                                                    <li >Adult Dogs: Feed 2–3% of ideal body weight per day. Active dogs need more, less active dogs need less.</li>
<li >Puppies: Feed 5–6% of current body weight daily, split into 2–3 meals. Reduce gradually as growth slows.
</li>
<li >Pregnant/Nursing Females: Increase to 4–8% of body weight depending on stage and litter size.
</li>
                                                 </ul>

                                                  Trust your dog's body. Ribs should be easily felt but not visible, with a defined waist from above. Adjust portions based on condition, not charts.
</p>
                                            </AccordionContent>
                                  </AccordionItem>
                                  <AccordionItem value={"item-2"} className="mb-1 py-2 border-b-0 border-primary">
                                          <AccordionTrigger className="text-base sm:text-xl capitalize text-start leading-8 hover:underline"> Storage Instructions </AccordionTrigger>
                                          <AccordionContent className="flex flex-col gap-3 p-1 leading-7 text-sm sm:text-base text-start">
                                              
                                              <p className=""> 
                                                Raw Dawg is real food. Treat it that way.
                                                </p>
                                                <ul>

                                                  <li className="mb-2 list-disc list-inside">  Keep frozen until ready to use. </li>

                                                  <li className="mb-2 list-disc list-inside"> Thaw in the refrigerator. </li>

                                                  <li className="mb-2 list-disc list-inside"> Once thawed, keep refrigerated and use within 4 days. </li>

                                                  <li className="mb-2 list-disc list-inside"> Do not refreeze after thawing. </li>

                                                  <li className="mb-2 list-disc list-inside">  Always serve raw. Do not cook. </li>
                                                </ul>
                                               
                                                <p className="mt-4">
                                                Handle like raw meat. Wash hands, bowls, and surfaces after feeding.
                                                
                                                 </p>
                                          </AccordionContent>
                                  </AccordionItem>
                                  <AccordionItem value={"item-3"} className="mb-1 py-2 border-b-0 border-primary">
                                          <AccordionTrigger className="text-base sm:text-xl capitalize text-start leading-8 hover:underline"> Ingredients </AccordionTrigger>
                                          <AccordionContent className="flex flex-col gap-3 p-1 leading-7 text-sm sm:text-base text-start">
                                              <ul className=""> 
                                                {
                                                  items[itemIndex].content.map((item, index) => (
                                                    <li key={index} className="mb-2 list-disc list-inside">
                                                      <span className="font-bold capitalize ">{item.replace(/-/g, ' ')}</span>
                                                      
                                                    </li>
                                                  ))
                                                }
                                              </ul>
                                          </AccordionContent>
                                  </AccordionItem>
                                  
                                  <AccordionItem value={"item-5"} className="mb-1 py-2 border-b-0 border-primary">
                                          <AccordionTrigger className="text-base sm:text-xl capitalize text-start leading-8 hover:underline"> Guaranteed Analysis </AccordionTrigger>
                                          <AccordionContent className="flex flex-col gap-3 p-1 leading-7 text-sm sm:text-base text-start">
                                              <ul className=""> 
                                                {
                                                  Object.entries(items[itemIndex].analysis_results).map(([key, value], index) => (
                                                    <li key={index} className="mb-2 list-disc list-inside ">
                                                      <span className="font-bold capitalize ">{key.replace(/-/g, ' ')}</span> : {value}
                                                    </li>
                                                  ))
                                                }
                                              </ul>
                                          </AccordionContent>
                                  </AccordionItem>
                            
                        </Accordion>


                  
                     
                        
                    </div>

                
                  
                </div>
              </div>

              

             {/*  <div className="flex flex-col mt-16 items-center text-primary justify-center ">
                      <p className="text-7xl font-extrabold text-center my-10 underline font-germania  underline-offset-8 "> What our Dawg's Say </p>
                      {(reviews.length > 0) && <div className="w-3/5   flex-col justify-between">
                              
                              <div className="flex justify-between items-center " >
                                  <div className="text-xl flex flex-col justify-between " >
                                          <p className="text-5xl font-bold"> 
                                                  {reviewsAverage} / 5  
                                          </p>
                                          <p className="text-center leading-[4rem]  "> 
                                                  {reviewsCount} <span className="text-sm ">reviews</span> 
                                          </p>
                                      </div>
                                        
                                        <Select >
                                            <SelectTrigger className="p-4 w-2/6 rounded-[1rem] border-none bg-quaternary focus:ring-2 focus:ring-primary focus:border-primary data-[placeholder]:text-primary/80 ">
                                                <SelectValue placeholder="All Reviews" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-quaternary text-primary shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] focus-within:ring-black" >
                                                <SelectItem className="data-[highlighted]:bg-primary data-[highlighted]:font-bold data-[highlighted]:text-quaternary" value="5">5 Star</SelectItem>
                                                <SelectItem className="data-[highlighted]:bg-primary data-[highlighted]:font-bold data-[highlighted]:text-quaternary" value="4">4 Star</SelectItem>
                                                <SelectItem className="data-[highlighted]:bg-primary data-[highlighted]:font-bold data-[highlighted]:text-quaternary" value="3">3 Star</SelectItem>
                                                <SelectItem className="data-[highlighted]:bg-primary data-[highlighted]:font-bold data-[highlighted]:text-quaternary" value="2">2 Star</SelectItem>
                                                <SelectItem className="data-[highlighted]:bg-primary data-[highlighted]:font-bold data-[highlighted]:text-quaternary" value="1">1 Star</SelectItem>
                                            </SelectContent>
                                        </Select>
                                </div>
                                    
                                {
                                     reviews.map((review,index) => (
                                             <div key={index} className=" w-11/12 my-10 py-2" >
                                                        <p className="  w-1/5 flex my-4"> 
                                                                                {[...Array(review.rating)].map((_,index) => (
                                                                                        < Star key={index} className="fill-quaternary stroke-quaternary size-5" />
                                                                                ))} 
                                                        </p>
                                                        <p className="leading-[2rem] text-2xl flex items-center  font-bold "> 
                                                        {review.customerName} <span className="ms-5"> <Verified className="stroke-quaternary" /></span> 
                                                        </p>
                                                        <p className=" font-roboto font-light leading-[1.8rem] "> 
                                                                {review.review}
                                                        </p>
                                                </div>
                                     ))   
                                }

                                
                        </div>}
                      {!reviews.length  && <p className="text-5xl  font-germania text-center my-10"> No reviews Currently </p>}
                        
              </div> */}


            


                    



        </div>
  )
}
