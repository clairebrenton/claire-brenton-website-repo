import React from 'react'
import './footer.css'
import{BsLinkedin} from 'react-icons/bs'
import{BsGithub} from 'react-icons/bs'
import{HiOutlineMail} from 'react-icons/hi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Claire Brenton</a>
      
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/in/clairebrenton" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/clairebrenton" target="_blank"><BsGithub/></a>
       
      </div>
    </footer>
  )
}

export default Footer