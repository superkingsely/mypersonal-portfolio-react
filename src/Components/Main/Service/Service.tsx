import React from 'react'
import '../Service/Service.css'
import Card from './Card/Card'
import cardEmoji from './pics/glasses.png'
import emojiheart from './pics/heartemoji.png'
import angel from './pics/humble.png'
import Blur from '../Blur/Blur';
// import resume from './resume.pdf';
const Service = () => {
  return (
    <section className="service" id="services">
        <div className="section-content">
            <div className="left">

            <span className='h1-not-s'>My Awesome</span>
              <span className="h1-colored-s"> Services</span>
              <p className='lp'>As a versatile full stack developer and educator, I offer a comprehensive range of services tailored to meet diverse needs. On the frontend, I specialize in crafting engaging user interfaces using HTML, CSS, and modern frameworks like Bootstrap, Tailwind CSS, React, and Angular. On the backend, I excel in developing robust server-side applications using Node.js with Express and ASP.NET, ensuring seamless functionality and performance optimization. Additionally, I provide tutoring and mentorship services, leveraging my extensive knowledge from self-directed learning and practical experience to guide aspiring developers in mastering essential programming concepts and technologies.</p>
              <div>
                <a href='./resume.pdf' download='resume.pdf'>

              <button>Download cv</button>
                </a>
              </div>

            </div>
            <div className="right">
              <div className=" card-dev card-e">
              <Card
              cardEmoji={cardEmoji}
              txt1={'Frontend dev'}
              txt={'I specialize in crafting exceptional user interface that elevate client satisfaction and engagement.'}
              />
              </div>
              <div className="card-de  card-e">
              <Card
              cardEmoji={angel}
              txt1={'Backend dev'}
              txt={'I excel in architecting scalable database, optimizing server-side logic,and implementing secure APIs to support complex functionalities.'}
              />
              </div>
              <div className="card-ui card-e">
              <Card
              cardEmoji={emojiheart}
              txt1={'A Tutor'}
              txt={'As a Tutor i bring a passion for empowering students with prctical skills and theoretical knoweledge in programming and web development'}
              />
              </div>
              <Blur
              top={500}
              left={-200}
              bg={'blue'}
              />
            </div>
        </div>
    </section>
  )
}

export default Service