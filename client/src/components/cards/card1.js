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
      padding: theme.spacing(7),
      textAlign: "justify",
      color: "gray",
      
    },
    paperContainer: {
        display: "flex",
        justifyContent: "space-evenly",
        background: "beige",
        marginTop: "60px",
        
       
     
    },
    headerContainer: {
      display: "flex",
      justifyContent: "space-evenly",
      background: "beige",
      flexDirection:"column",
      marginLeft: "30px"
    },
    inputContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent:"space-evenly",
      width: "25vw",
      marginLeft: "10px",
      [theme.breakpoints.between("xs", "md")]: {
        flexDirection: "column",
       
        width: "80vw",
        
        borderRadius: "5px",
      },
     
    },
    descText: {
      marginBottom: "0px",
      fontSize: ".7vw",
      textAlign: "center",
      color: "black",
      fontFamily: "Arial, Helvetica, sans"
      
    },
    howDidYouHear: {
      display: "flex",
      justifyContent:"start",
      marginTop: "5px",
      marginLeft: "10px",
      [theme.breakpoints.between("xs", "sm")]: {
        marginLeft: "5px",
        justifyContent:"end",
        borderRadius: "5px",
        marginBottom:"20px"
      },
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

    export function HeaderContainer ({ children }) {
      const classes = useStyles();
      return (
          <div className={classes.headerContainer}>
              {children}
          </div>
      )
  }
  export function InputContainer ({ children }) {
    const classes = useStyles();
    return (
        <div className={classes.inputContainer}>
            {children}
        </div>
    )
}
export function DescText ({ children }) {
  const classes = useStyles();
  return (
      <div className={classes.descText}>
          {children}
      </div>
  )
}
export function HowBox ({ children }) {
  const classes = useStyles();
  return (
      <div className={classes.howDidYouHear}>
          {children}
      </div>
  )
}
   