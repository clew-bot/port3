import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./auth.css";
import {
  PaperMe,
  PaperContainer,
  HeaderContainer,
  InputContainer,
  DescText,
  HowBox,
} from "../cards/card1";
import { Button } from "@material-ui/core";
import { Input } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import TextField from "@material-ui/core/TextField";
import Hidden from '@material-ui/core/Hidden';




class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    hear: "",
    errors: {},
  };






  
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      hear: this.state.hear,
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <>
        <HeaderContainer>
        <h3 className="">
            Already have an account? <Link to="/login">Log in</Link>
          </h3>
          <h4>
            <b>Register</b> below
          </h4>
       
         
        </HeaderContainer>
        <PaperContainer>
          <form noValidate onSubmit={this.onSubmit}>
            <PaperMe className="figure">
              <Link to="/" className="">
                <HomeIcon color="secondary"/>
              </Link>
              <h1 className="redtxt">Make an Account</h1>
              <h2 className="redtxt">100% Free</h2>
              <h3 className="redtxt">We just need your email.</h3>
              <br/>
              <InputContainer>
              
                <Grid item xs={12} lg={6} md={6}>
                  <label htmlFor="name">
                    {/* <DescText>Name *</DescText> */}
                  </label>
                  <TextField
                    color="secondary"
                    size="small"
                    variant="outlined"
                    label="Name*"
                    helperText={errors.name}
                    onChange={this.onChange}
                    value={this.state.name}
                    error={errors.name}
                    id="name"
                    type="text"
                    className={classnames("", {
                      invalid: errors.name,
                    })}
                  />
                  {/* <span className="red-text">{errors.name}</span> */}
                </Grid>

                <Grid item xs={12} lg={6} md={6}>
                  <label htmlFor="email">
                    {/* <DescText>Email *</DescText> */}
                  </label>
                  <TextField
                  
                  color="secondary"
                  helperText={errors.email}
                    size="small"
                    variant="outlined"
                    label="Email*"
                    onChange={this.onChange}
                    value={this.state.email}
                    error={errors.email}
                    id="email"
                    type="email"
                    className={classnames("", {
                      invalid: errors.email,
                    })}
                  />

                  {/* <span className="red-text">{errors.email}</span> */}
                </Grid>
              </InputContainer>
              <br />
              <br />

              <InputContainer>
                <Grid item xs={12} lg={12} md={12}>
                  <label htmlFor="password">
                    {/* <DescText>Password *</DescText> */}
                  </label>
                  <TextField
                   color="secondary"
                  helperText={errors.password}
                    size="small"
                    variant="outlined"
                    label="Password*"
                    onChange={this.onChange}
                    value={this.state.password}
                    error={errors.password}
                    id="password"
                    type="password"
                    className={classnames("", {
                      invalid: errors.password,
                    })}
                  />

                  {/* <span className="red-text">{errors.password}</span> */}
                </Grid>
          
                <Grid item xs={12} lg={12} md={12}>
                  <label htmlFor="password2">
                    {/* <DescText>Repeat Password *</DescText> */}
                  </label>
                  <TextField
                   color="secondary"
                 
                  helperText={errors.password2}
                    size="small"
                    variant="outlined"
                    label="Repeat Password*"
                    onChange={this.onChange}
                    value={this.state.password2}
                    error={errors.password2}
                    id="password2"
                    type="password"
                    className={classnames("", {
                      invalid: errors.password2,
                    })}
                  />

                  {/* <span className="red-text">{errors.password2}</span> */}
                </Grid>
              </InputContainer>
              <br />
              <Grid item xs={12} lg={12} md={12}>
                <label htmlFor="hear">
                  {/* <DescText>How Did You Hear About Us?</DescText> */}
                </label>
                <HowBox>
                  {/* <TextField
                onChange={this.onChange}
                value={this.state.hear}
                error={errors.hear}
                type="text"
                id="hear outlined-multiline-static"
                label="How did you hear about us?"
                multilinerows={4}
            variant="outlined"
        /> */}
                  <TextField
                  color="secondary"
                    variant="outlined"
                    label="Notes to the Developer"
                    style={{ height: "100px" }}
                    onChange={this.onChange}
                    value={this.state.hear}
                    error={errors.hear}
                    id="hear"
                    type="text"
                    className={classnames("")}
                    multiline
                    rows={4}
                  />
                </HowBox>
              </Grid>
              <Hidden only={["xs", "sm"]}>
              <h5>* Indicates Required</h5>
              </Hidden>
                <Button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                    background: "#ba3f64",
                    alignContent: "center",
                    marginLeft: "10px",

                    color: "white",
                  }}
                  type="submit"
                  className=""
                >
                  Sign up
                </Button>
        
            </PaperMe>
          </form>
        </PaperContainer>
      </>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
