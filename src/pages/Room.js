import React, { useEffect, useState }  from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
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
}));


export default function Room() {
  const classes = useStyles();
  const { id } = useParams()

  const [artworks, setArtworks] = useState([]);
  const [name, setName] = useState(null);
  let content = null;

  const getInfo = () => {  
    axios.get('/room/getRoomByID?roomID='+id).then((response) => {
      setArtworks(response.data.data[0].artworks);
      setName(response.data.data[0].roomName);
      console.log(response.data.data[0]);
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
          image={artwork.image}
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
            Lista opere in {name}
          </Typography>
        </Paper>
        </Grid>
        </Grid>
          
        {content}
    </div>
  );
}