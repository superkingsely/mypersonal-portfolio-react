import { ReactTyped } from "react-typed";
import "../Main/Main.css";
import me from "./my-pics.png";

const Main = ({
  handleslideright,
  handleslideleft,
  slidesref,
  count,
  write,
  skills
}: any) => {
  return (
    <main className="min-h-[100vh] ">
      {/* home */}
      <section id="home" className="min-h-[inherit] ">
        <div className="section-content home flex min-h-[inherit]">
          <div className="img w-1/2">
            <img className="me" src={me} alt="" />
          </div>
          <div className="intro w-1/2 flex flex-col justify-center">
            <span className="font-bold text-3xl">Hi There,I'm</span>
            <br />
            <span className="font-extrabold text-6xl name">
              Onwumelu Chijioke
            </span>
            <br />
            <div className="flex space-x-2">
              <span className="font-bold text-3xl">a</span>
              {/* <span 
                    ref={write}
                    className='font-bold text-3xl text-red-600'
                    >
                    
                </span> */}
              <span className="font-bold text-3xl text-red-600">
                <ReactTyped
                  strings={[
                    "Frontend-dev",
                    "Backend-dev",
                    "React-dev",
                    "Angular-dev",
                    "Web-api-dev",
                    "ASP.net-dev",
                  ]}
                  typeSpeed={50} // Typing speed in milliseconds
                  backSpeed={30} // Backspacing speed in milliseconds
                  loop
                />
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* about */}
      <section id="about">
        <div className="section-content">
          <h1>About me</h1>
          <p>
            I am a skilled and versatile software developer with a passion for
            crafting robust applications that deliver exceptional user
            experiences. With a solid foundation in JavaScript (including
            frameworks like React and Angular) and C#, coupled with extensive
            experience in ASP.NET and Web API development, I excel in building
            scalable solutions tailored to meet diverse business needs.
          </p>
          <p>
            Driven by a passion for continuous learning and innovation, I thrive
            in dynamic environments where collaboration and creativity are
            valued. My commitment to delivering high-quality solutions, paired
            with strong problem-solving skills, allows me to contribute
            effectively to projects from concept to deployment.
          </p>
        </div>
      </section>
      {/* resume */}
      <section id="resume|Cv">
        <div className="section-content">

        </div>
      </section>
      {/* projects */}
      <section id="projects">
        <div className="section-content">
          <div className="slider mx-auto max-w-[500px] h-[300px] border relative overflow-hidden mt-[10vh]">
            <span className="left z-10 " onClick={() => handleslideleft()}>
              v
            </span>
            <div
              className="slides flex w-[300%] h-[100%] absolute top-0  "
              ref={slidesref}
              style={{ left: `${count}%` }}
            >
              <div className="slide1 w-[500px] h-[100%] bg-red-600"></div>
              <div className="slide1 w-[500px] h-[100%] bg-green-600"></div>
              <div className="slide1 w-[500px] h-[100%] bg-blue-600"></div>
            </div>
            <span className="right" onClick={handleslideright}>
              v
            </span>
          </div>
        </div>
      </section>
      {/* skills */}
      <section id="skills">
        <div className="section-content ">
          {/* <div className="skill-wheel border w-1/2 mx-auto h-[50vh]">
                <div className="circle border w-[50vh]
                h-[50vh] mx-auto
                rounded-[50%] "></div>
                </div> */}
          <div className="skill-container ">
            {
            skills.map((obj: any) => {
              return (<div className="skill-icon " id={obj.skill} key={obj.id}></div>);
            })
            }
            {/* <div className="skill-icon css"></div>
            <div className="skill-icon javascript"></div> */}
            {/* Add more skill icons as needed */}
          </div>
        </div>
      </section>
      <section id="contact/hire">
        <div className="section-content">
          <h2 className="my-2">Contact me</h2>
          <form className="max-w-[500px] mx-auto">
            <div className="form-group">
              <label htmlFor="">Name:</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="">Message</label>
              <textarea
                name=""
                id=""
                className="form-control resize-none"
              ></textarea>
            </div>
            <div className="form-group">
              <button className="border rounded-lg form-control mt-3">
                Contact Me
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Main;


