import {
  AboutUs,
  Button,
  Collections,
  Container,
  FAQ,
  FeaturedArtworks,
  Footer,
  Hero,
  Stats,
  Pricing,
  Features,
  Navbar,
  Networks,
  TopCreator,
} from '@/components'
import { Contacts } from '@/components/Contacts'

import React from 'react'

const Home = () => {
  return (
    <>
      <div className="h-full  text-white overflow-hidden" id="top">
        <div className="banner pb-20">
          <Navbar />
          <Hero />
          <Networks />
        </div>
        <Features />
        <Stats />
        <Pricing />
        <AboutUs />
        <FAQ />

        <Contacts />
        <Footer />
      </div>
      <div className="banner"></div>
    </>
  )
}

export default Home
