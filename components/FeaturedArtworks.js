import { list_artwork } from '@/fake_data'
import React from 'react'
import { Container, NFTItem } from '.'

const FeaturedArtworks = () => {
  return (
    <Container className={'mb-44 scroll-mt-10'} id="feature">
      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl mb-2">Featured Artworks</h2>
        <p className="opacity-50 w-full sm:w-[400px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-flow-row-dense grid-flow-col-dense-dense sm:grid-cols-2  md:grid-cols-3 gap-4">
        {list_artwork.map((item, i) => (
          <NFTItem data={item} />
        ))}
      </div>
    </Container>
  )
}

export default FeaturedArtworks
