import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
//import PrimarySearchAppBar from "../components/Header/Header1";

const wrapper = (Component) => {
  return (props) => {
    return (
      <div>
        <Header />
        {/* <PrimarySearchAppBar /> */}
        <Component {...props} />
        <Footer />
      </div>
    );
  };
};

export default wrapper;
