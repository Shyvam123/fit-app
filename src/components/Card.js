import React from 'react'
import "./card.css"
import {Link} from "react-router-dom";


export default function card( props) {
  const Linkto =  `/Jobsdetails/${props.jobid}`;
  return (
   <>
   <div className='col-md-4 col-10 mx-auto'>
   <div className="card" >
  <div className="card-body">
  <img src={props.imgsrc} className="card-img-top" alt="..."/>
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.work}</p>
    <p className="card-text">{props.jobid}</p>
    <p className="card-text">{props.stipend}</p>
    <p className="card-text">{props.time}</p>
    <Link to={Linkto} className="btn btn-primary" >More details</Link>
    {/* <button className='btn btn-primary' onClick={() => setJobs(Jdata)}>More Details</button> */}
   
  </div>
</div>
</div>
   </>
  )
}
