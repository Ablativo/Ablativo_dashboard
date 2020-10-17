import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { axios } from '../axios';

import RoomCard from "../components/RoomCard";


// For testing
/*
const exampleRooms = [
  {
    roomName: "Room 1",
    image: "images/exampleRooms/ex1.png",
    visitors: "20",
    temp: "25",
    hum: "18",
    press: "111",
  },
  {
    roomName: "Room 2",
    image: "images/exampleRooms/ex2.png",
    visitors: "10",
    temp: "26",
    hum: "17",
    press: "110",
  },
];
*/

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  link: {
    color: theme.palette.info.dark,
  },
}));


export default function Rooms() {
  const classes = useStyles();

  // API fetch rooms
  const [rooms, setRooms] = useState([]);

  const getRooms = () => {
    axios.get('/room/getRoomList').then((response) => {
      setRooms(response.data.data);
    })
      .catch((err) => {
        console.log("cannot load rooms" + err);
      });
  };

  useEffect(() => {
    getRooms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  // page
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography component="h4" variant="h4">
              Lista stanze
          </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {rooms.map(info => (
          <Grid item xs={12} key={info.roomName}>
            <RoomCard
              roomID={info._id}
              name={info.roomName}
              image={info.image}
              likes={info.upVote}
              temp={info.temp}
              hum={info.hum}
              press={info.press}
            />
          </Grid>
        ))}
      </Grid>

    </div>


  );
}