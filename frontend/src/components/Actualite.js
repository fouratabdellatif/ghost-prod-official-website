import React from 'react'
import '../assets/css/Actualite.css'

function Actualite({title,soustitle,imageUrl,body}) {
  return (
    <div className='card-container'>
      
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

export default Actualite  
