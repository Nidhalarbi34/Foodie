import React from 'react'
import Banner from '../../components/Banner'
import Catogeries from './Catogeries'
import SpecialDishes from './SpecialDishes'
import Testimonials from './Testimonals'
import OurServices from './OurServices'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Catogeries/>
      <SpecialDishes/>
      <Testimonials/>
      <OurServices/>
    </div>
  )
}

export default Home