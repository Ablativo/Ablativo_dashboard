import React, { useEffect, useState }  from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FireplaceIcon from "@material-ui/icons/Fireplace";
import OpacityIcon from "@material-ui/icons/Opacity";
import SpeedIcon from '@material-ui/icons/Speed';
import TelemetryCard from ".././components/TelemetryCard";
import { makeStyles } from "@material-ui/core/styles";
import { axios } from '../axios';
import { useParams } from 'react-router-dom'
import ArtworkCard from "../components/ArtworkCard";


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  link: {
    color: theme.palette.info.dark,
  },
  icon: {
    width: 120,
    height: 100,
  },
}));


export default function Room() {
  const classes = useStyles();
  const { id } = useParams()

  const [name, setName] = useState(null);
  const [artworks, setArtworks] = useState([]);
  const [telemetries, setTelemetries] = useState([]);
  let content = null;

  const getInfo = () => {  
    axios.get('/room/getRoomByID?roomID='+id).then((response) => {
      setArtworks(response.data.data.artworks);
      setName(response.data.data.roomName);
      setTelemetries(response.data.data.telemetries)
      console.log(response.data.data);
    })
    .catch((err) => {
      console.log("cannot load rooms" + err);
    });
  };

  useEffect(() => {
    getInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (artworks) {
    content = 
    <Grid container spacing={3}>
    {artworks.map(artwork => (
      <Grid item xs={12} key={artwork.roomName}>
        <ArtworkCard
          artworkID={artwork._id}
          artist={artwork.artist}
          name={artwork.name}
          image={"../"+artwork.image}
          upVote={artwork.upVote}
          downVote={artwork.downVote}
          description={artwork.description}
        />
    </Grid>
    ))}
     </Grid>
  }
  
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography component="h4" variant="h4">
              {name}
          </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <TelemetryCard
            name="Temperature"
            image="../images/red.png"
            icon={<FireplaceIcon className={classes.icon} />}
            value={Math.round(telemetries.temp)}
            measure="°C"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TelemetryCard
            name="Humidity"
            image="../images/blue.png"
            icon={<OpacityIcon className={classes.icon} />}
            value={Math.round(telemetries.hum)}
            measure="%"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TelemetryCard
            name="Pressure"
            image="../images/yellow.png"
            value={Math.round(telemetries.press)} 
            measure="mBar"
            icon={<SpeedIcon className={classes.icon} />}
          />
        </Grid>
      </Grid>
          
      {content}
    </div>
  );
}