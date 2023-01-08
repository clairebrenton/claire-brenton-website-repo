import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'
import CTAabout from './CTAabout'
import {HiOutlineBookOpen} from 'react-icons/hi'
import {HiOutlineDesktopComputer} from 'react-icons/hi'
import {HiOutlineLightBulb} from 'react-icons/hi'
import Resume from '../../assets/Claire-Brenton-Resume.pdf'


const About = () => {
  return (
    <section id='about'>
      <h5>— Get To Know —</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <HiOutlineDesktopComputer className='about__icon'/>
              <h5>Skills</h5>
              <small>Proficient in C/C++, Python, Javascript, ReactJS, Express, CSS, HTML, Node, Shell, and Linux.</small>
            </article>

            <article className='about__card'>
              <HiOutlineBookOpen className='about__icon'/>
              <h5>Relevent Coursework</h5>
              <small>Algorithms and Complexity, Computer Organization, Operating Systems Principles, Logic Design of Digital Systems, Software Construction.</small>
            
            </article>

            <article className='about__card'>
              <HiOutlineLightBulb className='about__icon'/>
              <h5>Interests</h5>
              <small>I'm passionate about software development and the overlap between code and dynamic systems, and have a hobby of full-stack web development.</small>
            </article>
          </div>
          
        </div>
      </div>
      <div className="about__paragraph">
        <p>
          Hey everyone! I'm Claire. I'm a sophomore at UCLA majoring in Computer Science.  I'm always looking for unique and diverse opportunities in software engineering. I have a passion for creating and learning and I'm particularly interested in the AI Revolution. I also like designing websites like this one in my free time! Right now I'm focused on building acccessible and human centered products.
          </p>
          </div>

         <CTAabout />
    </section>
  )
}

export default About