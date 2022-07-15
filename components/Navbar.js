import useWindowSize from '@/hooks/useWindowSize;'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { Button, Container, Logo } from '.'
import MobileNav from './MobileNav'
import headerNavLinks from '@/data/headerNavLinks'

const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const { width } = useWindowSize()
  const toggleMenu = () => setMenu(!menu)
  const closeMenu = () => setMenu(false)

  return (
    <div className="py-4 relative">
      <Container className={'flex justify-between items-center'}>
        <Logo />
        <div className="hidden sm:block">
          <ContentSidebar toggleMenu={toggleMenu} />
        </div>
        {menu && width < 680 && <MobileNav />}
      </Container>
    </div>
  )
}

const ContentSidebar = ({ toggleMenu }) => {
  return (
    <div className="items-center flex-col sm:flex-row flex">
      {headerNavLinks.map((link) => (
        <Link key={link.title} href={link.href}>
          <a onClick={toggleMenu} className="mb-3 sm:mb-0 mt-4 sm:mt-0 ml-0 sm:ml-5">
            {link.title}
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Navbar
