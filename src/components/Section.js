import React from 'react'
import "./Section.css";
import web from "../img/web.jpg";
import js from "../img/js.jpg";


export default function Section() {
  return (
    <>
      <section id='header' className='sec'>
        <div className='container-fluid nav_bg'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row'>
              <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1'>
                <h1 className='head'>
                  Grow your buisness with <strong>CODEWEEB</strong>
                </h1>
                <h2 className='my-5'>
we are the team of talented developer making website.
                </h2>
                <div className='mt-3'>
                  <a href='/' >get started</a>
                </div>
              </div>
              <div className='col-lg-6 order-1 order-lg-2 header-img'>
                <img src={web} className='img' alt='imge'></img>
              </div>
            </div>
            </div>
          </div>
        </div>
        </section>
        <section id='header' className='sec'>
        <div className='container-fluid nav_bg'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row'>
             
              <div className='col-lg-6 order-1 order-lg-1 header-img'>
                <img src={js} className='img' alt='imge'></img>
              </div>
            
            <div className='col-md-6 pt-5 pt-lg-0  order-2 order-lg-2'>
                <h1 className='head'>
                  Grow your buisness with <strong>CODEWEEB</strong>
                </h1>
                <h2 className='my-5 ' >
we are the team of talented developer making website.
                </h2>
                <div className='mt-3'>
                  <a href='/' >get started</a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
      
    </>
  )
}
