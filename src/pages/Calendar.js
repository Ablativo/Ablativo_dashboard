import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { makeStyles } from "@material-ui/core/styles";

// Test list for the preview
const exampleEvents = [
  {
    title: "Atena event",
    date: "2020-08-03",
    backgroundColor: "blue",
    borderColor: "white",
  },
  {
    title: "Zeus event",
    date: "2020-08-03",
    backgroundColor: "blue",
    borderColor: "white",
  },
  {
    title: "Supervisor check (private)",
    date: "2020-08-25",
    backgroundColor: "orange",
    borderColor: "white",
  },
  {
    title: "Close",
    date: "2020-08-15",
    backgroundColor: "red",
    borderColor: "white",
  },
];

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paperLeft: {
    padding: theme.spacing(3),
    color: theme.palette.text.secondary,
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Calendar() {
  const classes = useStyles();
  const vertical = "bottom";
  const horizontal = "right";

  return (
    <>
      <Snackbar open={true} anchorOrigin={{ vertical, horizontal }}>
        <Alert severity="warning">
          <Typography>
            { " Ciao, questa é solo una preview per la prossima release. Facci sapere se ti piace!" }
          </Typography>
        </Alert>
      </Snackbar>

      {/* Calendar */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography component="h4" variant="h4">
              {"Calendario"}
            </Typography>
            <br />
            {/* Chnage theme */}
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={exampleEvents} // For the preview
            />
          </Paper>
        </Grid>
      </Grid>

      {/* New events form */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paperLeft}>
            <Typography variant="h5" align="center">
              {"Aggiungi un evento"}
            </Typography>
            <br /> Il form sarà disponibile molto presto :)
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
