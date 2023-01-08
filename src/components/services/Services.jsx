import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>— What I've Done —</h5>
      <h2>Experience</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Sony Imageworks Intern</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Performed analysis on SkyLake CPU performance under compute-intensive ray tracing operations for use in Sony Datacenters</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Compared environmental impact of two data center geographical locations to calculate carbon footprint</p>
            </li>
            <small className='text-light'>June 2022 - August 2022</small>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>The Society of Women Engineers WebDev Committee</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Making frontend modifications to the club's website using ReactJS, JavaScript, and HTML to design user interface</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Currently implementing a matching algorithm for SWE mentorship program, matching three student mentees to one mentor using Python</p>
            </li>
            <small className='text-light'>September 2021 - Current</small>
              
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Omesi Health</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Contributing to the clinician-patient communication startup that captures digital biomarkers of mental health from patient mobile devices </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Using React Native to design mobile app interface to deliver insights to clinicians on patient mental health </p>
            </li>
            
            <small className='text-light'>December 2022 - Current</small>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Girls Who Code</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Pioneered six-week initiative at my alma mater highschool to expose highschool girls to computer science</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Taught a 6 week Python course in which girls concluded with a final project couples with a guest speaker series</p>
            </li>
            <small className='text-light'>December 2022 - Current</small>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services