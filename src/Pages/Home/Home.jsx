import React from 'react'
import Hero from './Hero'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Footer from '../../Component/Footer'
import Testimonials from './Testimonials'
import Section4 from './Section4'
import Faq from './Faq'
const Home = () => {
  return (
    <div>
      <Hero/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Testimonials/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default Home