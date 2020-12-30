import React, { Component } from "react";
import classes from "./style.module.css";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

export default class TranForms extends Component {
  render() {
    return (
      <div className={classes.tranform}>
        <div className={classes.video}>
          <div className={classes.icon}>
            <PlayCircleFilledIcon
              style={{
                fontSize: 80,
                backgroundColor: "#000000",
                color: "#ffffff",
                borderRadius: 50,
              }}
            />
          </div>

          <img
            src={"https://s.udemycdn.com/home/user-stories/mohamad-story.jpg"}
            alt="Video"
            className={classes.img}
          />
        </div>
        <div className={classes.info}>
          <div className={classes.detail}>
            <h2 className={classes.title}>
              Transform your life through education
            </h2>
            <p className={classes.text}>
              Mohamad Alaloush launched a new career in software development by
              taking courses on Udemy. What will you be able to do?
            </p>
          </div>
        </div>
      </div>
    );
  }
}
