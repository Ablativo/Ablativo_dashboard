import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import FireplaceIcon from "@material-ui/icons/Fireplace";
import OpacityIcon from "@material-ui/icons/Opacity";
import TelemetryCard from ".././components/TelemetryCard";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Chart from ".././components/Chart";

const useStyles = makeStyles((theme) => ({
  icon: {
    width: 120,
    height: 100,
  },
  paper: {
    padding: theme.spacing(3),
    color: theme.palette.text.secondary,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <TelemetryCard
            name="Temperature (avg.)"
            image="images/red.png"
            icon={<FireplaceIcon className={classes.icon} />}
            value="20"
            measure="°C"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TelemetryCard
            name="Humidity (avg.)"
            image="images/blue.png"
            icon={<OpacityIcon className={classes.icon} />}
            value="10"
            measure="%"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TelemetryCard
            name="let's see (avg.)"
            image="images/blue.png"
            value="10"
          />
        </Grid>
      </Grid>

      <br />
      <Grid item xs={12} md={12} lg={12}>
        <Paper className={classes.paper}>
          <Typography component="h4" variant="h4">
            {" "}
            {"Museum visitors this week"}{" "}
          </Typography>
          <br />
          <Chart />
        </Paper>
      </Grid>
    </div>
  );
}
