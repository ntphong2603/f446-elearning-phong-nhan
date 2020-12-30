import React, { Component } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
//import PrimarySearchAppBar from "../components/Header/Header1";

class Wrapper extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* <PrimarySearchAppBar /> */}
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Wrapper;
