import React from 'react'
import Navbar from './Navbar';
import Section from './Section';

import {Link} from "react-router-dom";

import "./Home.css";
import video from '../videos/video.webm'


export default function Home() {
  return (
    <>
      <Navbar />

      <div className='home'>
        <video src={video} autoPlay loop muted />
      </div>

      <div className='header'>

        <h1 className='main'>CODEWEEB</h1>
        <h3>Build for everyone</h3>
        <h3>Code for everyone</h3>
        <h3>Design for everyone</h3>

        <div className='header-button'>
          <Link to='/About' className='btns'>Sign up</Link>

        </div>
      </div>
      <Section />
     




    </>

  );
}
