import React from 'react'
import './portfolio.css'
import IMG2 from '../../assets/omesi.png'
import IMG1 from '../../assets/swe-logo-3.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Society of Women Engineers Website',
    github: 'https://www.sweucla.com/',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Omesi Health',
    github: 'https://github.com/clairebrenton',
    demo: 'https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Nanofabricated Supercapacitor Design',
    github: 'https://docs.google.com/document/d/1jaOdHqLlM9ieJ9JyfisnO-1HTLRQZTDZHmLfnYh8U3I/edit',
    demo: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 4,
    image: IMG4,
    title: 'CS33',
    github: 'https://github.com/clairebrenton/CS33-Computer-Organization',
    demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
  },
  {
    id: 5,
    image: IMG5,
    title: 'CS32',
    github: 'https://github.com/clairebrenton/CS32-Data-Structures-Algorithms',
    demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 6,
    image: IMG6,
    title: 'CS31',
    github: 'https://github.com/clairebrenton/CS31-Computer-Science-Principles',
    demo: 'https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>— My Recent Work —</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>See Here</a>
                
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio