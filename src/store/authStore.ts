import {client} from "@/lib/shopifyClient"

export type SignupInput = {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  phone? : string;
  acceptsMarketing?: boolean
};

export type UpdateInput = {
  firstName?: string;
  lastName?: string;
  phone? : string;
  acceptsMarketing?: boolean
};

export type MailingAddressInput = {
  address1: string
  address2?: string
  city: string
  company?: string
  country: string
  firstName: string
  id?: string;
  lastName: string
  phone: string
  province?: string
  zip: string
}



export async function signup(input: SignupInput) {
  const mutation = `
    mutation customerCreate($input: CustomerCreateInput!) {
      customerCreate(input: $input) {
        customer {
          id
          email
          firstName
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const {data, errors , extensions} = await client.request(mutation, {variables: { input }});
  console.log("the data ", data);
  console.log("the error " , errors);
  return data;
}

export async function login(email: string, password: string) {
  const mutation = `
    mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
      customerAccessTokenCreate(input: $input) {
        customerAccessToken {
          accessToken
          expiresAt
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const {data, errors,  extensions} = await client.request(mutation, {
   variables: { input: { email, password },}
  });

  console.log("the data login ", data);
  console.log("the error login" , errors);

  if (!data.customerAccessTokenCreate.userErrors && !data.customerAccessTokenCreate.userErrors.length) {
         const {success} = await fetch("/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: data.customerAccessTokenCreate.customerAccessToken.accessToken }),
        }).then((res) => res.json());
        console.log("the response from the login api route " , success);
        if(success) {
          return { ...data,success };
        }
    }

  return data;
}

export async function logout(accessToken: string) {
  const mutation = `
    mutation customerAccessTokenDelete($customerAccessToken: String!) {
      customerAccessTokenDelete(customerAccessToken: $customerAccessToken) {
        deletedAccessToken
        deletedCustomerAccessTokenId
        userErrors { field message }
      }
    }
  `;
  const {data} = await client.request(mutation, {
    variables:{customerAccessToken: accessToken},
  });
  return data.customerAccessTokenDelete;
}

export async function getCustomer(accessToken: string) {
  const query = `
    query customer($token: String!) {
      customer(customerAccessToken: $token) {
        id
        email
        firstName
        lastName
        phone
        addresses(first: 1) {
          edges {
            node {
              id
              firstName
              lastName
              address1
              city
              province
              zip
              country
              phone
            }
          }
          
        }
      }
    }
  `;
  const { data, errors, extensions } = await client.request(query, { variables: { token: accessToken } });
  console.log(" the data for the customer **" , data);
  data.customer.address = data?.customer.addresses?.edges[0]?.node;
  delete  data.customer.addresses ;
  //data.customer.id = parseInt(data.customer.id.split("/").pop()); // extract ID from global ID
  console.log("the data for the customer " , data);
  console.log("the errors for the customer " , errors);
  return data?.customer;
}


export async function updateCustomer(customerAccessToken: string, customer: UpdateInput) {
  const query = `
     mutation customerUpdate($customerAccessToken: String!, $customer: CustomerUpdateInput!) {
  customerUpdate(customerAccessToken: $customerAccessToken, customer: $customer) {
    customer {
          id
          email
          firstName
          lastName
          phone
          acceptsMarketing
        }
        customerAccessToken {
            accessToken
            expiresAt
        }
        customerUserErrors {
          code
          field
          message
        }
      }
    }
  `;
  console.log("the variables " , customer , customerAccessToken);
  const { data, errors, extensions } = await client.request(query, { variables: { customerAccessToken, customer } });
  console.log(" the data for the customer " , data);
  console.log(" the errors  ", errors);
  return data;
}

export async function updateCustomerAddress(customerAccessToken: string, id: string , address : MailingAddressInput) {
  console.log("choose update " , customerAccessToken);
  const query = `
    mutation customerAddressUpdate(
        $customerAccessToken: String!
      $id: ID!
      $address: MailingAddressInput!
    ) {
      customerAddressUpdate(
      customerAccessToken: $customerAccessToken,
      id: $id,
      address: $address
      ) {
        customerAddress {
          id
          firstName
          lastName
          address1
          city
          province
          zip
          country
          phone
        }
        userErrors {
          field
          message
        }
      }
    }
  `;
  console.log("the variables " , address , customerAccessToken, id);
  const { data, errors, extensions } = await client.request(query, { variables: { customerAccessToken, id, address } });
  console.log(" the data for the customer " , data);
  console.log(" the errors  ", errors);
  return data;
}

export async function createCustomerAddress(customerAccessToken: string, address : MailingAddressInput) {
  console.log("choose create " , customerAccessToken);
  const query = `
    mutation customerAddressCreate($customerAccessToken: String!, $address: MailingAddressInput!) {
      customerAddressCreate(customerAccessToken: $customerAccessToken, address: $address) {
        customerAddress {
          id
          firstName
          lastName
          address1
          city
          province
          zip
          country
          phone
        }
        customerUserErrors {
          code
          field
          message
        }
      }
    }
  `;

  console.log("the variables " , address , customerAccessToken);
  const { data, errors, extensions } = await client.request(query, { variables: { customerAccessToken, address } });
  console.log(" the data for the customer " , data);
  console.log(" the errors  ", errors);
  return data;
}


export async function resetCustomerPassword(email: string) {
  const query = `
    mutation customerRecover($email: String!) {
      customerRecover(email: $email) {
        userErrors {
          field
          message
        }
      }
    }
  `;
  
  const { data, errors, extensions } = await client.request(query, { variables: { email } });
  console.log(" the data for password reset " , data);
  console.log(" the errors for password reset ", errors);
  return data;
}

export async function resetPasswordByUrlApi(newPassword: string, resetUrl: string) {
  const mutation = `
    mutation customerResetByUrl($resetUrl: URL!, $password: String!) {
      customerResetByUrl( resetUrl: $resetUrl, password: $password ) {
        customer {
          id
          email
          firstName
          lastName
          phone
          acceptsMarketing
        }
        customerAccessToken {
            accessToken
            expiresAt
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  console.log("the variables for reset password " , newPassword , resetUrl);
  const { data, errors, extensions } = await client.request(mutation, { variables: { resetUrl, password: newPassword } });
  console.log(" the data for password update " , data);
  console.log(" the errors for password update ", errors);
  return data;
}



export async function attachCustomerToCart(cartId: string, customerAccessToken: string) {
  const mutation = `
    mutation cartBuyerIdentityUpdate($cartId: ID!, $buyerIdentity: CartBuyerIdentityInput!) {
      cartBuyerIdentityUpdate(cartId: $cartId, buyerIdentity: $buyerIdentity) {
        cart { id checkoutUrl }
        userErrors { field message }
      }
    }
  `;

  const variables = {
    cartId,
    buyerIdentity: {
      customerAccessToken,
    },
  };

  const { data } = await client.request(mutation, {variables});
  return data.cartBuyerIdentityUpdate;
}