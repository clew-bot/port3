import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 5,
      marginLeft: "10px",
      marginRight: "10px",
    },
    paper: {
      padding: theme.spacing(9),
      textAlign: "justify",
      color: "gray",
      
    },
    paperContainer: {
        display: "flex",
        justifyContent: "center",
        background: "beige"
     
    }
}))

    export function PaperMe  ({ children })  {
        const classes = useStyles();
        return (
          <Paper
            className={classes.paper}
          >
            {children}
          </Paper>
        );
      };

    export function PaperContainer ({ children }) {
        const classes = useStyles();
        return (
            <div className={classes.paperContainer}>
                {children}
            </div>
        )
    }
   