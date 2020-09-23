import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TodayIcon from "@material-ui/icons/Today";
import RoomIcon from "@material-ui/icons/Room";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
}));

export default function MenuList(props) {
  const classes = useStyles();

  return (
    <div>
      {/* necessary for content to be below app bar */}
      <div className={classes.toolbar} />

      <Divider />
      <List>
        <ListItem button component={Link} to={"/"}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={"Home"} />
        </ListItem>

        <ListItem button component={Link} to={"/Rooms"}>
          <ListItemIcon>
            <RoomIcon />
          </ListItemIcon>
          <ListItemText primary={"Rooms"} />
        </ListItem>

        <ListItem button component={Link} to={"/Calendar"}>
          <ListItemIcon>
            <Badge badgeContent={"Soon"} color={"error"}>
              <TodayIcon />
            </Badge>
          </ListItemIcon>
          <ListItemText primary={"Calendar"} />
        </ListItem>
      </List>

        <Divider />
      <List>
        <ListItem button component={Link} to={"/About"}>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary={"About"} />
        </ListItem>
      </List>
    </div>
  );
}
