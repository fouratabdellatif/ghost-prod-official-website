import React from 'react'
import '../assets/css/Cardteam.css'

function card({title,soustitle,imageUrl,body}) {
  return (
    <div className='card-container'>
      <div className="card-back"></div>
       <div className="card-content">
         

          
          <div className="card-title">
            <h3>{title}</h3>
          </div>
          <div className="card-stitle">
            <h>{soustitle}</h>
          </div>
          <div className="Card-body">
            <p>{body}</p>
          </div>
         


        </div>
        
        <div className="image-container">
            <img src={imageUrl} alt=''/>


        </div>
        
       
        
        
         
    </div>
  )
}

export default card