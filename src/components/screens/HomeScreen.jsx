import React from "react";
import styled from "styled-components";
import requests from "../api/Request";
import Banner from "../elements/Banner";
import Navbar from "../elements/Navbar";
import Rows from "../elements/Rows";

function HomeScreen() {
  return (
    <HSStyle>
      <Navbar></Navbar>
      <Banner></Banner>
      <Rows
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflix}
        isLargeRow={true}
      ></Rows>
      <Rows title="Trending Now" fetchURL={requests.fetchTrending}></Rows>
      <Rows title="Suggestions" fetchURL={requests.fetchPrime}></Rows>
      <Rows title="Comedy Movies" fetchURL={requests.fetchComedyMovies}></Rows>
      <Rows title="Horror Movies" fetchURL={requests.fetchHorrorMovies}></Rows>
      <Rows title="Comedy Shows" fetchURL={requests.fetchComedyShows}></Rows>
      <Rows
        title="Romance Movies"
        fetchURL={requests.fetchRomanceMovies}
      ></Rows>
      <Rows title="Action Movies" fetchURL={requests.fetchActionMovies}></Rows>
      <Rows title="Mystery Shows" fetchURL={requests.fetchMysteryShow}></Rows>
    </HSStyle>
  );
}

const HSStyle = styled.div``;

export default HomeScreen;
