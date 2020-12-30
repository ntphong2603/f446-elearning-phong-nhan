import React, { Component } from "react";
import logo from "../../assets/images/logo-coral.svg";
import style from "./styles";
import { Button, Typography, withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Search } from "@material-ui/icons";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Categories from "./categories";
import UfB from "./UfB";
//import Categories from "./categories";

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.header}>
        <NavLink to="/home">
          <img src={logo} alt="Logo" className={classes.logo} />
        </NavLink>
        <Categories />
        {/* <div className={classes.categories}>Categories</div> */}

        <div className={classes.form}>
          <Search className={classes.iconSearch} />
          <input
            placeholder="Search for anything..."
            className={classes.input}
          ></input>
        </div>
        {/* <UfB /> */}
        <div className={classes.udemy}>
          Udemy for Business
          <div className={classes.udemyContent}>
            ấsssssssssssssaaaaaaaaaaaaaa
          </div>
        </div>
        <div className={classes.udemy}>Teach on Udemy</div>
        <div>
          <ShoppingCartOutlinedIcon
            badgeContent={4}
            className={classes.iconCart}
          />
        </div>
        {this.props.isLogin ? (
          <>
            <Typography
              style={{ marginLeft: 20 }}
              color="#000000"
              component="a"
              href="#"
              variant="subtitle1"
            >
              Hello,Hom mi.
            </Typography>
            <Button
              variant="contained"
              disableElevation
              className={classes.btnLogin}
            >
              Log out
            </Button>
          </>
        ) : (
          <>
            <NavLink to="/signin">
              <Button
                variant="contained"
                disableElevation
                className={classes.btnLogin}
              >
                Log in
              </Button>
            </NavLink>

            <NavLink to="/signup">
              <Button
                variant="contained"
                disableElevation
                className={classes.btnSignup}
              >
                Sign up
              </Button>
            </NavLink>
          </>
        )}
      </div>
    );
  }
}

export default connect((state) => ({
  isLogin: !!state.auth.token,
}))(withStyles(style, { withTheme: true })(Header));
