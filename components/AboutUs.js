import React from 'react'
import { Button, Container } from '.'

import Image from 'next/image'
const AboutUs = () => {
  return (
    <Container className={'mb-44 scroll-mt-10'} id="about">
      <div className="text-center mb-8 mt-20">
        <h2 className="font-bold text-3xl mb-2 text-gray-900">Acerca de nosotros</h2>
        <p className="opacity-50 w-full  sm:w-[400px] mx-auto text-gray-700">
          Somos apasionados por el mundo cripto y los NFTs
        </p>
      </div>
      <div className="flex items-center">
        <div className="w-[44%] hidden sm:block">
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
            <Image layout="fill" objectFit="cover" objectPosition={'center'} src="/aboutus.png" alt="about us" />
          </div>
        </div>
        <div className="flex-1 ml-0 sm:ml-10 lg:ml-20">
          <h3 className="font-bold text-2xl mb-3 text-gray-700">Create with us</h3>
          <p className="mb-3 opacity-50 text-gray-700">
            Deew es un launcher de NFTs, nuestro trabajo se caracteriza por ser rápido y personalizado. Nosotros somos
            tu soporte para la creación de colecciones, smart-contracts y más. No te preocupes si no tienes un equipo
            blockchain.
          </p>
          <p className="mb-3 opacity-50 text-gray-700">
            Nuestro equipo está en Colombia, y contamos con expertos en desarrollo de comunidades, expertos cripto y
            expertos en NFTs.
          </p>
          <p className="hidden lg:block mb-3 opacity-50 text-gray-700"></p>
        </div>
      </div>
    </Container>
  )
}

export default AboutUs
