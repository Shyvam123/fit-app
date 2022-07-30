import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
import Jdata from "./Jdata"

export default function Jobs() {
  return (
    <>
    <Navbar/>
      <div className='my-5'>
        <h1 className='tab-center'> JOBS</h1>
      </div>
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row'>
              <div className='col-md-4 col-10 mx-auto'>
              {
        Jdata.map((val, ind) => {
          return <Card
          title={val.title}
          work={val.work}
          stipend={val.stipend}
          time={val.time}
          />
        })
      }
              </div>
            </div>
          </div>
        </div>
      </div>
     
      </>
  )
}
