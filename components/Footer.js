import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Container, Logo } from '.'

const Footer = () => {
  function scrollToTop() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  return (
    <Container className={'pb-10'}>
      <div className="flex flex-col lg:flex-row mb-16">
        <div className="w-[300px] mb-10 lg:mb-0 mr-10 lg:mr-28">
          <Logo />
          <p className="mt-5 text-gray-700">El mejor espacio para construir, aprender y lanzar tu colección de NFTs.</p>
        </div>
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <p className="font-bold text-xl mb-5 text-gray-700">Deew</p>
            <div className="flex flex-col">
              <Link href="/">
                <a className="mb-4 opacity-50 text-gray-700">Acerca de nosotros</a>
              </Link>
              <Link href="/">
                <a className="mb-4 opacity-50 text-gray-700">FAQ</a>
              </Link>
              <Link href="/">
                <a className="mb-4 opacity-50 text-gray-700">Term & Condition</a>
              </Link>
            </div>
          </div>
          <div>
            <p className="font-bold text-xl mb-5 text-gray-700">Casos de éxito</p>
            <div className="flex flex-col">
              <Link href="/">
                <a className="mb-4 opacity-50 text-gray-700">NFTCracks</a>
              </Link>
              <Link href="/">
                <a className="mb-4 opacity-50 text-gray-700">BullsBlocks</a>
              </Link>
              <Link href="/">
                <a className="mb-4 opacity-50 text-gray-700">ExaLegend</a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className="animate-bounce  h-14 w-14 cursor-pointer shadow-lg shadow-[#1A46E4]/40 rounded-full bg-gradient-to-b font-bold from-[#5c64ff] to-[#1a7ce4] mx-auto flex justify-center items-center"
      >
        UP
      </div>
    </Container>
  )
}

export default Footer
