import React, { useRef, useState } from 'react'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
// import { init } from 'ityped'

const App = () => {
  // navbar data
  const navbar=[
    {
      id:1,
      url:'#home',
      link:'home'
    },
    {
      id:2,
      url:'#about',
      link:'about'
    },
    {
      id:3,
      url:'#resume|Cv',
      link:'resume|Cv'
    },
    {
      id:4,
      url:'#projects',
      link:'projects'
    },
    {
      id:5,
      url:'#skills',
      link:'skills'
    },
    {
      id:6,
      url:'#contact/hire',
      link:'contact/hire'
    },
    {
      id:7,
      url:'#education',
      link:'education'
    },
    {
      id:8,
      url:'#testimonial/reference',
      link:'testimonial/reference'
    },
    
    {
      id:9,
      url:'#work-Experience',
      link:'work Experience'
    },
  ]
  //Project
  // const projects=[
  //   {
  //     id:1,
  //     img:''
  //   }
  // ]
  // skills
  const skills=[
    {
      id:1,
      skill:'html'
    },
    {
      id:2,
      skill:'css'
    },
    {
      id:3,
      skill:'javascript'
    },
    {
      id:4,
      skill:'c-sharp'
    },
    {
      id:5,
      skill:'net'
    },
  ]
  // 
  // variables and hooks
  const navref=useRef()
  const slidesref=useRef()
  const write=useRef()
  const [count,setCount]=useState(0)
  // useEffect(()=>{
  //   const myElement = write.current;
  //   if (myElement) {
  //     console.log('okay')
  //     init(myElement, { showCursor: false, strings: ['Frontend-dev', 'Backend-dev'] });
  //   }
  // },[])
  // functions
  const handlemenuclick=()=>{
    console.log(navref.current)
   let navr:any= navref.current
    navr.classList.add('clicked')
  }
  const handlemenucancel=()=>{
    let navr:any= navref.current
    navr.classList.remove('clicked')
  }
  // proj function
  const handleslideright=()=>{
    if(count===0 || count >-200){

      setCount(prev=>prev-100)
    }
    // let right:any=slidesref.current
    // console.log(right.style.left='-200%')
  }
  const handleslideleft=()=>{
    // console.log('left',slides)
    if(count<0){
      setCount(prev=>prev+100)
    }

  }
  return (
    <>
      <Header
      navbar={navbar}
      handlemenuclick={handlemenuclick}
      handlemenucancel={handlemenucancel}
      navref={navref}
      
      />
      <Main
      slidesref={slidesref}
      handleslideright={handleslideright}
      handleslideleft={handleslideleft}
      count={count}
      write={write}
      skills={skills}
      />
      <Footer/>
    </>
  )
}

export default App