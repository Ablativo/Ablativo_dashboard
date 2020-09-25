import React from "react";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

// For testing
const exampleRooms = [
  {
    name: "Room 1",
    image: "images/exampleRooms/ex1.png",
    visitors: "20",
    temp: "25",
    hum: "18",
    altro: "111",
  },
  {
    name: "Room 2",
    image: "images/exampleRooms/ex2.png",
    visitors: "10",
    temp: "26",
    hum: "17",
    altro: "110",
  },
];

const useStyles = makeStyles((theme) => ({
  image: {
    width: 400,
    height: 200,
    margin: "3px",
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
  },
  link: {
    color: theme.palette.info.dark,
  },
  inPaper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default function Rooms() {
  const classes = useStyles();

  function RoomCard(props) {
    return (
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <CardMedia className={classes.image} image={props.image}>
              {props.icon}
            </CardMedia>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography
                  gutterBottoms
                  component="h5"
                  variant="h5"
                  className={classes.inPaper}
                >
                  {props.name}
                </Typography>

                <Grid container>
                  <Grid item xs={12} sm={6} className={classes.inPaper}>
                    <Typography>
                      Visitors: &nbsp; {props.visitors} #{" "}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} className={classes.inPaper}>
                    <Typography>
                      Temperature: &nbsp; {props.temp} °C{" "}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} className={classes.inPaper}>
                    <Typography> Humidity: &nbsp; {props.hum} % </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} className={classes.inPaper}>
                    <Typography> Pressure: &nbsp; {props.altro} mBar </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.inPaper}>
              <Button className={classes.link} size="small" color="primary">
                &nbsp; <Typography variant="button"> More info</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
  }

  // page
  return (
    <Grid container spacing={3}>
      {exampleRooms.map((info) => (
        <Grid item xs={12} key={info.name}>
          <RoomCard
            name={info.name}
            image={info.image}
            visitors={info.visitors}
            temp={info.temp}
            hum={info.hum}
            altro={info.altro}
          />
        </Grid>
      ))}
    </Grid>
  );
}
