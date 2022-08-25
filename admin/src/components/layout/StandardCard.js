import React from 'react';
import '../../assets/css/StandardCard.css';
import { Link } from 'react-router-dom';

function StandardCard({ type, item }) {
    return (
        <Link to={type === "project" ? `/project/${item?._id}` : `/post/${item?._id}`} className='post-card-container' data-aos="slide-up"
        >
            <div className="post-card-content">
                <div className="post-card-category">
                    <h3>{item?.category}</h3>
                </div>
                <div className="post-card-name">
                    <h2>{item?.name}</h2>
                </div>
                <div className="post-card-text">
                    <h2>{item?.text}</h2>
                </div>
            </div>
            <div className="post-image-container">
                <img src={item?.imageFile} alt={item?.imageFile} />
            </div>
        </Link>
    )
}

export default StandardCard;