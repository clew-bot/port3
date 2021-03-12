
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./auth.css"
import { PaperMe, PaperContainer } from "../cards/card1"
import { Button } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
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
      hear: this.state.hear
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
     <>
            <Link to="/" className="btn-flat waves-effect">
              <HomeIcon />
            </Link>

            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Register</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
            <PaperContainer>
            <form noValidate onSubmit={this.onSubmit}>
            <PaperMe className="figure">
            <Grid item xs={12} lg={12} md={12}>

            <label htmlFor="name"><h3>Name *</h3></label>
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.name,
                  })}
                />
                <span className="red-text">{errors.name}</span>
               
                </Grid>
                  <br />
                  <Grid item xs={12} lg={12} md={12}>
           
                <label htmlFor="email"><h3>Email *</h3></label>
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email,
                  })}
                />
                
                <span className="red-text">{errors.email}</span>
          
                </Grid>
                <br />
                <Grid item xs={12} lg={12} md={12}>
       
                <label htmlFor="password"><h3>Password *</h3></label>
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password,
                  })}
                />
               
                <span className="red-text">{errors.password}</span>
         
                </Grid>
                <br />
                <Grid item xs={12} lg={12} md={12}>
          
                <label htmlFor="password2"><h3>Repeat Password *</h3></label>
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2,
                  })}
                />
              
                <span className="red-text">{errors.password2}</span>
             
                </Grid>
                
                <br />
                <Grid item xs={12} lg={12} md={12}>
          
          <label htmlFor="hear"><h3>How Did You Hear About Us?</h3></label>
          <input
            onChange={this.onChange}
            value={this.state.hear}
            error={errors.hear}
            id="hear"
            type="text"
            className={classnames("", {
              invalid: errors.password2,
            })}
          />
        
          <span className="red-text">{errors.password2}</span>
       
          </Grid>
                <h5>* Indicates Required</h5>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <Button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                    background: "#484952",
           
                    color: "white"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Sign up
                </Button>
                
              </div>
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