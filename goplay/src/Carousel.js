import React from "react";
import "./Carousel.scss"
import Item from "./Item"

function Carousel(props) { 

  return (
    <div className="carousel">
      <div className="zender"> 
      {/* {props.title} */}
      <img src={props.img} alt="" />
      </div>
      <div className="scrollContainer">
        <div className="scroll">
          {props.data.map((item, index) =>(
            <Item id={item.id} index={index}/>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Carousel;