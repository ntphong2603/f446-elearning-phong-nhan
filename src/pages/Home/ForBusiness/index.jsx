import React, { Component } from "react";
import classes from "./style.module.css";

export default class ForBusiness extends Component {
  render() {
    return (
      <div className={classes.forBussiness}>
        <img
          src={require("../../../assets/images/UdemyForBusiness.jpg")}
          alt="IMG"
          className={classes.img}
        />
        <div className={classes.detail}>
          <div className={classes.detailInfo}>
            <h3 className={classes.title}>Udemy for Business</h3>
            <p className={classes.text}>
              Get unlimited access to 4,000+ of Udemy’s top courses for your
              team.
            </p>
            <span className={classes.button}>Get Udemy for Business</span>
          </div>
        </div>
      </div>
    );
  }
}
