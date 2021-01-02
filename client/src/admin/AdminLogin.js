import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin } from "../actions";
import { useHistory } from "react-router-dom";

export const AdminLogin = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.isAdmin.admin); // Access the state from the adminReducer
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  console.log(isAdmin);

  const signin = () => {
    if (email === "lenakroeker@gmail.com" && password === "password") {
      console.log("success!");
      dispatch(adminLogin());
      history.push("/admin/home");
    } else {
      window.alert("wrong!");
    }
  };

  return (
    <Wrapper>
      Admin Login
      <Signin>
        <Label htmlFor="email">Email: </Label>
        <Input
          onChange={(ev) => setEmail(ev.target.value)}
          type="email"
          id="email"
        />
      </Signin>
      <Signin>
        <Label htmlFor="password">Password: </Label>
        <Input
          onChange={(ev) => setPassword(ev.target.value)}
          type="password"
          id="password"
        />
      </Signin>
      <Button
        onClick={() => {
          signin();
        }}
      >
        Sign In
      </Button>
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

const Label = styled.label``;
const Input = styled.input`
  margin: 10px;
`;
const Signin = styled.div``;
const Button = styled.button`
  background: lavender;
  color: black;
  padding: 10px;
`;

export default AdminLogin;
