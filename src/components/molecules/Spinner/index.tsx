import React, { useState, useEffect } from "react";
import { Backdrop, CircularProgress, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
    title: {
      color: "#fff",
      paddingRight: 20,
    },
  })
);
interface SpinnerProps {
  title: string;
  time: number;
}
function Spinner({ title, time }: SpinnerProps) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  useEffect(() => {
    setTimeout(() => {
      closeSpinner();
    }, time * 1000);
  }, []);
  const closeSpinner = () => {
    setOpen(false);
  };
  return (
    <Backdrop className={classes.backdrop} open={open}>
      <Typography variant="h6" className={classes.title}>
        {title}
      </Typography>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default Spinner;
