import React from "react";
import "./style.css";

function ImageThumbnail(props) {
  
  return (
    <img 
      className="img-thumbnail thumbs"
      src = {props.source}
      alt=""
    />
  );
}
export default ImageThumbnail;