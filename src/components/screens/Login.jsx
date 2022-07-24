import React, { useState } from "react";
import styled from "styled-components";
import SignIn from "../screens/SignIn";

function Login() {
  const [signIn, setSignIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignIn(true);
  };

  return (
    <LoginStyle>
      <LoginBackground>
        <LoginLogo src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"></LoginLogo>
        <SignInBtn onClick={handleSubmit} display={signIn}>
          Sign In
        </SignInBtn>
        <BGGradient></BGGradient>
      </LoginBackground>
      <LoginBody>
        {signIn ? (
          <SignIn></SignIn>
        ) : (
          <>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <LoginInput>
              <form>
                <input type="email" placeholder="Email Address" />
                <GetStartedBtn onClick={handleSubmit}>
                  GET STARTED
                </GetStartedBtn>
              </form>
            </LoginInput>
          </>
        )}
      </LoginBody>
    </LoginStyle>
  );
}

const LoginStyle = styled.div`
  position: relative;
  height: 100%;
  background: url("https://springboard-cdn.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225-xl.jpg")
    center no-repeat;
  background-size: cover;
`;

const LoginBackground = styled.div``;

const BGGradient = styled.div`
  width: 100%;
  z-index: 1;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;

const LoginLogo = styled.img`
  position: fixed;
  left: 0;
  width: 160px;
  object-fit: contain;
  padding-left: 45px;
`;

const SignInBtn = styled.button`
  display: ${(props) => (!props.display ? "block" : "none")};
  position: fixed;
  right: 20px;
  top: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  color: #ffffff;
  background-color: #e50914;
  font-weight: 600;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

const LoginBody = styled.div`
  width: 100%;
  position: absolute;
  top: 30%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  z-index: 1;
  color: #ffffff;
  padding: 20px;

  h1 {
    font-size: 3.125rem;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 2rem;
    font-weight: 400;
    margin-bottom: 30px;
  }

  h3 {
    font-size: 1.3rem;
    font-weight: 400;
  }
`;

const LoginInput = styled.div`
  margin: 20px;

  form {
    input {
      padding: 10px;
      outline-width: 0;
      height: 30px;
      width: 30%;
      border: none;
      max-width: 600px;
    }
  }
`;

const GetStartedBtn = styled.button`
  padding: 16px 20px;
  font-size: 0.919rem;
  color: #ffffff;
  background-color: #e50914;
  border: none;
  font-weight: 600;
  cursor: pointer;
`;

export default Login;
