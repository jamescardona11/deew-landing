import React from 'react'
import { Container } from '.'
import Image from 'next/image'

const Sponsor = () => {
  return (
    <Container className={'grid grid-cols-3 gap-5 mb-32 items-center'}>
      <div className="flex items-center justify-center relative w-full h-[60px]">
        <Image layout="fill" objectFit="contain" objectPosition={'center'} src="/sponsor/binance.svg" alt="binance" />
      </div>
      <div className="flex items-center justify-center relative w-full h-[60px]">
        <Image layout="fill" objectFit="contain" objectPosition={'center'} src="/sponsor/ethereum.svg" alt="ethereum" />
      </div>
      <div className="flex items-center justify-center relative w-full h-[60px]">
        <Image
          layout="fill"
          objectFit="contain"
          objectPosition={'center'}
          src="/sponsor/blockchainio.svg"
          alt="blockchainio"
        />
      </div>
    </Container>
  )
}

export default Sponsor
