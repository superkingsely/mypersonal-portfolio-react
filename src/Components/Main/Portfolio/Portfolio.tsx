import '../Portfolio/portfolio.css'

import {Pagination,Navigation, Autoplay, EffectFade, EffectCube} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/effect-cube'

import { Swiper, SwiperSlide } from 'swiper/react'
import ProjectObj from './projObj/ProjectObj'
import myportfolio from '../Portfolio/pics/firstproj.png'
import hakaton from './pics/hackathon.jpg'
import Blur from '../Blur/Blur'
// comp
const Portfolio = () => {
  // state
  const projects=[
    {
      id:1,
      img:myportfolio,
      autoplay:'',
      name:'My portfolio website',
      language:'Typescript',
      projectType:'Frontend',
      framework:'React',
      status:true,
      packages:'swiper|tailwind|framer-motion|emailjs|react-typed',
      src:'https://github.com/superkingsely/mypersonal-portfolio-react/tree/reactPortfolio',
      view:'https://chijioke-portfolio1.netlify.app/',
      // modal
      isdetails:true,
      details:'okay noting much just check it out in the view and if u want the source code u can also check that out by clickin the source. src code link avaliable on github.com/superkingsely',
    },
    {
      id:2,
      img:hakaton,
      autoplay:'',
      name:'hackaton',
      language:'',
      projectType:'',
      framework:'React',
      status:false,
      packages:'swiper|tailwind|framer-motion|emailjs|react-typed',
      src:'',
      view:'',
      // modal
      isdetails:false,
      details:'',
    }
  ]
  return (
    <section className="portfolio" id="portfolio">
        <div className="section-content">

          <div className="span">
          <span className='h1-not'>Recent Projects</span>
          <span className="h1-colored"> Portfolio</span>
          </div>

           <Swiper
            modules={[Pagination,Navigation,Autoplay,EffectFade,EffectCube]}
            navigation
            effect='fade'
            slidesPerView={1}
            pagination={{clickable:false}}
            
           >
              {
                projects.map((obj:any)=>{
                  return(
                    
                <SwiperSlide key={obj.id}>
                <ProjectObj
                img={obj.img}
                projName={obj.name}
                isdetail={obj.isdetails}
                details={obj.details}
                language={obj.language}
                projectType={obj.projectType}
                framework={obj.framework}
                packages={obj.packages}
                status={obj.status}
                src={obj.src}
                view={obj.view}
                />
              </SwiperSlide>
                  )
                })
              }
           </Swiper>
           <Blur
            top={400}
            
           />
           <Blur
            top={40}
            right={0}
            bg={'blue'}
           />
        </div>
    </section>
  )
}

export default Portfolio