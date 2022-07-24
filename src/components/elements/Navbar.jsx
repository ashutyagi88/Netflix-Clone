import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [show, handleShow] = useState(false);
  const nav = useNavigate();

  const navbarTransition = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navbarTransition);
    return () => window.removeEventListener("scroll", navbarTransition);
  }, []);

  return (
    <Nav show={show}>
      <NavContent>
        <ImageLogo
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png?20190206123158"
          alt=""
          onClick={() => {
            nav("/");
          }}
        />
        <ImageAvatar
          src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABX_TiGHuNGvKPa1G0B_6l6Fwc8kZz9Zmc9PyXi2QOMgIWs6c3go4bUHPhoewB-KAhookOcFLuIvpppBbi80fzkPh0MWeJdaRhf56.png?r=145"
          alt=""
          onClick={() => nav("/profile")}
        />
      </NavContent>
    </Nav>
  );
}

const Nav = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px;
  height: 30px;
  z-index: 1;
  background-color: ${(props) => (!props.show ? "transparent" : "#111")};
  transition: all 0.5s ease-in;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImageLogo = styled.img`
  position: fixed;
  left: 20px;
  width: 92.5px;
  height: 25px;
  object-fit: contain;
  padding-left: 20px;
  cursor: pointer;
`;

const ImageAvatar = styled.img`
  position: fixed;
  right: 20px;
  width: 32px;
  height: 32px;
  cursor: pointer;
  border-radius: 2px;
`;

export default Navbar;
