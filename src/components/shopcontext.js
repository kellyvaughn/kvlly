import React from 'react'
import Client from 'shopify-buy'

const client = Client.buildClient({
  domain: 'kvlly.myshopify.com',
  storefrontAccessToken: 'f6d3f7fb7d36c0af521cbb8232183230',
})

export const defaultStoreContext = {
  client,
  adding: false,
  checkout: { lineItems: [] },
  products: [],
  shop: {},
  addVariantToCart: () => {},
  removeLineItem: () => {},
  updateLineItem: () => {},
}

const StoreContext = React.createContext(defaultStoreContext)

export default StoreContext
