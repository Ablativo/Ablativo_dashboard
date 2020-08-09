import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MenuList from "./MenuList"


const useStyles = makeStyles((theme, drawerWidth = 240) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  margin: {
    margin: theme.spacing(2),
  },
}));


export default function Menu(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <nav className={classes.drawer} aria-label="Menu">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

      {/* Mobile version */}
      <Hidden smUp implementation="css">
        
        <Drawer
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={props.mobileOpen}
          onClose={props.handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {<MenuList/>}
        </Drawer>
      </Hidden>

      {/* Double implementation depending on screen size */}
      {/* Pc version */}
      <Hidden xsDown implementation="css">
        <Drawer
          variant="persistent"
          open
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {<MenuList/>}
        </Drawer>
      </Hidden>

    </nav>
  );
}
