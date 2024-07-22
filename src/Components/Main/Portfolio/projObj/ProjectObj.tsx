import React, { useState } from 'react'
import './projectobj.css'
import close from './pics/close-line.png'
const ProjectObj = ({img,src,view,projName,packages,isdetail,details,language,projectType,framework,status}:any) => {
    const [Ishover,setIshover]=useState(false)
    const [ismodal,setIsmodal]=useState(false)
    // func
    const handledetailclickedopen=()=>{
        setIsmodal(true)
    }
    const handledetailclickedclose=()=>{
        setIsmodal(false)
    }
  return (
    <div className="project-img"
      onMouseEnter={()=>setIshover(true)}
      onMouseLeave={()=>setIshover(false)}
      >
      <img src={img} alt="" />
      {/* hover div */}
      <div className={Ishover?'projObj':''} 
        >
        <div className="po">

            {/* header */}
          <div className="projname header">
            <span>{projName}</span>
          </div>
          {/* middle */}
          <div className='middle'>
          <div className='box box1'>
              <div>
                <span>Language:</span><span>{language}</span>
              </div>
              <div>
                <span>Project-type:</span><span>{projectType}</span>
              </div>
              <div>
                <span>Frame-work:</span><span>{framework}</span>
              </div>
              <div>
                <span>Status:</span><span 
                style={status?{color:'green'}:{color:'red'}}
                >{status?'Completed!!!':"Ongoing..."}</span>
              </div>
          </div>
          <div className='box box2'>
            <span>Packages|Tools|Dependency</span>
            <p>{packages}</p>
          </div>
          </div>

          {/* lower third */}
          <div className="btns-pro">
              <a href={view}>

            <button>View</button>
              </a>
              <a href={src}>

            <button>Src</button>
              </a>
              <button 
              style={isdetail?{display:'block'}:{display:'none'}}
              onClick={handledetailclickedopen}
              >Details</button>

          </div>
        {/* modal div */}
        <div className="modal-proj"
        style={isdetail && ismodal?{display:'block'}:{display:'none'}}
        onClick={handledetailclickedclose}
        >
          <div className="skin">
            <div>
            <i></i>
          <span>Details</span>
          <img onClick={handledetailclickedclose} src={close} alt="" />
            </div>
          <p>{details}</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectObj