import React from 'react'
import { Link } from 'react-router-dom';

function SinglePost({ para, name, image }) {
  return (
    <div>
    <img id="image-blog"src={image}></img>   
    <h1 id="title-blog">{name}</h1>
    <p id="content-blog">{para}</p>
    
    </div>
  )
}

export default SinglePost
