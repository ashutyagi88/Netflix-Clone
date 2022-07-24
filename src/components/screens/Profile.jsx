import { signOut } from "firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import Navbar from "../elements/Navbar";
import Plans from "../elements/Plans";

function Profile() {
  const user = useSelector(selectUser);
  const nav = useNavigate();

  const handleSignOut = (e) => {
    e.preventDefault();
    signOut(auth).then(() => {
      nav("/");
    });
  };

  return (
    <ProfileStyle>
      <Navbar></Navbar>
      <ProfileBody>
        <h1>Edit Profile</h1>
        <ProfileInfo>
          <ProfileImg src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABX_TiGHuNGvKPa1G0B_6l6Fwc8kZz9Zmc9PyXi2QOMgIWs6c3go4bUHPhoewB-KAhookOcFLuIvpppBbi80fzkPh0MWeJdaRhf56.png?r=145"></ProfileImg>
          <ProfileDetails>
            <h2>{user.email}</h2>
            <ProfilePlans>
              <h3>Plans</h3>
              <Plans></Plans>
              <SignOutBtn onClick={handleSignOut}>Sign Out</SignOutBtn>
            </ProfilePlans>
          </ProfileDetails>
        </ProfileInfo>
      </ProfileBody>
    </ProfileStyle>
  );
}

const ProfileStyle = styled.div`
  height: 100vh;
  color: #ffffff;
`;

const ProfileBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 8%;
  max-width: 800px;

  h1 {
    font-size: 60px;
    font-weight: 400;
    border-bottom: 1px solid #282c2d;
    margin-bottom: 20px;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
`;

const ProfileImg = styled.img`
  height: 100px;
`;

const ProfileDetails = styled.div`
  color: #ffffff;
  margin-left: 25px;
  flex: 1;

  h2 {
    background-color: grey;
    padding: 15px;
    font-size: 15px;
    padding-left: 20px;
  }
`;

const ProfilePlans = styled.div`
  margin-top: 20px;

  h3 {
    border-bottom: 1px solid #282c2d;
    padding-bottom: 10px;
  }
`;

const SignOutBtn = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  margin-top: 5%;
  width: 100%;
  color: #ffffff;
  background-color: #e50914;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
`;

export default Profile;
