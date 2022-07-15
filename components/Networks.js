import React from 'react'
import { Container } from '.'
import Image from 'next/image'

const Networks = () => {
  return (
    <Container className={'grid grid-cols-3 items-center'}>
      <div className="flex items-center justify-center relative w-full h-[60px]">
        <Image
          width={160}
          height={90}
          objectFit="contain"
          objectPosition={'center'}
          src="/networks/solana.svg"
          alt="solana"
        />
      </div>
      <div className="flex items-center justify-center relative w-full h-[60px]">
        <Image
          width={160}
          height={90}
          objectFit="contain"
          objectPosition={'center'}
          src="/networks/ethereum.svg"
          alt="ethereum"
        />
      </div>
      <div className="flex items-center justify-center relative w-full h-[60px]">
        <Image
          width={120}
          height={90}
          objectFit="contain"
          objectPosition={'center'}
          src="/networks/matic.svg"
          alt="matic"
        />
      </div>
    </Container>
  )
}

export default Networks
