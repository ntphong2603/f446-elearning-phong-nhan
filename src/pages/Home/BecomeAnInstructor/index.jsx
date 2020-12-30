import React, { Component } from "react";
import classes from "./style.module.css";
import img from "../../../assets/images/BecomeAnInstrutor.jpg";
export default class BecomeAnInstrutor extends Component {
  render() {
    return (
      <div className={classes.BecomeAnInstrutor}>
        <div className={classes.BecomeAnInstrutorGroup}>
          <div className={classes.BecomeAnInstrutorImg}>
            <img
              src={require("../../../assets/images/BecomeAnInstrutor.jpg")}
              alt="IMG"
            />
          </div>
          <div className={classes.BecomeAnInstrutorDetail}>
            <h3 className={classes.BecomeAnInstrutorTitle}>
              Become an instructor
            </h3>
            <p className={classes.BecomeAnInstrutorText}>
              Top instructors from around the world teach millions of students
              on Udemy. We provide the tools and skills to teach what you love.
            </p>
            <span className={classes.BecomeAnInstrutorButton}>
              Start teaching today
            </span>
          </div>
        </div>
      </div>
    );
  }
}
