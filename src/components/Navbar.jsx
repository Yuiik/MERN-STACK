import React from 'react'
import Avatar from '../assets/avatar.jpg'

export default function Navbar() {
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
    <nav
      className='navbar navbar-expand-lg navbar-dark bg-primary fixed-top'
      id='sideNav'
    >
      <a className='navbar-brand js-scroll-trigger' href='/'>
        <span className='d-block d-lg-none'>Aashish Mahajran</span>
        <span className='d-none d-lg-block'>
          <img
            className='img-fluid img-profile rounded-circle mx-auto mb-2'
            src={Avatar}
            alt='Aashish Maharjan'
          />
        </span>
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav'>
          {navItems.length &&
            navItems.map((navItem, index) => (
              <li className='nav-item' key={index}>
                <a className='nav-link js-scroll-trigger' href={navItem.href}>
                  {navItem.name}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  )
}
