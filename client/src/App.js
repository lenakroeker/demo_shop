import React from "react";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./HeaderFooter/Header";
import MobileHeader from "./HeaderFooter/MobileHeader";
import Footer from "./HeaderFooter/Footer";
import HomePage from "./pages/HomePage";
import ItemDetails from "./pages/ItemDetails";
import NewArrivals from "./pages/NewArrivals";
import SizeChart from "./pages/SizeChart";
import MobileBrands from "./pages/MobileBrands";
import MobileCategories from "./pages/MobileCategories";
import AdminLogin from "./admin/AdminLogin";
import AdminHome from "./admin/AdminHome";
import AddItem from "./admin/AddItem";
import FindItemById from "./admin/FindItemById";
import UpdateRemoveItem from "./admin/UpdateRemoveItem";
import Orders from "./admin/Orders";
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
        <Route exact path="/detailstest">
          <ItemDetails />
        </Route>
        <Route exact path="/sizechart">
          <SizeChart />
        </Route>
        <Route exact path="/mbrands">
          <MobileBrands />
        </Route>
        <Route exact path="/mcategories">
          <MobileCategories />
        </Route>
        <Route exact path="/admin/login">
          <AdminLogin />
        </Route>
        <Route exact path="/admin/home">
          <AdminHome />
        </Route>
        <Route exact path="/admin/additem">
          <AddItem />
        </Route>
        <Route exact path="/admin/updateremove">
          <FindItemById />
        </Route>
        <Route exact path="/admin/updateremove/:itemid">
          <UpdateRemoveItem />
        </Route>
        <Route exact path="/admin/orders">
          <Orders />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
