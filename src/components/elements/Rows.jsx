import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import axios from "../api/axios";

function Rows({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const primary_URL = "https://image.tmdb.org/t/p/original/";
  const nav = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);

      console.log(request);
      return request;
    }

    fetchData();
  }, [fetchURL]);

  // handleClick = () => {};

  // console.log(movies);

  return (
    <RowStyle>
      <h2>{title}</h2>
      <RowPoster>
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <Title LargeRow={isLargeRow}>
                {!isLargeRow ? (
                  <TitleName>
                    {movie?.name || movie?.title || movie?.original_name}
                  </TitleName>
                ) : (
                  ""
                )}
                <RowImage
                  LargeRow={isLargeRow}
                  key={movie.id}
                  src={`${primary_URL}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                />
                <h1>{movie.id}</h1>
              </Title>
            )
        )}
      </RowPoster>
    </RowStyle>
  );
}

const RowStyle = styled.div`
  color: #ffffff;
  margin-left: 20px;
`;

const RowPoster = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Title = styled.div`
  min-height: ${(props) => (props.LargeRow ? "250px" : "100px")};
  width: 100%;
  position: relative;
  transition: all 450ms;
  cursor: pointer;

  h3 {
    display: none;
    transition: all 450ms;
  }

  &:hover {
    transform: scale(1.08);

    h3 {
      display: block;
    }
  }
`;

const TitleName = styled.h3`
  position: absolute;
  top: 50px;
  left: 10px;
  max-width: 150px;
  max-height: 45px;
  overflow-y: hidden;
`;

const RowImage = styled.img`
  max-height: ${(props) => (props.LargeRow ? "250px" : "100px")};
  object-fit: contain;
  margin-right: 10px;
  transition: transform 450ms;

  &:hover {
    transform: scale(${(props) => (props.LargeRow ? "1.09" : "")});
    opacity: 1;
  }
`;

export default Rows;
