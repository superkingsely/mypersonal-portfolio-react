import React from 'react'
import '../Contact/contact.css'
import Blur from '../Blur/Blur'
const Contanct = () => {
  return (
    <section className="contact" id="contact">
        <div className="section-content">
            {/* left */}
            <div className="left">
                <form >
                  <div className="form-group">
                    <input 
                    placeholder='Name:'
                    type="text"
                    required
                     />
                  </div>
                  <div className="form-group">
                    <input 
                    placeholder='Email:'
                    type="email"
                    required
                     />
                  </div>
                  <div className="form-group">
                    <textarea 
                    placeholder='Message:'
                    name="" 
                    id=""></textarea>
                  </div>
                  <button>Submit</button>
                </form>
            </div>
            {/* right */}
            <div className="right-c">
              <span className='h1-not-c'>
                Get in touch
              </span>
              <span className="h1-colored-c">
                Contact me
              </span>
              <div>
                <span>TEL:</span>
                <div>
                  <span>07081861810</span>
                  <span>08029696733</span>
                </div>
              </div>
            </div>
            {/* blur */}
            <Blur
            bg={'blue'}
            top={200}
            left={100}
            />
            <Blur
            bg={'blue'}
            top={200}
            left={700}
            />
        </div>
    </section>
  )
}

export default Contanct