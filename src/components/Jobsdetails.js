import React from 'react'
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { webDev } from './Jobdata';
import Cardd from './Cardd';
import "./Jobdetail.css";

export default function Jobsdetails(params) {

  // console.log("params", params);

  const parameter = useParams();
  console.log(parameter);

  const Id = Number(parameter.id);

  const func = () => {
    let jobRender = webDev.filter((e) => e.jobid === Id);
    // console.log("jobRender",jobRender);

      return <Cardd
          imgsrc={jobRender[0].imgsrc}
          title={jobRender[0].title}
          work={jobRender[0].work}
          jobid={jobRender[0].jobid}
          skills={jobRender[0].skills}
          time={jobRender[0].time}
        />
  }

  return (
    <div>
      <Navbar />
      <div className='container-fluid-3  mb-5'>
        <div className='row second my-5'>
          <div className='col-10 mx-auto'>
            <div className='row gy-4'>
              <div className=''>{func()}</div>


            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
