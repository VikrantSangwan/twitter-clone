import React, { useState } from "react";
import "./ProfileSection.css";
import Tweetsreplies from "../ProfileSectionComp/Tweetsreplies/Tweetsreplies";

function ProfileSection() {
  let [element, setelement] = useState(<Tweetsreplies />);

  return (
    <div className="profilecontainer">
      <div className="profiletopcontainer">
        <div className="col-1">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillEule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </button>
        </div>
        <div className="profiletoptext col-11">
          <p>Vikrant Sangwan</p>
          <p>0 Tweets</p>
        </div>
      </div>
      <div className="profileimgcontainer">
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C6AB0EDCE8F41882EBBB782B76DD4F05D7E360D7C3F23B4F6D02C24699B26105/scale?width=1200&aspectRatio=1.78&format=jpeg"
          alt=""
        />
      </div>
      <div className="profiledesccontainer">
        <div className="profilephoto col-4">
          <button>V</button>
        </div>
        <div className="profileeditbtn col-4">
          <button>Edit profile</button>
        </div>
      </div>
      <div className="profiledescsubscontainer">
        <div>
          <p>Vikrant Sangwan</p>
          <p>@Vikrant51113416</p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-calendar-date"
              viewBox="0 0 16 16"
            >
              <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z" />
              <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
            </svg>
            Joined November 2022
          </p>
        </div>
        <div className="connection">
          <div>
            <p>231</p>
            <span>Following</span>
          </div>
          <div>
            <p>210k</p>
            <span>Followers</span>
          </div>
        </div>
      </div>
      <div className="profiletweetcontainer">
        <div className="col-3" onClick={() => setelement(<Tweets />)}>
          Tweets
        </div>
        <div className="col-3" onClick={() => setelement(<Tweetsreplies />)}>
          Tweets & replies
        </div>
        <div className="col-3" onClick={() => setelement(<Media />)}>
          Media
        </div>
        <div className="col-3" onClick={() => setelement(<Likes />)}>
          Likes
        </div>
      </div>
    </div>
  );
}

export default ProfileSection;
