import { list_collection } from '@/data/faq'
import React, { useState } from 'react'
import { Button, Container, NFTItem } from '.'

const Collections = () => {
  const [listBtn, setListBtn] = useState([
    {
      name: 'Art',
      status: true,
      delay: 100,
    },
    {
      name: 'Sport',
      status: false,
      delay: 400,
    },
    {
      name: 'Photography',
      status: false,
      delay: 700,
    },
    {
      name: 'Pattern',
      status: false,
      delay: 1000,
    },
  ])

  const handleClickMenu = (name) => {
    const filterBtn = listBtn.map((item) => {
      return {
        ...item,
        status: item.name === name ? true : false,
      }
    })
    setListBtn(filterBtn)
  }

  return (
    <Container id="collections" className={'mb-44 scroll-mt-10'}>
      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl mb-2">Colleaction</h2>
        <p className="opacity-50 w-full sm:w-[400px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5">
        {listBtn.map((item, i) => (
          <Button
            key={i}
            onClick={() => handleClickMenu(item.name)}
            variant={item.status ? 'primary' : ''}
            className="w-full transition duration-1000 ease-in-out"
          >
            {item.name}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {list_collection.map((item, i) => (
          <NFTItem key={i} data={item} />
        ))}
      </div>
    </Container>
  )
}

export default Collections
