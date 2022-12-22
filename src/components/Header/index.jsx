import React from 'react'

import './Header.css'

import logo from '../../assets/dumble.png'

const nav_links = [
  {
    path: "#",
    display: 'Home'
  },
  {
    path: "#",
    display: 'Schedule'
  },
  {
    path: "#",
    display: 'Classes'
  },
  {
    path: "#",
    display: 'Pricing'
  },
]

const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className="nav__wrapper">
          {/* Logo */}
          <div className="logo">
            <div className="logo__img">
              <img src={logo} alt="logo" />
            </div>
            <h2>Fitbody</h2>
          </div>

          {/* Navigation menu */}
          <div className="navigation">
            <ul className="menu">
              {
                nav_links.map(item => (
                  <li className='nav__item'><a href={item.path}>{item.display}</a></li>
                ))
              }
            </ul>
          </div>

          {/* Nav right */}
          <div className="nav__right">
            <button className='register__btn'>Register</button>
            <span className='mobile__menu'>
              <i class="bi bi-list"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header