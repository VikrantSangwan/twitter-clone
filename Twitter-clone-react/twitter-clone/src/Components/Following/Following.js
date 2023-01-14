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
            <div className="feed">
              <div className="feed-desc">
                <p> Business and Finance. Trending</p>
                <p className="hashtag">##Infosys</p>
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
                <p className="hashtag">श्री राम</p>
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
              <div>
                <p>Virat kohli</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-patch-check-fill bluetick"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                </svg>
              </div>
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
                src="https://pbs.twimg.com/profile_images/1564512488271466496/co_3FO0o_400x400.jpg"
                alt="image"
              />
            </div>
            <div className="col-7 people-desc">
              <div>
                <p>President of India</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-patch-check-fill bluetick"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                </svg>
              </div>
              <p>@rashtrapatibhvn</p>
            </div>
            <div className="col-3 follow-btn">
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
