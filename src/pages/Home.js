import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import FireplaceIcon from "@material-ui/icons/Fireplace";
import OpacityIcon from "@material-ui/icons/Opacity";
import SpeedIcon from '@material-ui/icons/Speed';
import TelemetryCard from ".././components/TelemetryCard";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Chart from ".././components/Chart";

// For testing
const labelsVals = [
  "03-08",
  "04-08",
  "05-08",
  "06-08",
  "07-08",
  "08-08",
  "09-08",
];
const dataVals = [10, 32, 12, 14, 20, 8, 18];

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
            name="Pressure (avg.)"
            image="images/yellow.png"
            value="10"
            icon={<SpeedIcon className={classes.icon} />}
          />
        </Grid>
      </Grid>

      <br />
      <Grid item xs={12} md={12} lg={12}>
        <Paper className={classes.paper}>
          <Typography component="h4" variant="h4">
            {" "}
            {"Ablativo users this week"}{" "}
          </Typography>
          <br />
          <Chart labelsVals={labelsVals} dataVals={dataVals} />
        </Paper>
      </Grid>
    </div>
  );
}
