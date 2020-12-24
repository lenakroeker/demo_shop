import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./HeaderFooter/Header";
import MobileHeader from "./HeaderFooter/MobileHeader";
import Footer from "./HeaderFooter/Footer";
import HomePage from "./pages/HomePage";
import NewArrivals from "./pages/NewArrivals";
import Cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <MobileHeader />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/cart">
          <Cart />
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
