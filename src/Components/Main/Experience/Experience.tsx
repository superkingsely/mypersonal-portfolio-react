import React from 'react'
import '../Experience/experience.css'
import Ring from './Ring/Ring'
import Blur from '../Blur/Blur'
const Experience = () => {
  return (
    <section className="experience" id="experience">
        <div className="section-content">
            <div className="rings">
              <Ring
              nos={+4}
              txt={'years of Experience'}
              />
              <Ring
              nos={+4}
              txt={'years of Experience'}
              />
              <Ring
              nos={+4}
              txt={'years of Experience'}
              />
            <Blur
            top={400}
            left={400}
            bg={'yellow'}
            />
            </div>
        </div>
    </section>
  )
}

export default Experience