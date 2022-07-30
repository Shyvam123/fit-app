import React from 'react'
import Navbar from './Navbar';
import "./About.css"

export default function About() {
  return (
    <>
      <Navbar/>
      <div className='about'>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              
           
          <h3>About us</h3>
          <h1>WELCOME TP CODEWEEB</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
             Ut enim ad minim veniam, quis nostrud exercitation</p>
             <div className='abotibtn'>
              <a href='' className='btn btn-smart'>
                READ MORE
              </a>
             </div>
             </div>
             <div className='col-6'>
              <div className='about-img'>
              <img src='/img/web.jpg' alt='web'/>
             </div>
          </div>
          </div>
        </div>
      </div>
   
    </>
  )
}
