import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Banner.css";
import Pdf from "./assets/NextGer.pdf";
import { saveAs } from "file-saver";
import headerImg from "./logo/images/header.png";

const base_url = "http://image.tmdb.org/t/p/original";

function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl); //IF WE HAVE A VARIABLE LIKE 'fetchUrl', THAT IS OUTSIDE OF BLOCK, WE HAVE DECLARE AT THE END 👇🏻

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const saveFile = () => {
    saveAs(Pdf, "next-generation.pdf");
  };

  console.log(movie);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        // backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
        backgroundImage: `url(${headerImg})`,
        backgroundPosition: "top center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {/* {movie?.title || movie?.name || movie?.original_name} */}
          Next<span className="banner__titleSpan">-</span>Gen <br />
          Visual<span className="banner__titleSpan">-</span>Merchandising
        </h1>

        <div className="banner__buttons">
          <button className="banner__button" onClick={saveFile}>
            Download PDF
          </button>
          {/* <button className="banner__button">My List</button> */}
        </div>

        <h1 className="banner__description">
          {/* {truncate(movie?.overview, 150)} */}
          Hans-Jörg Hollenbach <br /> Aldo Gjika <br /> Kristi Nikolla
        </h1>

        <p className="banner__subDescription">© Alle Rechte vorbehalt</p>
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
