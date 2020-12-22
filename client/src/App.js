import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import NewArrivals from "./NewArrivals";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/new">
          <NewArrivals />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
