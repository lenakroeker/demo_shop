import React, { createContext, useEffect, useState } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import "firebase/auth";
import firebaseApp from "./firebase";

import { v4 as uuidv4 } from "uuid";

export const AppContext = createContext(null);

const firebaseAppAuth = firebaseApp.auth(firebaseApp);

const AppProvider = ({ children }) => {
  return <AppContext.Provider>{children}</AppContext.Provider>;
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(AppProvider);
