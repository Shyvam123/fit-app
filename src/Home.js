import React from 'react'
import Navbar from './Navbar';
import "./Home.css";

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className='header'>
        <div className='header-content'>
          <div className='container'>
            <div className='header-text'>
            <h3>Build for everyone</h3>
            <h3>Code for everyone</h3>
            <h3>Design for everyone</h3>
            <h1>CODEWEEB</h1>
            <div className='header-button'>
              <a href='' className='btn btn-smart'>Sign up</a>
            </div>
            </div>
          </div>
        </div>
      </div>
    

     
    
      </>
  );
}
