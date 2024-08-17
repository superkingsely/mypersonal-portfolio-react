import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  const [list,setList]=useState<Array<any>>([])
// useEffect(()=>{
//   const getList=async()=>{
//     try{
//       // to solve url scheme "localhost"
//       const res=await fetch('http://localhost:5001/api/list')
//       console.log(res)
//       const data=await res.json()
//       setList(data.list)
//     }catch(e:any){
//       console.log(e.message)
//     }
//   }
//   getList()
// },[])
  return (
    <section>
        <div className="section-content min-h-[100vh] flex flex-col justify-center items-center">
                <h1>PAGE NOT FOUND!!!...</h1> <br />
                  <div>
                    {
                      list.map((obj:any)=>{
                        return(
                          <h1 key={obj}>{obj}</h1>
                        )
                      })
                    }
                  </div>
                <Link to={"/"}>Back to HomePage</Link>
        </div>
    </section>
  )
}

export default PageNotFound