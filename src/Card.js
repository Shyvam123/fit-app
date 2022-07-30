import React from 'react'

export default function card(props) {
  return (
   <>
   <div class="card" >
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.work}</p>
    <p class="card-text">{props.stipend}</p>
    <p class="card-text">{props.time}</p>
   
  </div>
</div>
   </>
  )
}
