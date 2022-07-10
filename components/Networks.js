import React from 'react'
import { Container } from '.'
import Image from 'next/image'

const Networks = () => {
  return (
    <Container className={'grid grid-cols-3 items-center'}>
      <div className="flex items-center justify-center relative w-full h-[60px]">
        <Image layout="fill" objectFit="contain" objectPosition={'center'} src="/networks/solana.svg" alt="binance" />
      </div>
      <div className="flex items-center justify-center relative w-full h-[60px]">
        <Image
          layout="fill"
          objectFit="contain"
          objectPosition={'center'}
          src="/networks/ethereum.svg"
          alt="ethereum"
        />
      </div>
    </Container>
  )
}

export default Networks
