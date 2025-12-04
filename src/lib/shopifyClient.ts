import {createStorefrontApiClient} from '@shopify/storefront-api-client';

export const client = createStorefrontApiClient({
  storeDomain: 'https://chacha-pets.myshopify.com',
  apiVersion: '2025-10',
  publicAccessToken: "85d3747043430172ffef5b8fa786b3b3",
});