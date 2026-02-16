import {createStorefrontApiClient} from '@shopify/storefront-api-client';

export const client = createStorefrontApiClient({
  storeDomain: 'https://20pimu-kt.myshopify.com',
  apiVersion: '2025-10',
  publicAccessToken: "097b89c03328e52eff17eaa6465e81af",
});