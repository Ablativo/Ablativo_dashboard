import React  from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Chart from ".././components/Chart";


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    color: theme.palette.text.secondary,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <Grid item xs={12} md={12} lg={12}>
        <Paper className={classes.paper}>
          <Typography component="h4" variant="h4">
            {"Utenti questa settimana"}
          </Typography>
          <br />
          <Chart/>
        </Paper>
      </Grid>
    </div>
  );
}
