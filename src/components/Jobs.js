import React, {useState} from 'react'
import Navbar from './Navbar'
import Card from './Card'
import Jdata from "./Jdata"
import "./Job.css";


export default function Jobs() {
  const [jobData , setJobs] = useState(Jdata);

    const filterJob = (title) => {
        const updatedJobs = Jdata.filter((curlem) => {
            return curlem.title ===title;
        })

        setJobs(updatedJobs);
    }

 
  return (
    <>
    <Navbar/>
    <div className='Jobs-container  '>
        <div className='job-tab d-flex  justify-content-around'>
            <button className='btn btn-primary' onClick={() => filterJob("Web Development")}>web development</button>
            <button className='btn btn-primary' onClick={() => filterJob("graphic designer")}>graphic designer</button>
            <button className='btn btn-primary' onClick={() => filterJob("content writer")}>content writer</button>
            <button className='btn btn-primary' onClick={() => filterJob("digital marketing")}>digital marketing</button>
            <button className='btn btn-primary' onClick={() => setJobs(Jdata)}>All</button>
          
        </div>
      </div>
      
    
   
    <div className='container-fluid mb-5'>
      <div className='row'>
        <div className='col-10 mx-auto'>
          <div className='row gy-4'>
            
            {
        jobData.map((elem) => {
          const { imgsrc, title, work , jobid, stipend, time} = elem
          return <Card
          imgsrc={imgsrc}
          title={title}
          work={work}
          jobid ={jobid}
          stipend={stipend}
          time={time}
          />
        })
      }

            </div>
          </div>
        </div>
      </div>
      
      
      </>
  )
}
