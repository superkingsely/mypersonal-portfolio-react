import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <section>
        <div className="section-content min-h-[100vh] flex flex-col justify-center items-center">
                <h1>PAGE NOT FOUND!!!...</h1> <br />
                <Link to={"/"}>Back to HomePage</Link>
        </div>
    </section>
  )
}

export default PageNotFound