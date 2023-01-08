import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.PNG'
import HeaderSocial from './HeaderSocials'
import Typewriter from 'typewriter-effect'


const Header = () => {
  return (
    <header>
      
      <div className="container header__container">
        <h5>Hello! My name is</h5>
        <h1>Claire Brenton</h1>
        <h4 className="text-light">
      
        <Typewriter
        options={{
          strings: ["I'm a second year Computer Science student at UCLA.", "Scroll down for more."],
          autoStart: true,
          loop: true,
        }}
        />
        </h4>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
