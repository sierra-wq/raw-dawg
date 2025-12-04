'use client'

import { Button } from "@/components/ui/button";
import { Minus, Plus, Star, Verified } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Wave2 from "@/assets/layered-waves-haikei (2).svg"
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
    const { open , setOpen, cart , addItem } = useCart();
    const {customer} = useAuth();
    const [selectedOption, setSelectedOption] = useState<'one-time' | null>('one-time');

    const handleSelect = (option: 'one-time' | null) => setSelectedOption(option);
    const [count, setCount] = useState(1);

    const [product , setProduct] = useState<Product>();
    const [reviews, setReviews] = useState<Review[]>([]);
    const [reviewsAverage, setReviewsAverage] = useState<number>();
    const [reviewsCount, setReviewsCount] = useState<number>();
    
    console.log(" the customer ", customer);
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
            }
          }
        }
      }
    }
    `
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
      setProduct(item);
      fetchReviews(item.handle);

      }
      async function fetchReviews(handle: string){
        try {
            const res = await fetch(`/api/review/read?productId=${handle}`);
            const data = await res.json();
            console.log(" the reviews  " , data);
            if(data.length > 0)
            {
              const total = data.reduce((acc: number, r : Review) => acc + r.rating, 0);
            console.log("the sum " , total);
            const averageRating = total / data.length;
            setReviewsAverage(averageRating);
            setReviewsCount(data.length);
            }
            setReviews(data);
        } catch (err) {
          console.error(" cant fetch reviews check server ");
        } 
      }

      fetchProduct();
      
  
     },[])


  return (
         <div className="pb-40 flex flex-col bg-quaternary/70 content-center justify-items-center font-acumin ">

               <div className="flex pt-20 bg-quaternary ">
                 <div className="w-3/5 flex flex-col items-center justify-center ">
                    <img alt="Progress Steps" className="w-3/5 " src={product?.featuredImage}/>
                </div>

                <div className="w-2/5 flex flex-col items-center justify-center ">
                    <div className="w-10/12 text-primary mt-10 py-10 flex flex-col items-start gap-[1rem]">
                        <p className="text-4xl"> {product?.title} </p>
                        <p className="text-lg"> {product?.description} </p>
                        { customer?.id && <ReviewDialog
                          productId={product?.handle as string}
                          customerId={customer?.id as string}
                          customerName={`${customer?.firstName} ${customer?.lastName}`}
                        />}
                        
                   
                      

                      <div tabIndex={0} onClick={() => handleSelect('one-time')} className="flex w-full justify-between items-center bg-primary mt-5 border-2 py-2 px-4 rounded-[4rem]">
                          <div className="flex items-center gap-[3rem] w-2/3">
                              <input type='radio' checked={selectedOption === 'one-time'} onChange={() => {}} className="peer checked:text-quaternary ring-quaternary checked:ring-quaternary focus:ring-quaternary  border-0 size-6 text-primary  text-center "/>
                              <p className="text-quaternary/60 peer-checked:text-quaternary text-lg font-bold"> One Time purchase </p>
                          </div>
                          <p className="me-5 text-quaternary peer-checked:text-quaternary/60 text-lg font-bold "> ${product?.minPrice} </p>
                      </div>

                      <div tabIndex={0} onClick={() => handleSelect(null)} className={`flex w-full justify-between ${product?.sellingPlan ? 'hidden' : ''}  items-center bg-primary mt-5  py-2 px-4 rounded-[4rem]`}>
                          <div className="flex items-center gap-[3rem] w-2/3">
                              <input type='radio' checked={selectedOption !== 'one-time'} onChange={() => {}} className="peer checked:text-quaternary ring-quaternary checked:ring-quaternary focus:ring-quaternary  border-0 size-6 text-primary  text-center "/>
                              <p className="text-quaternary/60 peer-checked:text-quaternary text-lg font-bold"> Every Week Subscription </p>
                          </div>
                          <p className="me-5 text-quaternary peer-checked:text-quaternary/60 text-lg font-bold "> ${(product?.maxPrice ?? 0) - ((product?.maxPrice ?? 0) * (product?.sellingPlan ? product?.sellingPlan.priceAdjustment/100 : 1 )) } </p>
                      </div>

                      <div tabIndex={0}  className="flex w-full justify-between bg-primary mt-5   rounded-[4rem]">
                          
                          <div className="flex items-center w-2/3 ms-3">
                              <Button  onClick={() => setCount(count - 1)} variant={'outline'} size={'icon'} className="rounded-full border-quaternary hover:bg-quaternary/10"> <Minus className="stroke-quaternary"/> </Button>
                              <p className="text-3xl mx-5 text-quaternary"> {count} </p>
                              <Button onClick={() => setCount(count + 1)} variant={'outline'} size={'icon'} className="rounded-full border-quaternary hover:bg-quaternary/10 "> <Plus className="stroke-quaternary"/> </Button>
                              
                          </div>
                          <Button onClick={() => {
                            const subscriptionDiscounts = selectedOption !== 'one-time' && product?.sellingPlan ? product?.sellingPlan.id : "";
                            const cartnow = addItem(product?.id ?? "", count,subscriptionDiscounts );
                            console.log("the cart now  " ,cartnow)
                            setOpen(true);
                          }} variant={'outline'} className="h-full w-2/3 p-4 hover:bg-quaternary hover:text-xl font-bold rounded-[4rem] bg-quaternary "> Add to Cart </Button>
                      </div>
                        
                    </div>

                
                  
                </div>
              </div>

               <figure className="w-full ">
          <Wave2 className="w-full fill-quaternary" />
          <figcaption className="sr-only">Decorative wave divider between sections</figcaption>
        </figure>

              <div className="flex flex-col items-center text-primary justify-center ">
                      <p className="text-4xl font-extrabold text-center my-10 underline "> What our Dawg's Say </p>
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
                      {!reviews.length  && <p className="text-5xl font-extrabold text-center my-10"> No reviews Currently </p>}
                        {/* <Button variant={'link'} className="text-quaternary my-10 text-2xl h-auto  font-semibold decoration-slice"> Load More </Button> */}
                             
              </div>


            


                    



        </div>
  )
}