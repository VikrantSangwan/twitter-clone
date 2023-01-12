import React from "react";
import "./Following.css";

function Following() {
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
            <div className="feed">
              <div className="feed-desc">
                <p> Entertainment. Trending</p>
                <p className="hashtag">#kabbadi</p>
                <p>29.8k Tweets</p>
              </div>
              <div className="feed-logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-three-dots"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
              </div>
            </div>
            <div className="feed">
              <div className="feed-desc">
                <p> Entertainment. Trending</p>
                <p className="hashtag">#kabbadi</p>
                <p>29.8k Tweets</p>
              </div>
              <div className="feed-logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-three-dots"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
              </div>
            </div>
            <div className="feed">
              <div className="feed-desc">
                <p> Entertainment. Trending</p>
                <p className="hashtag">#kabbadi</p>
                <p>29.8k Tweets</p>
              </div>
              <div className="feed-logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-three-dots"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
              </div>
            </div>
          </div>
          <a href="">Show more</a>
        </div>
        <div className="box">
          <h5>Who to follow</h5>
          <div className="tofollow">
            <div className="col-2 tofollowimg">
              <img
                src="https://pbs.twimg.com/profile_images/1562753500726976514/EPSUNyR3_400x400.jpg"
                alt="image"
              />
            </div>
            <div className="col-5 people-desc">
              <p>Virat kohli</p>
              <p>@imVkohli</p>
            </div>
            <div className="col-5 follow-btn">
              <div>
                <button className="peoplefollowbtn"> follow</button>
              </div>
            </div>
          </div>
          <div className="tofollow">
            <div className="col-2 tofollowimg">
              <img
                src="https://pbs.twimg.com/profile_images/1562753500726976514/EPSUNyR3_400x400.jpg"
                alt="image"
              />
            </div>
            <div className="col-5 people-desc">
              <p>President of India</p>
              <p>@rashtrapatibhvn</p>
            </div>
            <div className="col-5 follow-btn">
              <div>
                <button className="peoplefollowbtn"> follow</button>
              </div>
            </div>
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
