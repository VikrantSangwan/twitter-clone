import React, { useEffect, useState } from "react";
import Tofollow from "../FollowingSecComp/Tofollow/Tofollow";
import Whathappen from "../FollowingSecComp/Whathappen/Whathappen";
import "./Following.css";

function Following() {
  let [tofollowpeople, settofollow] = useState([]);
  let [trending, settrending] = useState([]);
  useEffect(() => {
    fetch("tofollow.json")
      .then((res) => res.json())
      .then((res) => {
        settofollow(res);
      });
  }, []);
  useEffect(() => {
    fetch("whathappen.json")
      .then((res) => res.json())
      .then((res) => {
        settrending(res);
      });
  }, []);

  return (
    <div className="rightcontainer">
      <div className="fixedsearchbox">
        <div className="searchbox">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <input type="text" placeholder="Search Twitter" />
        </div>
      </div>
      <div className="othersections">
        <div className="box">
          <h5>What's happening</h5>
          <div className="feed-wrapper">
            {trending.map((item, index) => (
              <Whathappen item={item} key={index} />
            ))}
          </div>
          <a href="">Show more</a>
        </div>
        <div className="box">
          <h5>Who to follow</h5>
          <div>
            {tofollowpeople.map((item, index) => (
              <Tofollow item={item} key={index} />
            ))}
          </div>
        </div>
        <div className="links">
          <div>
            <a href="">Terms of Service </a>
            <a href="">Privacy Policy </a>
            <a href="">Cookies</a>
            <a href="">Accessibility</a>
            <a href="">Ads Info</a>
            <a href="">More...</a>
            <p>2023 Twitter, Inc</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Following;
