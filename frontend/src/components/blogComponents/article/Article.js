import React from "react";
import "./Article.css";
import image from "../images/article.jpg";

function Article() {
  return (
    <div class="articleContainer">
      <img
        className="articleImg"
        src={image}
        alt="Cinque Terre"
        width="1000"
        height="300"
      />
      <div className="topleft">
        <h1>Picking the right Shooting Gear!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra
          massa massa ultricies mi quis hendrerit dolor magna eget. Tempor
          commodo ullamcorper a lacus vestibulum sed arcu. Nibh tortor id
          aliquet lectus proin nibh nisl condimentum. Fames ac turpis egestas
          integer eget aliquet nibh praesent tristique. Accumsan lacus vel
          facilisis volutpat est. Pellentesque sit amet porttitor eget. Velit
          euismod in pellentesque massa placerat duis ultricies lacus.
        </p>
        <a href="#">Read more ...</a>
      </div>
    </div>
  );
}
export default Article;
