import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Calendar from "./pages/Calendar";
import Chat from "./pages/Chat";
import Settings from "./pages/Settings";
import About from "./pages/About";


// needed to push content to right (not be covered by menu)
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));


function App() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  /* For menu show button */
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.container}>
      <Router>
        <Header mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>
        <Menu mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>

        <main className={classes.content}> {/* Content borders */}
          <div className={classes.toolbar} /> {/* Content nder the Header */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Rooms">
              <Rooms />
            </Route>
            <Route path="/Calendar">
              <Calendar />
            </Route>
            <Route path="/Chat">
              <Chat />
            </Route>
            <Route path="/Settings">
              <Settings />
            </Route>
            <Route path="/About">
              <About />
            </Route>
          </Switch>
          <Footer />
        </main>
        
      </Router>
    </div>
  );
}

export default App;
