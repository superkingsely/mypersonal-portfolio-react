import React from 'react'
import './about.css'
import Blur from '../Blur/Blur'
const About = () => {
  return (
    <section className='about' id='about'>
        <div className="section-content ">
                <span>About me</span>
                <div className="about-me">
                    <p>Hello, I'm Onwumelu Chijioke, a passionate full stack developer specializing in both frontend and backend technologies. My journey into programming was ignited by a fascination with classes, objects, methods, and functions—tools I see as powerful instruments to tackle real-life challenges creatively. As a freelancer, I bring a wealth of experience from diverse educational sources including Coursera, YouTube tutorials, and extensive documentation from tech giants. This self-directed learning has equipped me with a robust skill set across various technologies.</p>
<p>

On the frontend, I excel in crafting responsive and intuitive user interfaces using HTML & CSS, Bootstrap, Tailwind CSS, and advanced frameworks like React and Angular. On the backend, I leverage the flexibility of Node.js with Express for scalable server-side applications, and I'm proficient in ASP.NET for both MVC and Web API frameworks. My database expertise spans MongoDB, MySQL, PostgreSQL, and cloud-based solutions such as Azure and Firebase, ensuring efficient data management and integration.
</p>
<p>
Driven by a relentless curiosity and a commitment to excellence, I am eager to collaborate on impactful projects that push technological boundaries and deliver tangible results. While I currently operate independently, I look forward to joining a dynamic team where I can contribute my skills and enthusiasm for innovative software development.
</p>
                </div>
                <Blur
                bg={''}
                top={300}
                />
        </div>
    </section>
  )
}

export default About