import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin } from "../actions";
import { useHistory } from "react-router-dom";
import { AppContext } from "../AppContext";

export const GoogleSignin = () => {
  const { appUser, signInWithGoogle } = useContext(AppContext);
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.isAdmin.admin); // Access the state from the adminReducer

  const history = useHistory();

  console.log(appUser.email);

  useEffect(() => {
    if (
      appUser.email === "lenakroeker@gmail.com" &&
      appUser.displayName === "Lena Kroeker"
    ) {
      console.log("success!");
      dispatch(adminLogin());
      history.push("/admin/home");
    } else {
      window.alert("wrong!");
    }
    return () => {};
  }, [appUser.email]);

  return (
    <Wrapper>
      Login With Google
      <Button onClick={signInWithGoogle}>Sign In</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 90vh;
  text-align: center;
  margin-top: 30px;
`;

const Button = styled.button`
  background: lavender;
  color: black;
  padding: 10px;
`;

export default GoogleSignin;
