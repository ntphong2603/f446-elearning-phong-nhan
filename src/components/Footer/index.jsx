import React, { Component } from "react";
//import classes from "./style.module.css";
import style from "./style";
import { withStyles } from "@material-ui/core";

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.footer}>
        <div className={classes.footerUp}>
          <div className={classes.footerText}>
            <p>
              Top companies choose
              <span className={classes.span3}> Udemy for Business</span> to
              build in-demand career skills.
            </p>
          </div>
          <div className={classes.footerSym}>
            <img
              alt="Lyft"
              height="24"
              width="34"
              src="https://s.udemycdn.com/partner-logos/lyft-logo.svg"
            />
            <img
              alt="adidas"
              height="24"
              width="36"
              src="https://s.udemycdn.com/partner-logos/adidas-logo.svg"
            />
            <img
              alt="Eventbrite"
              height="18"
              width="99"
              src="https://s.udemycdn.com/partner-logos/eventbrite-logo.svg"
            />
            <img
              alt="Surveymonkey"
              height="24"
              width="157"
              src="https://s.udemycdn.com/partner-logos/surveymonkey-logo.svg"
            />
            <img
              alt="Booking"
              height="24"
              width="140"
              src="https://s.udemycdn.com/partner-logos/booking-logo.svg"
            />
          </div>
        </div>

        <div className={classes.contact}>
          <ul>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none" }} href="none">
                Udemy for Business
              </a>
            </li>

            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none" }} href="none">
                Teach on Udemy
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none" }} href="none">
                Get the app
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none" }} href="none">
                About us
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none" }} href="none">
                Contact us
              </a>
            </li>
          </ul>
          <ul>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none" }} href="none">
                Careers
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none" }} href="none">
                Blog
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none" }} href="none">
                Help and Support
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none" }} href="none">
                Affiliate
              </a>
            </li>
          </ul>
          <ul>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none" }} href="none">
                Terms
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none" }} href="none">
                Privacy policy and cookie policy
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none" }} href="none">
                Sitemap
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a style={{ textDecoration: "none" }} href="none">
                Featured courses
              </a>
            </li>
          </ul>

          <select className={classes.select}>
            <option value="en_US">English</option>
            <option value="de_DE">Deutsch</option>
            <option value="es_ES">Español</option>
            <option value="fr_FR">Français</option>
            <option value="id_ID">Bahasa Indonesia</option>
            <option value="it_IT">Italiano</option>
            <option value="ja_JP">日本語</option>
            <option value="ko_KR">한국어</option>
            <option value="nl_NL">Nederlands</option>
            <option value="pl_PL">Polski</option>
            <option value="pt_BR">Português</option>
            <option value="ro_RO">Română</option>
            <option value="ru_RU">Русский</option>
            <option value="th_TH">ภาษาไทย</option>
            <option value="tr_TR">Türkçe</option>
            <option value="zh_CN">中文(简体)</option>
            <option value="zh_TW">中文(繁體)</option>
          </select>
        </div>
        <div className={classes.logo}>
          <img
            className={classes.logoItem}
            src={"https://www.udemy.com/staticx/udemy/images/v6/logo-coral.svg"}
            alt="Logo"
          />
          <p className={classes.text}>© 2020 Udemy, Inc.</p>
        </div>
      </div>
    );
  }
}

export default withStyles(style)(Footer);
