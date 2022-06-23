/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

function SinglePost({ para, name, image }) {
  return (
    <div>
    <img id="image-blog" src={image} />   
    <h1 id="title-blog">{name}</h1>
    <p id="content-blog">{para}</p>
    
    </div>
  )
}

export default SinglePost
