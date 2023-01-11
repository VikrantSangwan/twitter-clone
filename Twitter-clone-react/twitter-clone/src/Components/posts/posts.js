import React from "react";
import "./Posts.css";

function Posts() {
  return (
    <div className="maincontainer">
      <div className="navigationbar">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              For You
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Trending
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              News
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Sports</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Entertainment</a>
          </li>
        </ul>
      </div>
      <div className="wrapper">
        <div className="banner">
          <div>
            <p>India nation news . LIVE</p>
            <p>
              Assembly by-election: Voting begins for seven seats across six
              states
            </p>
            <p>Trending with #jiogujarat2022</p>
          </div>
        </div>
        <div className="row top-news-wrapper">
          <div className="top-news col-9">
            <p>Trending in India</p>
            <p>10 years of INJUSTICE</p>
            <p>
              Trending with <a href="">Justice For Bapuji</a>
              <a href=""> Asaram Bapu Case</a>
            </p>
          </div>
          <div className="col-3 top-news-image">
            <img
              src="https://pbs.twimg.com/semantic_core_img/1585986889965789187/U9UZOe4j?format=jpg&name=240x240"
              alt=""
            />
          </div>
        </div>
        <div className="row top-news-wrapper">
          <div className="top-news col-9">
            <p>Trending in India</p>
            <p>10 years of INJUSTICE</p>
            <p>
              Trending with <a href="">Justice For Bapuji</a>
              <a href=""> Asaram Bapu Case</a>
            </p>
          </div>
          <div className="col-3 top-news-image">
            <img
              src="https://pbs.twimg.com/semantic_core_img/1585334967164444672/mSLl_zaP?format=jpg&name=240x240"
              alt=""
            />
          </div>
        </div>
        <div className="row top-news-wrapper">
          <div className="trending">
            <p>World News . LIVE</p>
            <p>Karma</p>
            <p>165K Tweets</p>
          </div>
        </div>
        <div className="row top-news-wrapper">
          <div className="trending">
            <p>Trending in India</p>
            <p>#RRR2</p>
            <p>105K Tweets</p>
          </div>
        </div>
        <div className="row top-news-wrapper">
          <div className="top-news col-9">
            <p>Trending in India</p>
            <p>10 years of INJUSTICE</p>
            <p>
              Trending with <a href="">Justice For Bapuji</a>
              <a href=""> Asaram Bapu Case</a>
            </p>
          </div>
          <div className="col-3 top-news-image">
            <img
              src="https://pbs.twimg.com/semantic_core_img/1579454614277181440/b-ZGeQ4X?format=jpg&name=240x240"
              alt=""
            />
          </div>
        </div>
        <div className="row top-news-wrapper">
          <div className="top-news col-9">
            <p>Entertainment . LIVE</p>
            <p>Big Boss</p>
            <p>
              Trending with <a href="">#banbiggboss,</a>
              <a href=""> Salman Khan </a>
            </p>
          </div>
          <div className="col-3 top-news-image">
            <img
              src="https://pbs.twimg.com/semantic_core_img/1587461504512790533/-eQta878?format=jpg&name=240x240"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="cricket-section">
        <div className="people row">
          <div className="profilephoto col-2">
            <img
              src="https://pbs.twimg.com/profile_images/1537745557594296322/PuNSZ2Ti_400x400.jpg"
              alt=""
            />
          </div>
          <div className="profile col-10">
            <div className="profilename">
              Will Macpherson
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
              <a href="">@willis_macp</a>
              <p>18h</p>
            </div>
            <div className="profileabout">
              Love this Pakistan team, love Pakistan cricket. Incredible
              contribution to the tournament, and a seriously exciting young
              team.
            </div>
          </div>
        </div>
        <div className="options row">
          <div className="comment col-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-messenger"
              viewBox="0 0 16 16"
            >
              <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" />
            </svg>
            61
          </div>
          <div className="retweet col-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-repeat"
              viewBox="0 0 16 16"
            >
              <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192Zm3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z" />
            </svg>
            2,147
          </div>
          <div className="likes col-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-hand-thumbs-up"
              viewBox="0 0 16 16"
            >
              <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
            </svg>
            23.4k
          </div>
          <div className="upload col-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cloud-upload"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
              />
              <path
                fill-rule="evenodd"
                d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"
              />
            </svg>
            25
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="row top-news-wrapper">
          <div className="top-news col-9">
            <p>Trending in India</p>
            <p>10 years of INJUSTICE</p>
            <p>
              Trending with <a href="">Justice For Bapuji</a>
              <a href=""> Asaram Bapu Case</a>
            </p>
          </div>
          <div className="col-3 top-news-image">
            <img
              src="https://pbs.twimg.com/semantic_core_img/1585334967164444672/mSLl_zaP?format=jpg&name=240x240"
              alt=""
            />
          </div>
        </div>
        <div className="row top-news-wrapper">
          <div className="trending">
            <p>World News . LIVE</p>
            <p>Karma</p>
            <p>165K Tweets</p>
          </div>
        </div>
        <div className="row top-news-wrapper">
          <div className="trending">
            <p>Trending in India</p>
            <p>#RRR2</p>
            <p>105K Tweets</p>
          </div>
        </div>
      </div>
      <div className="cricket-section">
        <div className="people row">
          <div className="profilephoto col-2">
            <img
              src="https://pbs.twimg.com/profile_images/1537745557594296322/PuNSZ2Ti_400x400.jpg"
              alt=""
            />
          </div>
          <div className="profile col-10">
            <div className="profilename">
              Will Macpherson
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-check-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
              <a href="">@willis_macp</a>
              <p>18h</p>
            </div>
            <div className="profileabout">
              Love this Pakistan team, love Pakistan cricket. Incredible
              contribution to the tournament, and a seriously exciting young
              team.
            </div>
          </div>
        </div>
        <div className="options row">
          <div className="comment col-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-messenger"
              viewBox="0 0 16 16"
            >
              <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" />
            </svg>
            61
          </div>
          <div className="retweet col-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-repeat"
              viewBox="0 0 16 16"
            >
              <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192Zm3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z" />
            </svg>
            2,147
          </div>
          <div className="likes col-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-hand-thumbs-up"
              viewBox="0 0 16 16"
            >
              <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
            </svg>
            23.4k
          </div>
          <div className="upload col-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cloud-upload"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
              />
              <path
                fill-rule="evenodd"
                d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"
              />
            </svg>
            25
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
