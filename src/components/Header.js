import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme, drawerWidth = 240) => ({
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  log: {
    position: "absolute", 
    right: 15
  }
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        {/* Menu botton */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={props.handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>

        {/* App name */}
        <Typography variant="h5" noWrap>
          {"Ablativo dashboard"}
        </Typography>
        
        <div className={classes.log}>
          <AmplifySignOut />
        </div>
      </Toolbar>
    </AppBar>
  );
}
