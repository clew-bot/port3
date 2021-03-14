import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import { PaperMe, PaperContainer, BigContainer } from "../cards/card2";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {},
  };

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
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
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };

  render() {
    const { errors } = this.state;

    return (
      <BigContainer>
        <Link to="/" className="">
          Back to home
        </Link>

        <h4>
          <b>Login</b> below
        </h4>

        <PaperMe>
          <Link to="/" className="">
            <HomeIcon color="secondary" />
          </Link>

          <form noValidate onSubmit={this.onSubmit}>
            <Grid item xs={12} lg={12} md={12}>
              <PaperContainer>
                <h1
                  className="redtxt"
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  Welcome back!
                </h1>
                <h5
                  className="redtxt"
                  style={{
                    marginTop: "0px",
                  }}
                >
                  Don't remember your password? That's honestly too bad.
                </h5>
                <label htmlFor="email">
                  <h3 className="redtxt">Email: </h3>
                </label>
                <TextField
                  helperText={[errors.email, errors.emailnotfound]}
                  color="secondary"
                  size="small"
                  variant="outlined"
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound,
                  })}
                />

                {/* <span className="">
                {errors.email}
                {errors.emailnotfound}
              </span> */}
                <label htmlFor="email">
                  <h3 className="redtxt">Password: </h3>
                </label>
                <TextField
                  color="secondary"
                  size="small"
                  variant="outlined"
                  helperText={[errors.password, errors.passwordincorrect]}
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect,
                  })}
                />

                {/* <span className="">
                {errors.password}
                {errors.passwordincorrect}
              </span> */}

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
                  Login
                </Button>
                <p className="redtxt">
                  Don't have an account?{" "}
                  <Link style={{ color: "inherit" }} to="/register">
                    Register
                  </Link>
                </p>
              </PaperContainer>
            </Grid>
          </form>
        </PaperMe>
      </BigContainer>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
