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
        <Container>
          <div
            className={
              'bg-gradient-to-b from-[#B75CFF] to-[#671AE4] rounded-xl py-20 px-10 flex items-center justify-center shadow-lg flex-col mb-44'
            }
          >
            <h2 className="font-bold text-2xl sm:text-4xl lg:text-5xl mb-5 w-full md:w-2/5 leading-snug text-center">
              Get ready to collect our NFT
            </h2>
          </div>
        </Container>
        <Footer />
      </div>
      <div className="banner"></div>
    </>
  )
}

export default Home
