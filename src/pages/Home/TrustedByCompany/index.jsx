import React, { Component } from "react";
import classes from "./style.module.css";

// const logo = [
//   {
//     id: 1,
//     url: "https://i.udemycdn.com/partner-logos/booking-logo.svg",
//   },
// ];
export default class TrustedByCompany extends Component {
  render() {
    return (
      <div className={classes.company}>
        <div>
          <h3 className={classes.title}>Trusted by companies of all sizes</h3>
        </div>
        <div className={classes.logo}>
          <div>
            <img
              className={classes.logoIcon}
              src={"https://i.udemycdn.com/partner-logos/booking-logo.svg"}
              alt="logo"
            />
          </div>
          <div>
            <img
              className={classes.logoIcon}
              src={"https://i.udemycdn.com/partner-logos/volkswagen-logo.svg"}
              alt="logo"
            />
          </div>
          <div>
            <img
              className={classes.logoMercedes}
              src={"https://i.udemycdn.com/partner-logos/mercedes-logo.svg"}
              alt="logo"
            />
          </div>
          <div>
            <img
              className={classes.logoIcon}
              src={"https://i.udemycdn.com/partner-logos/adidas-logo.svg"}
              alt="logo"
            />
          </div>
          <div>
            <img
              className={classes.logoIcon}
              src={"https://i.udemycdn.com/partner-logos/eventbrite-logo.svg"}
              alt="logo"
            />
          </div>
        </div>
      </div>
    );
  }
}
