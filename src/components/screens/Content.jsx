import React from "react";
import styled from "styled-components";
import Banner from "../elements/Banner";
import Navbar from "../elements/Navbar";
import { BiCommentDetail } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { FiPlus, FiDownload } from "react-icons/fi";

function Content() {
  return (
    <ContentStyle>
      <Navbar></Navbar>
      <ContentBack></ContentBack>
      <ContentData>
        <h1>Runway 34</h1>
        <ContentDetail>
          <h3>2022</h3>
          <Hdr>HDR</Hdr>
          <BiCommentDetail></BiCommentDetail>
        </ContentDetail>
        <ContentDescription>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio,
            nihil recusandae, consequatur rem necessitatibus doloribus qui
            maiores ducimus tempore consequuntur amet eos, fugiat ex.
          </p>
        </ContentDescription>
        <ContentBottom>
          <Btns>
            <PlayBtn>Play</PlayBtn>
            <MoreBtn>More</MoreBtn>
          </Btns>
          <Others>
            <FiPlus></FiPlus>
            <FiDownload></FiDownload>
          </Others>
        </ContentBottom>
      </ContentData>
    </ContentStyle>
  );
}

const ContentStyle = styled.div`
  height: 100vh;
`;

const ContentBack = styled.div`
  position: relative;
  background-size: cover;
  background-position: center center;
  height: 100vh;
  object-fit: contain;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0.98),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.419),
      rgba(0, 0, 0, 0)
    ),
    url("https://image.tmdb.org/t/p/original//yQTQL9pliY6vpRt8HkjUJrKymBb.jpg");
`;

const ContentData = styled.div`
  position: absolute;
  top: 20%;
  left: 5%;
  color: white;
  width: 50%;
`;

const ContentDetail = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
  padding: 15px;
  padding-left: 0;
`;

const Hdr = styled.h3``;

const ContentDescription = styled.div``;

const ContentBottom = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 30px;
`;

const Btns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  padding-right: 30px;
`;

const PlayBtn = styled.button`
  padding: 20px 50px;
  border: none;
  background-color: #e50914;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 5px;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

const MoreBtn = styled.button`
  padding: 20px 50px;
  border: none;
  background-color: #ffffff;
  color: #000000;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 5px;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

const Others = styled.div`
  display: flex;
  justify-content: space-between;
  width: 18%;

  svg {
    font-size: 2rem;
    padding: 10px;
    background-color: #e50914;
    border-radius: 100%;
    opacity: 0.8;

    &:hover {
      opacity: 1;
    }
  }
`;

export default Content;
