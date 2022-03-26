import React from "react";
import "./NewsCard.css";
import image from "../images/news.jpg";

function Newscard() {
  return (
    <div className="card-container">
      <div className="card-content">
        <div className="card-title">
          <h3>Offre</h3>
        </div>

        <div className="Card-body">
          <p>Quel est le prix d’une vidéo en motion design?</p>
        </div>
      </div>

      <div className="image-container">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default Newscard;
