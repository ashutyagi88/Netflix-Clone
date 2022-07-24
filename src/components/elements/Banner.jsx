import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import requests from "../api/Request";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * (request.data.results.length - 1))
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  console.log(movie);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <BannerStyle
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <BannerContent>
        <BannerTitle>
          {movie?.name || movie?.title || movie?.original_name}
        </BannerTitle>
        <BannerButtons>
          <BannerButton>Play</BannerButton>
          <BannerButton>My List</BannerButton>
        </BannerButtons>
        <BannerDescription>
          {truncate(`${movie?.overview}`, 150)}
        </BannerDescription>
      </BannerContent>
      <FadeBottom></FadeBottom>
    </BannerStyle>
  );
}

const BannerStyle = styled.header`
  background-size: cover;
  background-position: center center;
  position: relative;
  height: 650px;
  color: #ffffff;
  object-fit: contain;
`;

const BannerContent = styled.div`
  margin-left: 20px;
  padding-top: 250px;
  height: 190px;
`;

const BannerTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
`;

const BannerButtons = styled.div``;

const BannerButton = styled.button`
  cursor: pointer;
  outline: none;
  color: #ffffff;
  border: none;
  padding-top: 0.5rem;
  padding-right: 2rem;
  padding-bottom: 0.5rem;
  padding-left: 2rem;
  font-weight: 700;
  border-radius: 0.2vw;
  margin-right: 1rem;
  background-color: rgba(51, 51, 51, 0.5);

  &:hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }
`;

const BannerDescription = styled.h1`
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 0.8rem;
  max-width: 360px;
  height: 80px;
`;

const FadeBottom = styled.div`
  height: 13.25rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;

export default Banner;
