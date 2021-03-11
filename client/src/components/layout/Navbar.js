import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Button to="/" style={{ fontFamily: "monospace" }} className="">
              <i className="material-icons">code</i>
              Open Source
            </Button>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
