import React from 'react'
import {Footer,Cart,FooterBanner,HeroBanner,Layout,Navbar,Product} from '../components'

const Home=() => {
  return (
    <>
      <HeroBanner />
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Cases of many variations</p>
      </div>
      <div className='products-container'>
        {['product 1','product2'].map((product) => product)}
      </div>
      <Footer />

    </>
  )
}

export default Home