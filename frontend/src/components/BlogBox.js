import React from 'react'
import '../assets/css/BlogBox.css'

function BlogBox({titleB,imageUrlB,bodyB}) {
  return (
    <section className='blog-container'>
      
       <div className="blog-content">
          
          <div className="blog-title">
            <h3>{titleB}</h3>
          </div>
          <div className="blog-body">
            <p>{bodyB}</p>
          </div>

        </div>
        
        <div className="image-container">
            <img src={imageUrlB} alt=''/>


        </div>
        
       
        
        
         
    </section>
  )
}

export default BlogBox