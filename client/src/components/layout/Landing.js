import React, { Component } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Input } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { AnimatePresence, motion } from "framer-motion";
import Lazyload from "react-lazyload";
import CircularProgress from "@material-ui/core/CircularProgress";
import Animate from "../animations/LeftSideSwoop";
import Animate2 from "../animations/LeftSideSwoopp";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: "10px",
    marginRight: "10px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  linkInherit: {
    padding: theme.spacing(2),
    color: "inherit",
    textDecoration: "none",
    border: "solid 2px black",
  },
  imgs: {
    height: "100vw",
    borderRadius: "5px",
    [theme.breakpoints.up("lg")]: {
      height: "45vw",
      borderRadius: "5px",
      
    },
  },
  meetMochi: {
    textAlign: "center",
    listStyle: "inside",
  },
  miniScreen: {
    height: "100vw",
    borderRadius: "5px",
  },
  heading: {
    display: "flex",
    marginLeft: "100px"
  }
}));

const Landing = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={12} md={12}>
          <Paper className={classes.paper}>
            <h1>Mochi's Doghouse</h1>
            <p>Enter if you Dare!</p>

            <br />
            <Link
              // href triggers full refresh
              to="/register"
              className={classes.linkInherit}
            >
              <Button>Register</Button>
            </Link>
            <Link
              //to will not trigger a full refresh
              to="/login"
              className={classes.linkInherit}
            >
              <Button>Log In</Button>
            </Link>
          </Paper>
        </Grid>
     
        <Grid item xs={8} lg={8} md={8}>
          <Paper className={classes.meetMochi}>
            <div className={classes.heading}>
            <h1>Meet Satoshi-Mochi</h1>
            </div>
            <ul className={classes.meetMochi}>
              <Animate>Highly Versatile</Animate>
              <Animate2>Doesn't Bark</Animate2>
              <Animate>Books it out the door</Animate>
              <Animate2>Will eat your food when not looking</Animate2>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={4} lg={4} md={4}>
         
        </Grid>
        <Grid item xs={12} lg={6}>
          <Paper className={classes.paper}>
            <img
              src="./assets/images/mochiinbed.jpg"
              alt="mochi"
              className={classes.imgs}
            />
          </Paper>
        </Grid>
        <Animate>
          <Grid item xs={12} lg={6}>
            <Paper className={classes.paper}>
              <Lazyload placeholder={<CircularProgress />}>
                <img
                  src="./assets/images/koainbed.jpg"
                  alt="koa"
                  className={classes.imgs}
                />
              </Lazyload>
            </Paper>
          </Grid>
        </Animate>

        <Grid item xs={12} lg={6}>
          <Paper className={classes.paper}>
            <img
              src="./assets/images/mochicouch.jpg"
              alt="mochi's toocth"
              className={classes.imgs}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Paper className={classes.paper}>
            <img
              src="./assets/images/mochioutside.jpg"
              alt="mochi outside"
              className={classes.imgs}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default Landing;
