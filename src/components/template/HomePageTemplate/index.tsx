import React, { useState, useEffect } from "react";
import { makeStyles, Button, Typography } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: { marginTop: 80 },
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  transferbtn: {
    marginTop: 50,
  },
});

interface SpinnerConfig {
  text: string;
  time: number;
}
interface HomePageProps {
  setSpinnerConfig: React.Dispatch<React.SetStateAction<SpinnerConfig>>;
  setMainState: React.Dispatch<React.SetStateAction<string>>;
}

function HomePageTemplate({ setSpinnerConfig, setMainState }: HomePageProps) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(
    "파일 변환이 완료 되었습니다!"
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const handleClickForDetecting = () => {
    fetch("http://115.85.182.11:8080/material", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: selectedValue,
        file: "",
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    setSpinnerConfig({ text: selectedValue + "님께 전송중...", time: 3 });
    setMainState("progress");
  };

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1">아아아앙플감지이이</Typography>
      <br />

      <Button
        className={classes.transferbtn}
        variant="contained"
        color="primary"
        onClick={handleClickForDetecting}
      >
        악플 감지 시작!
      </Button>
    </div>
  );
}

export default HomePageTemplate;
