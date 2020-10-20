import React from "react";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import {Link} from 'react-router-dom'


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
  inPaper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  link: {
    color: theme.palette.info.dark,
  },
}));


export default function RoomCard(props) {
  const classes = useStyles(); 
    
  return (
    <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
              <CardMedia className={classes.image} image={props.image}>
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
                    <Grid item xs={12} sm={12} className={classes.inPaper}>
                        <Typography> 
                        Likes: &nbsp; {props.likes} # 
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} className={classes.inPaper}>
                        <Typography>
                        Descrizione: &nbsp; {props.description} 
                        </Typography>
                    </Grid>
                  </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.inPaper}>
              <Button className={classes.link} size="small" color="primary" component={Link} to={`/room/${props.roomID}`}> 
                  &nbsp; <Typography variant="button"> More info</Typography>
              </Button>
            </Grid>
        </Grid>
        </Grid>
    </Paper>
    );
}