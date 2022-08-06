import React from 'react'
import Navbar from './Navbar';
import "./About.css"

export default function About() {
  return (
    <>
      <Navbar />
      <div className='my-5'>
        <h1 className='text-center'> contact us</h1>
      </div>
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Full Name</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Full Name"/>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
          
        </div>
        
      </div>


    </>
  )
}
