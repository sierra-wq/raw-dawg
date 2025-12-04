import {client} from "@/lib/shopifyClient"

export interface CartLine {
  id: string;
  quantity: number;
  title: string;
    description: string;
featuredImage: string;
    price : number;
  merchandiseId: string;
  sellingPlanId?: {
    id: string;
    priceAdjustments: number;
  };
}

export interface CartType {
  id: string;
  checkoutUrl?: string;
  totalQuantity: number;
  cost:{
    checkoutChargeAmount: number;
    subtotalAmount: number;
    totalAmount: number;
  }
  lines: CartLine[];
}



export const CartStore = {
  async createCart(): Promise<CartType> {
    const QUERY = `
      mutation {
      cartCreate {
        cart {
          id
          checkoutUrl
        }
      }
    }
    `;
    const  { data, errors, extensions }  = await client.request(QUERY);
    
    return {
      id: data.cartCreate.cart.id,
      checkoutUrl: data.cartCreate.cart.checkoutUrl,
      cost: {
        checkoutChargeAmount: 0,
        subtotalAmount: 0,
        totalAmount: 0
      },
      totalQuantity : 0,
      lines: [],
    };
  },


  async GetCart(id : string): Promise<CartType> {
    const QUERY = `
      query GetCart($id: ID!){
  cart(id:$id) {
   
  checkoutUrl
   cost{
    checkoutChargeAmount{
        amount
    }
    subtotalAmount{
        amount
    }
    totalAmount{
        amount
    }

   }
   lines(first:10){
        edges{
            node{
                attributes{
                    key
                    value
                }
                id
                quantity
                cost{
                    subtotalAmount{
                        amount
                    }
                    totalAmount{
                        amount
                    }
                }
                merchandise{
                    ...on ProductVariant{
                        id
                        product{
                            description
                            featuredImage{
                                url
                            }
                            title
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
                        }

                    }
                }
            }
        }
   }
   totalQuantity
   
   

  }
}
    `;
    const variables = {
        id : id
    }
    const  { data, errors, extensions }  = await client.request(QUERY,{variables});
    const items = data.cart.lines.edges.map((e: any) => ({
      id: e.node.id,
      quantity: e.node.quantity,
      title: e.node.merchandise.product.title,
      description: e.node.merchandise.product.description,
      Price: parseFloat(e.node.merchandise.product.priceRange.maxVariantPrice.amount),
      featuredImage: e.node.merchandise.product.featuredImage.url,
      merchandiseId: e.node.merchandise.id,
      sellingPlanId: {id: e.node.merchandise.product.sellingPlanGroups?.edges[0]?.node.sellingPlans.edges[0]?.node.id , 
      priceAdjustments: parseFloat(e.node.merchandise.product.priceRange.maxVariantPrice.amount) * (e.node.merchandise.product.sellingPlanGroups?.edges[0]?.node.sellingPlans.edges[0]?.node.priceAdjustments[0].adjustmentValue.adjustmentPercentage ?? 0) / 100},
    }));
    return {
      id: data.cart.id,
      checkoutUrl: data.cartCreate.cart.checkoutUrl,
      cost : data.cart.cost,
      totalQuantity : data.cart.totalQuantity,
      lines: items,
    };
  },

  async addLine(cartId: string, variantId: string, quantity = 1, sellingPlanId?: string) {
    const QUERY = `
      mutation AddToCart($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
         cart {
    checkoutUrl
    id
   cost{
    checkoutChargeAmount{
        amount
    }
    subtotalAmount{
        amount
    }
    totalAmount{
        amount
    }

   }
   lines(first:10){
        edges{
            node{
                attributes{
                    key
                    value
                }
                id
                quantity
                cost{
                    subtotalAmount{
                        amount
                    }
                    totalAmount{
                        amount
                    }
                }
                merchandise{
                    ...on ProductVariant{
                        id
                        product{
                            description
                            featuredImage{
                                url
                            }
                            priceRange{
                maxVariantPrice{
                    amount
                }
                minVariantPrice{
                    amount
                }
            }
                            title
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
                        }

                    }
                }
            }
        }
   }
   totalQuantity
   
   

  }
      }
    }
    `;

    const variables = {
      cartId,
      lines: [
        {
          quantity,
          merchandiseId: variantId,
          ...(sellingPlanId && { sellingPlanId }),
        },
      ],
    };
    console.log("the variables are " , variables);
    const  { data, errors, extensions }  = await client.request(QUERY,{variables});
    console.log("the responsee data for the product " , data);

    const items = data.cartLinesAdd.cart?.lines.edges.map((e: any) => ({
      id: e.node.id,
      quantity: e.node.quantity,
      title: e.node.merchandise.product.title,
      description: e.node.merchandise.product.description,
      price: parseFloat(e.node.merchandise.product.priceRange.maxVariantPrice.amount),
      featuredImage: e.node.merchandise.product.featuredImage.url,
      merchandiseId: e.node.merchandise.id,
      sellingPlanId: {id: e.node.merchandise.product.sellingPlanGroups?.edges[0]?.node.sellingPlans.edges[0]?.node.id , 
      priceAdjustments: parseFloat(e.node.merchandise.product.priceRange.maxVariantPrice.amount) * (e.node.merchandise.product.sellingPlanGroups?.edges[0]?.node.sellingPlans.edges[0]?.node.priceAdjustments[0].adjustmentValue.adjustmentPercentage ?? 0) / 100},
    }));
    return {
      id: data.cartLinesAdd.cart.id,
      checkoutUrl: data.cartLinesAdd.cart.checkoutUrl,
      cost : {
        checkoutChargeAmount: data.cartLinesAdd.cart.cost.checkoutChargeAmount.amount,
        subtotalAmount: data.cartLinesAdd.cart.cost.subtotalAmount.amount,
        totalAmount: data.cartLinesAdd.cart.cost.totalAmount.amount
      },
      totalQuantity : data.cartLinesAdd.cart.totalQuantity,
      lines: items,
    };
  },

  async removeLine(cartId: string, lineId: string) {
    const QUERY = `
      mutation RemoveLine($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
              cart{
    id
    checkoutUrl
   cost{
    checkoutChargeAmount{
        amount
    }
    subtotalAmount{
        amount
    }
    totalAmount{
        amount
    }

   }
   lines(first:10){
        edges{
            node{
                attributes{
                    key
                    value
                }
                id
                quantity
                cost{
                    subtotalAmount{
                        amount
                    }
                    totalAmount{
                        amount
                    }
                }
                merchandise{
                    ...on ProductVariant{
                        id
                        product{
                            description
                            featuredImage{
                                url
                            }
                            priceRange{
                maxVariantPrice{
                    amount
                }
                minVariantPrice{
                    amount
                }
            }
                            title
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
                        }

                    }
                }
            }
        }
   }
   totalQuantity
   
   

  }
      }
    }
    `;
    const variables = { cartId, lineIds: [lineId] };

    console.log("the variables are " , variables);
    const  { data, errors, extensions }  = await client.request(QUERY,{variables});
    console.log("the responsee data for the product " , data);

    
    const items = data.cartLinesRemove.cart?.lines.edges.map((e: any) => ({
      id: e.node.id,
      quantity: e.node.quantity,
      title: e.node.merchandise.product.title,
      description: e.node.merchandise.product.description,
      price: parseFloat(e.node.merchandise.product.priceRange.maxVariantPrice.amount),
      featuredImage: e.node.merchandise.product.featuredImage.url,
      merchandiseId: e.node.merchandise.id,
      sellingPlanId: {id: e.node.merchandise.product.sellingPlanGroups?.edges[0]?.node.sellingPlans.edges[0]?.node.id , 
      priceAdjustments: parseFloat(e.node.merchandise.product.priceRange.maxVariantPrice.amount) * (e.node.merchandise.product.sellingPlanGroups?.edges[0]?.node.sellingPlans.edges[0]?.node.priceAdjustments[0].adjustmentValue.adjustmentPercentage ?? 0) / 100},
    }));
    return {
      id: data.cartLinesRemove.cart.id,
      checkoutUrl: data.cartLinesRemove.cart.checkoutUrl,
      cost : {
        checkoutChargeAmount: data.cartLinesRemove.cart.cost.checkoutChargeAmount.amount,
        subtotalAmount: data.cartLinesRemove.cart.cost.subtotalAmount.amount,
        totalAmount: data.cartLinesRemove.cart.cost.totalAmount.amount
      },
      totalQuantity : data.cartLinesRemove.cart.totalQuantity,
      lines: items,
    };
  },

  async updateLine(cartId: string, lineId: string, quantity: number) {
    const QUERY = `
          mutation UpdateLine($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) {
              cart{
    id
    checkoutUrl
   cost{
    checkoutChargeAmount{
        amount
    }
    subtotalAmount{
        amount
    }
    totalAmount{
        amount
    }

   }
   lines(first:10){
        edges{
            node{
                attributes{
                    key
                    value
                }
                id
                quantity
                cost{
                    subtotalAmount{
                        amount
                    }
                    totalAmount{
                        amount
                    }
                }
                merchandise{
                    ...on ProductVariant{
                        id
                        product{
                            description
                            featuredImage{
                                url
                            }
                            priceRange{
                maxVariantPrice{
                    amount
                }
                minVariantPrice{
                    amount
                }
            }
                            title
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
                        }

                    }
                }
            }
        }
   }
   totalQuantity
   
   

  }
      }
    }
    `;

    const variables = { cartId, lines: [{ id: lineId, quantity }] };

    const  { data, errors, extensions }  = await client.request(QUERY,{variables});
    const items = data.cartLinesUpdate.cart?.lines.edges.map((e: any) => ({
      id: e.node.id,
      quantity: e.node.quantity,
      title: e.node.merchandise.product.title,
      description: e.node.merchandise.product.description,
      price: parseFloat(e.node.merchandise.product.priceRange.maxVariantPrice.amount),
      featuredImage: e.node.merchandise.product.featuredImage.url,
      merchandiseId: e.node.merchandise.id,
      sellingPlanId: {id: e.node.merchandise.product.sellingPlanGroups?.edges[0]?.node.sellingPlans.edges[0]?.node.id , 
      priceAdjustments: parseFloat(e.node.merchandise.product.priceRange.maxVariantPrice.amount) * (e.node.merchandise.product.sellingPlanGroups?.edges[0]?.node.sellingPlans.edges[0]?.node.priceAdjustments[0].adjustmentValue.adjustmentPercentage ?? 0) / 100},
    }));
    return {
      id: data.cartLinesUpdate.cart.id,
      checkoutUrl: data.cartLinesUpdate.cart.checkoutUrl,
      cost : {
        checkoutChargeAmount: data.cartLinesUpdate.cart.cost.checkoutChargeAmount.amount,
        subtotalAmount: data.cartLinesUpdate.cart.cost.subtotalAmount.amount,
        totalAmount: data.cartLinesUpdate.cart.cost.totalAmount.amount
      },
      totalQuantity : data.cartLinesUpdate.cart.totalQuantity,
      lines: items,
    };
  },
  
};

