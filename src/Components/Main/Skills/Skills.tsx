import React from 'react'
import './skills.css'
import Accordions from './Accordions/Accordions'
import Css from "../../../img/css-3.svg";
import Js from "../../../img/javascript-1.svg";
import Html from "../../../img/html-1.svg";
import react from "../../../img/react-1.svg";
import Csharp from "../../../img/c--4.svg";
import Net from "../../../img/netframework-1.svg";
import Angular from "../../../img/angular-icon-1.svg";
import Git from "../../../img/github-icon-1.svg";
import Bootstrap from "../../../img/bootstrap-5-1.svg";
import tailwind from "../../../img/tailwind-css-svgrepo-com.svg";
import Sql from "../../../img/microsoft-sql-server-1.svg";
import nodejs from "../../../img/nodejs-1.svg";

const Skills = () => {

    const skills=[
        {
            id:1,
            title:'Frontend Skills',
            list:['HTML','CSS','JAVASCRIPT','TYPESCRIPT','C#',"BOOTSTRAP",'TAILWIND']
        },
        {
            id:2,
            title:'Frontend Frame-work',
            list:['REACT','ANGULAR','ASP.NET(MVC)','NEXTjs']
        },
        {
            id:3,
            title:'Backend Skills',
            list:['JAVASCRIPT','TYPESCRIPT','C#']
        },
        {
            id:4,
            title:'Backend Frame-work',
            list:['NODEjs and EXPRESS','ASP.NET(web-api)']
        },
        {
            id:5,
            title:'Deployments',
            list:['VERCEL','NETLIFY','FIREBASE','AZURE','HEROKU','GITHUBPAGE']
        },
        {
            id:6,
            title:'Database',
            list:['MSQL','SQL','MONGOdb','POSTGRESS','FIREBASE']
        },
        {
            id:7,
            title:'Content Management System (CMS)',
            list:['Shopify','WordPress']
        },
        {
            id:8,
            title:'Others',
            list:['VSCODE','VISUAL_STUDIO','GIT and GITHUB']
        },
    ]
    const WOS=[
        {
            id:1,
            class:'proj-1',
            img:Css
        },
        {
            id:2,
            class:'proj-2',
            img:Js
        },
        {
            id:3,
            class:'proj-3',
            img:Html
        },
        {
            id:4,
            class:'proj-4',
            img:react
        },
        {
            id:5,
            class:'proj-5',
            img:Csharp
        },
        {
            id:6,
            class:'proj-6',
            img:Net
        },
        {
            id:7,
            class:'proj-7',
            img:Angular
        },
        {
            id:8,
            class:'proj-8',
            img:Git
        },
        {
            id:9,
            class:'proj-9',
            img:Bootstrap
        },
        {
            id:10,
            class:'proj-10',
            img:Sql
        },
        {
            id:11,
            class:'proj-11',
            img:tailwind
        },
        {
            id:12,
            class:'proj-12',
            img:nodejs
        },
    ]
  return (
    <section className='skills' id='skills'>
        <div className="section-content">
            <div className="left-sk ">
                <span>My Skills</span>
               <div>

               <Accordions
               skills={skills}
               />
               </div>
            </div>
            <div className="right-sk ">
                <span>Skill Wheel</span>
               <div className="wheel-of-circle">
                    {
                        WOS.map((obj:any)=>{
                            return(
                                <div 
                                key={obj.id}
                                className= {`innercircle  ${obj.class}`}>
                                <img src={obj.img} alt="" />
                                </div>
                            )
                        })
                    }
               </div>
            </div>
        </div>
    </section>
  )
}

export default Skills