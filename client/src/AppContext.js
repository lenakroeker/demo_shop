import React, { createContext, useEffect, useState } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import "firebase/auth";
import { useHistory } from "react-router-dom";
import firebaseApp from "./firebase";

export const AppContext = createContext(null);

const firebaseAppAuth = firebaseApp.auth(firebaseApp);

const providers = {
  googleProvider: new firebaseApp.auth.GoogleAuthProvider(),
};

const AppProvider = ({ children, signInWithGoogle, signOut, user }) => {
  const [appUser, setAppUser] = useState({});
  let history = useHistory();

  const handleSignOut = () => {
    signOut();
    setAppUser({});
    history.push(`/`);
  };

  useEffect(() => {
    if (user) {
      fetch(`/users`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          displayName: user.displayName,
          email: user.email,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          setAppUser(json.data);
        });
    }
  }, [user]);

  return (
    <AppContext.Provider value={{ appUser, signInWithGoogle, handleSignOut }}>
      {children}
    </AppContext.Provider>
  );
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(AppProvider);
