import React from 'react'
import { Button, Container } from '.'
import Image from 'next/image'

const Hero = () => {
  return (
    <Container className={'flex flex-col sm:flex-row mt-20 mb-32'}>
      <div className="w-full sm:w-[50%] pr-0 sm:pr-10 lg:pr-20 mt-[-20px] sm:mt-5 lg:mt-10">
        <h1 className="text-3xl lg:text-6xl font-bold mb-5">Create, Sell & Collect Your Own Creative NFT</h1>
        <p className="mb-8 opacity-50">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.
        </p>
      </div>
      <div className="flex-1 mt-14 sm:mt-0">
        <div className="relative w-full h-[400px] lg:h-[500px]">
          <Image layout="fill" objectFit="contain" objectPosition={'center'} src="/hero/heroimage.png" alt="hero" />
        </div>
      </div>
    </Container>
  )
}

export default Hero
