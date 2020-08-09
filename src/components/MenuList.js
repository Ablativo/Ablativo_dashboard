import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TodayIcon from "@material-ui/icons/Today";
import ChatIcon from "@material-ui/icons/Chat";
import RoomIcon from "@material-ui/icons/Room";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";
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

      {/* Home & rooms */}
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
      </List>

      {/* Calendar & chat */}
      <Divider />
      <List>
        <ListItem button component={Link} to={"/Calendar"}>
          <ListItemIcon>
            <Badge badgeContent={"Soon"} color={"error"}>
              <TodayIcon />
            </Badge>
          </ListItemIcon>
          <ListItemText primary={"Calendar"} />
        </ListItem>

        <ListItem button component={Link} to={"/Chat"}>
          <ListItemIcon>
            <Badge badgeContent={"Soon"} color={"error"}>
              <ChatIcon />
            </Badge>
          </ListItemIcon>
          <ListItemText primary={"Chat"} />
        </ListItem>
      </List>

      {/* Settings & about */}
      <Divider />
      <List>
        <ListItem button component={Link} to={"/Settings"}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary={"Settings"} />
        </ListItem>

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
