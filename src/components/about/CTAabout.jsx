import React from 'react'
import Resume from '../../assets/Claire-Brenton-Resume.pdf'

const CTAabout = () => {
  return (
    <div className='CTAabout'>
        <a href={Resume} download className='btn btn-primary'>Learn more from my Resume</a>
    </div>
  )
}


export default CTAabout