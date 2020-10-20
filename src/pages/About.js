import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { makeStyles } from "@material-ui/core/styles";

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

export default function About() {
  const classes = useStyles();

  function TeamCard(props) {
    return (
      <Card variant="outlined">
        <CardMedia component="img" alt={props.name} image={props.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {props.role}
          </Typography>
          <br />
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            className={classes.link}
            href={props.link}
            size="small"
            color="primary"
          >
            <LinkedInIcon /> &nbsp; LinkedIn
          </Button>
        </CardActions>
      </Card>
    );
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Typography component="h4" variant="h4">
            {"Chi siamo"}
          </Typography>
          <br />
          <Typography>
            Musei, la casa delle muse, alcuni li amano, ma per altri non sono altro
            che una noise collezione di statue. La nostra applicazione, Ablativo, 
            vuole portare anche questi ultimi ad apprezzare il magnifico mondo dei musei.
          </Typography>
          <br />
          <Typography>
            Noi siamo tre ingegneri informatici e studenti del MSc in 
            engineering in computer science a "La Sapienza" University of Rome
            e questo progetto è stato sviluppato come parte del corso in 
            Internet of Things 2019-2020. Qui puoi trovare i nostri profili Linkedin
          </Typography>
          <br />

          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <TeamCard
                name="Fabio Caputo"
                image="images/Fabio.jpg"
                role="Mobile app & Chatbot"
                link="https://www.linkedin.com/in/fabio-caputo-41163b171"
                description="NS12 Developer since 2019. Attending MSc in Engineering in Computer Science student at Sapienza University of Rome."
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TeamCard
                name="Manuel Ivagnes"
                image="images/manuel.jpg"
                role="Embedded devices & Analytics dashboard"
                link="https://www.linkedin.com/in/manuel-ivagnes-4a5ba018b"
                description="Graduated computer engineer. Attending MSc in Engineering in Computer Science at Sapienza University of Rome.      "
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TeamCard
                name="Valerio Coretti"
                image="images/Valerio.jpg"
                role="Data management & processing"
                link="https://www.linkedin.com/in/valerio-coretti-2913721a3"
                description="Graduated computer engineer. Attending MSc in Engineering in Computer Science at Sapienza University of Rome.     "
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
