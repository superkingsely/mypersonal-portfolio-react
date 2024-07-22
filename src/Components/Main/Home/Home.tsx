import React from 'react'
import '../Home/home.css'
import me from './pics/BackgroundEraser_20240721_203550816.png'
import bg1 from './pics/Vector1.png'
import bg2 from './pics/Vector2.png'
import emoji from './pics/glassesimoji.png'
import Floating from './Floating/Floating'
import thumbs from './pics/thumbup.png'
import crown from './pics/crown.png'
import git from './pics/github.png'
import linkedin from './pics/linkedin.png'
import Blur from '../Blur/Blur';
import {ReactTyped} from 'react-typed'

const Home = () => {
  return (
    <section className="home" id="home">
        <div className="section-content">
            {/* left */}
            <div className="left">
                <div className="bg1">

                <img src={bg1} alt="" className="" />
                </div>
                <div className="bg2">

                <img src={bg2} alt="" className="" /> 
                </div>
                <div className="emoji">

                <img src={emoji} alt="" className="" />
                </div>
                <div className="me">

                <img src={me} alt="" className="" />
                </div>
                <div className="float float1">
                    <Floating
                      img={thumbs}
                      txt1={'Frontend'}
                      txt2={'Development'}
                    />
                </div>
                <div className="float float2">
                    <Floating
                    img={crown}
                    txt1={'Backend'}
                    txt2={'Development'}

                    />
                </div>
                {/* blurs */}
                <div className="blur blur1"></div>
                <div className="blur blur2"></div>
            </div>
            {/* right */}
            <div className="right">
              <span className='h1-not'>Hi! I AM</span>
              <span className="h1-colored">Onwumelu <br /> Chijioke</span>
              <div className='write'>
              <span>I'm A ;</span>
              <ReactTyped
              strings={['Frontend Dev','Backend Dev','ASP.NET Dev','Nodejs Developer','React Developer','Angular Developer']}
              typeSpeed={40}
              backSpeed={100}
              loop={true}
              />
              </div>
              <div>
                <a href="#contact">
              <button>Hire me</button>
                </a>
              </div>
              <div className="icons">
                <div className="git">
                  <a href="github.com/superkingsely">
                  <img src={git} alt="" />
                  </a>
                </div>
                <div className="linkedin">
                  <a href="www.linkedin.com/in/onwumelu-chijioke">
                  <img src={linkedin} alt="" />
                  </a>
                </div>
              </div>
              <Blur
              bg={'blue'}
              top={300}
              />
            </div>
            <Blur
            top={700}
            right={0}
            bg={''}
            />
        </div>
    </section>
  )
}

export default Home