import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  link: {
    color: "#1976d2",
  },
  right: {
    marginLeft: "auto",
  },
  foot:
  {
    color: "#648dae",
  }
}));


export default function Footer() {
  const classes = useStyles();

  function Copyright() {
    const classes = useStyles();
    return (
      <Typography color="textSecondary" display="inline">
        {"Copyright © 2020 "} &nbsp;
        <a className={classes.link} href="https://github.com/Ablativo/Documents">
          Ablativo
        </a>
      </Typography>
    );
  }
  
  function Version() {
    return (
      <Typography color="textSecondary" align="right" display="inline">
        {"Version 1.0.0 "}
      </Typography>
    );
  }

  return (
    <footer >
      <br />
      <Grid container alignItems="center" color={classes.foot}>
        <Grid>
          <Copyright />
        </Grid>
        <Grid className={classes.right}>
          <Version />
        </Grid>
      </Grid>
    </footer>
  );
}
