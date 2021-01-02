import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { adminLogout } from "../actions";

export const AdminHome = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const isAdmin = useSelector((state) => state.isAdmin.admin); // Access the state from the adminReducer

  const logout = () => {
    dispatch(adminLogout());
    history.push("/");
  };

  return (
    <>
      {isAdmin ? (
        <Wrapper>
          <Status>logged in as admin</Status>
          <AdminNav to="/admin/additem">Add New Item</AdminNav>
          <AdminNav to="/admin/updateremove">Update/Remove Item</AdminNav>
          <AdminNav to="/admin/orders">View Orders</AdminNav>
          <Logout
            onClick={() => {
              logout();
            }}
          >
            Log Out
          </Logout>
        </Wrapper>
      ) : (
        <Wrapper>
          <Status>not logged in</Status>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  box-sizing: border-box;
  min-height: 90vh;
`;

const Status = styled.p``;

const AdminNav = styled(NavLink)`
  display: block;
  cursor: pointer;
  margin: 10px;
  padding: 10px;
  width: 300px;
  border: 1px solid white;
`;

const Logout = styled.button`
  display: block;
  cursor: pointer;
  margin: 10px;
  padding: 10px;
  border: 1px solid white;
  width: 300px;
`;

export default AdminHome;
