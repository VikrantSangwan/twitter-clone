import React from "react";
import "./Tofollow.css";

function tofollow(props) {
  return (
    <div className="tofollow">
      <div className="col-2 tofollowimg">
        <img src={props.item.imgsrc} alt="image" />
      </div>
      <div className="col-5 people-desc">
        <div>
          <p>{props.item.name}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-patch-check-fill bluetick"
            viewBox="0 0 16 16"
          >
            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
          </svg>
        </div>
        <p className="tweeterid">{props.item.id}</p>
      </div>
      <div className="col-5 follow-btn">
        <div>
          <button className="peoplefollowbtn"> follow</button>
        </div>
      </div>
    </div>
  );
}

export default tofollow;
