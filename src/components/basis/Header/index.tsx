import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { getUserInfo } from "../../../utils";

import "./style.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    bar: {
      minHeight: 50,
    },
    userButton: {
      position: "absolute",
      right: 30,
      // float: "right",
    },
    userIcon: { paddingLeft: 10 },
    title: {
      flexGrow: 1,
    },
  })
);

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position="static">
        <Toolbar className={classes.bar}>
          <Typography variant="h6" className={classes.title}>
            Header
          </Typography>
          <Button className={classes.userButton} color="inherit">
            {getUserInfo()} 님
            <AccountCircleIcon className={classes.userIcon} fontSize="large" />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
