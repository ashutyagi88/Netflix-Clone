import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { auth } from "../../firebase";

function SignIn() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then(() => {})
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then(() => {})
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <SignInStyle>
      <form>
        <h2>Sign In</h2>
        <input type="email" placeholder="Email" ref={emailRef}></input>
        <input type="password" placeholder="Password" ref={passwordRef}></input>
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
      </form>
      <StyleH4>
        <NewText>New to Netflix? </NewText>
        <SignUp onClick={register}>Sign up now.</SignUp>
      </StyleH4>
    </SignInStyle>
  );
}

const SignInStyle = styled.div`
  max-width: 300px;
  margin-top: -100px;
  padding: 90px 70px;
  margin-left: auto;
  margin-right: auto;
  background: rgba(0, 0, 0, 0.85);

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      width: 100%;
      text-align: left;
      margin-bottom: 25px;
      font-weight: 600;
    }

    input {
      width: 90%;
      outline-width: 0;
      height: 40px;
      margin-bottom: 14px;
      border-radius: 5px;
      border: none;
      padding: 5px 15px;
    }

    button {
      padding: 16px 20px;
      width: 100%;
      font-size: 1rem;
      color: #ffffff;
      background-color: #e50914;
      border-radius: 5px;
      border: none;
      font-weight: 600;
      margin-top: 20px;
      cursor: pointer;
    }
  }
`;

const StyleH4 = styled.h4`
  margin-top: 20px;
  width: 100%;
  text-align: left;
`;

const NewText = styled.span`
  color: grey;
`;

const SignUp = styled.span`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export default SignIn;
