import React, { Component } from "react";
import { connect } from "react-redux";
import { signUp } from "../../redux/actions/userActions";
import { Grid, withStyles } from "@material-ui/core";
import wrapper from "../../HOCs/functionWrapper";
import style from "./style";
import validator from "validator";
import { NavLink } from "react-router-dom";
// import { Field } from "redux-form";
import { require } from "../../assets/validate";
class SignUp extends Component {
  state = {
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    soDT: "",
    maNhom: "GP01",
    email: "",
    error: {
      hoTen: "",
    },
  };
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(signUp(this.state), this.props.history);
  };
  valFullName(hoTen = "") {
    let error = {};
    let valName = /^[a-zA-Z ]+$/.test(hoTen);
    if (validator.isEmpty(hoTen)) {
      error.hoTen = "Name Require";
    } else {
      if (!valName) {
        error.hoTen = "English Name";
      }
    }
    return error;
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.signUp}>
        <div className={classes.title}>
          <p>Sign Up and Start Learning!</p>
        </div>
        <div className={classes.body}>
          <hr />
          <form onSubmit={this.handleSubmit} className={classes.form}>
            <Grid className={classes.textField}>
              <i className="fas fa-user"></i>
              <input
                type="text"
                className={classes.input}
                onChange={this.handleChange}
                name="hoTen"
                placeholder="Full Name"
                validate={require}
                onFocus={() => {
                  this.setState({
                    error: {
                      ...this.state.error,
                      hoTen: "",
                    },
                  });
                }}
              />
            </Grid>
            <div className={classes.textField}>
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                className={classes.input}
                onChange={this.handleChange}
                name="email"
                placeholder="Email"
              />
            </div>
            <div className={classes.textField}>
              <i className="fas fa-user"></i>
              <input
                type="text"
                className={classes.input}
                onChange={this.handleChange}
                name="taiKhoan"
                placeholder="User Name"
              />
            </div>
            <div className={classes.textField}>
              <i className="fas fa-lock"></i>
              <input
                type="password"
                className={classes.input}
                onChange={this.handleChange}
                name="matKhau"
                placeholder="Password"
              />
            </div>

            <div className={classes.textField}>
              <i className="fas fa-phone"></i>
              <input
                type="number"
                className={classes.input}
                onChange={this.handleChange}
                name="soDT"
                placeholder="Phone Number"
              />
            </div>

            <button
              type="submit"
              className={classes.btn}
              onAuxClick={this.handleSubmit}
            >
              Sign up
            </button>
            <p className={classes.text1}>
              By signing up, you agree to our{" "}
              <span className={classes.span}>Terms of Use</span> and
              <span className={classes.span}> Privacy Policy.</span>
            </p>
            <hr />
            <p className={classes.text2}>
              Already have an account?
              <NavLink to="/signin" style={{ textDecoration: "none" }}>
                <span className={classes.span2}>&nbsp; Log In</span>
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default connect()(wrapper(withStyles(style)(SignUp)));
