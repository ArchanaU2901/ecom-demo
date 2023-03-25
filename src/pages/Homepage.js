import Checkout from '@/components/Checkout'
import Nav from '@/components/Nav'
import Product from '@/components/Product'
import { Menu } from '@mui/material'
import React from 'react'

import Announce from '../components/Announce'
import card from './card' 
const Homepage = () => {
  return (
    <div>
      <Announce />
      <Nav/>
      {/* <ResponsiveAppBar/> */}
      <Product />
      {/* <Cart /> */}
    </div>
  )
}

export default Homepage