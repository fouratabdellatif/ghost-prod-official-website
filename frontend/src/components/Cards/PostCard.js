import React from 'react';
import '../../assets/css/PostCard.css';
import { Link } from 'react-router-dom';

function PostCard({ item }) {
    return (
        <Link to={`/blog/${item._id}`} className='post-card-container' data-aos="slide-up"
        // style={{
        //     background: `url(${image})`,
        //     backgroundPosition: 'fixed',
        //     backgroundSize: 'cover'
        // }}
        >
            <div className="post-card-content">
                <div className="post-card-category">
                    <h3>{item.category}</h3>
                </div>
                <div className="post-card-description">
                    <p>{item.text}</p>
                </div>
            </div>
            <div className="post-image-container">
                <img src={item.imageFile} alt='' />
            </div>
        </Link>
    )
}

export default PostCard;