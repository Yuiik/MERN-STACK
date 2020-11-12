import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { motion } from 'framer-motion'
import Avatar from '../assets/avatar.jpg'

export default function Navigation() {
  const navItems = [
    {
      name: 'About',
      href: '#about',
    },
    {
      name: 'Skills',
      href: '#skills',
    },
    {
      name: 'Portfolio',
      href: '#portfolio',
    },
    {
      name: 'Codepen',
      href: '#codepen',
    },
    {
      name: 'Contact',
      href: '#contact',
    },
  ]

  return (
    <Navbar
      collapseOnSelect
      variant='dark'
      expand='lg'
      className='fixed-top'
      id='sideNav'
    >
      <Navbar.Brand onClick={() => (window.location = '/#about')}>
        <span className='d-block d-lg-none'>Aashish Mahajran</span>
        <span className='d-none d-lg-block'>
          <motion.img
            className='img-fluid img-profile rounded-circle mx-auto mb-2'
            src={Avatar}
            alt='Aashish Maharjan'
            drag
            dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
            dragElastic={0.1}
          />
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          {navItems.map((navItem, index) => (
            <Nav.Link href={navItem.href} key={index}>
              {navItem.name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
