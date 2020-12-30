import React, { Component } from "react";
import { connect } from "react-redux";
import signIn from "../../redux/actions/userActions";
import {
  Typography,
  Box,
  // TextField,
  Button,
  Container,
  // InputAdornment,
  SvgIcon,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import { ReactComponent as Logo } from "../../assets/images/icons8-google.svg";
import AppleIcon from "@material-ui/icons/Apple";
// import EmailIcon from "@material-ui/icons/Email";
// import LockIcon from "@material-ui/icons/Lock";
// import Header from "../../components/Header";
import wrapper from "../../HOCs/functionWrapper";
import { withStyles } from "@material-ui/core";
import style from "./styles";
import { NavLink } from "react-router-dom";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        taiKhoan: "",
        matKhau: "",
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(signIn(this.state.credentials));
  };
  render() {
    const { classes } = this.props;
    return (
      <>
        <Container maxWidth="sm">
          <div className={classes.logIn}>
            <Typography className={classes.title} component="h1" variant="h2">
              Log In to Your Udemy Account!
            </Typography>
            <div className={classes.body}>
              <hr />
              <form
                className={classes.form}
                action=""
                onSubmit={this.handleSubmit}
              >
                <Button
                  variant="contained"
                  color="default"
                  className={classes.loginFacebook}
                  startIcon={<FacebookIcon />}
                >
                  Continue with Facebook
                </Button>
                <Button
                  className={classes.loginGoogle}
                  startIcon={<SvgIcon component={Logo} />}
                >
                  Continue with Google
                </Button>
                <Button
                  variant="contained"
                  color="default"
                  startIcon={<AppleIcon />}
                  className={classes.loginApple}
                >
                  Continue with Apple
                </Button>
                {/* <Box my={1}>
                  <TextField
                    // style={{ backgroundColor: "#ffffff" }}
                    fullWidth
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                    onChange={this.handleChange}
                    name="taiKhoan"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <i
                            className="fas fa-user"
                            style={{ color: "#cacbcc" }}
                          ></i>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box> */}
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
                {/* <Box my={1}>
                  <TextField
                    fullWidth
                    type="password"
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    onChange={this.handleChange}
                    name="matKhau"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <i
                            className="fas fa-lock"
                            style={{ color: "#cacbcc" }}
                          ></i>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box> */}
                <Box textAlign="center">
                  <Button
                    type="submit"
                    variant="contained"
                    // color="primary"
                    size="large"
                    id="btnSignUp"
                    className={classes.btn}
                  >
                    Log in
                  </Button>
                  <Typography>
                    or <Typography>Forgot Password</Typography>
                  </Typography>
                </Box>
                <Box my={2}>
                  <Typography className={classes.text2}>
                    Don't have an account?
                    <NavLink to="/signup" style={{ textDecoration: "none" }}>
                      <Typography className={classes.span2}>
                        &nbsp; Sign up
                      </Typography>
                    </NavLink>
                  </Typography>
                </Box>
              </form>
            </div>
          </div>
        </Container>
      </>
    );
  }
}

export default connect()(wrapper(withStyles(style)(SignIn)));
