import React, { useEffect, useState }  from "react";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
//import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { axios } from '../axios';


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
  image: {
    width: 400,
    height: 200,
    margin: "3px",
    borderRadius: "5px"
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

  // cards for rooms
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
                      Likes: &nbsp; {props.likes} #
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} className={classes.inPaper}>
                    <Typography>
                      Temperatura: &nbsp; {props.temp} °C{" "}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} className={classes.inPaper}>
                    <Typography>
                      Umidità: &nbsp; {props.hum} %
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} className={classes.inPaper}>
                    <Typography> 
                      Pressione: &nbsp; {props.press} mBar 
                    </Typography>
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

  // API fetch data
  const [rooms, setRooms] = useState([]);

  const getRooms = () => {  
    axios.get('/room/getRoomList').then((response) => {
      setRooms(response.data.data);
      console.log(response.data.data);
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
    
    <Grid container spacing={3}>

      {rooms.map(info => (
        <Grid item xs={12} key={info.roomName}>
          <RoomCard
            name={info.roomName}
            image={info.image}
            likes={info.upVote}
            temp="temp"
            hum = "hum"
            press= "altro"

            /*
            image={info.image}
            likes={info.likes}
            temp={info.temp}
            hum={info.hum}
            press={info.press}
          */

          />
        </Grid>
      ))}

    </Grid>
  );
}