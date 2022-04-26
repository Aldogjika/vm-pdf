import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import FlipMove from "react-flip-move";

const base_url = "http://image.tmdb.org/t/p/original/";

function Row({ title, imgUrl, description }) {
  const [readMore, setReadMore] = useState(false);
  const [imgBackground, setImgBackground] = useState("");

  // useEffect(() => {
  //   async function fetchData() {
  //     const request = await axios.get(imgUrl); //IF WE HAVE A VARIABLE LIKE 'fetchUrl', THAT IS OUTSIDE OF BLOCK, WE HAVE DECLARE AT THE END 👇🏻

  //     setImgBackground(
  //       request.data.results[
  //         Math.floor(Math.random() * request.data.results.length - 1)
  //       ]
  //     );
  //     return request;
  //   }

  //   fetchData();
  // }, [imgUrl]);

  const handleClick = (status) => {
    if (readMore) {
      setReadMore(false);
    } else {
      setReadMore(true);
    }
  };

  return (
    <div className="row">
      <p className="row__title">{title}</p>
      <div
        className="row__banner"
        style={{
          // backgroundImage: `url(${base_url}${imgBackground?.backdrop_path})`,
          backgroundImage: `url(${imgUrl && imgUrl})`,
        }}
      >
        <div className="row__bannerOverlay"></div>
        <div className="row__bannerButtons">
          <button className="row__bannerButton" onClick={handleClick}>
            {readMore ? "UMSCHALTEN" : "WEITERLESEN"}
          </button>
        </div>
      </div>

      {readMore && (
        <p
          className="row__description"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
      )}
    </div>
  );
}

export default Row;
