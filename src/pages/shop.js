import React, { useState, useEffect, useContext } from 'react'
import ShopContext from '../components/shopcontext'
import ProductListing from '../components/productlisting'
import { graphql } from 'gatsby'

import SEO from '../components/seo'

import '../components/shop.scss'
import { render } from 'node-sass'

const Shop = props => {
  render(
    <>
      <h1>Hello!</h1>
    </>
  )
}

export default Shop
