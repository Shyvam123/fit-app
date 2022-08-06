import React from 'react'

export default function Cardd(props) {
    
  return (
    <div>
      <div className="card mb-3">
  <img src={props.imgsrc} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.jobid}</p>
    <p className="card-text">{props.work}</p>
    <p className="card-text"><small className="text-muted">{props.skills}</small></p>
  </div>
</div>
    </div>
  )
}
