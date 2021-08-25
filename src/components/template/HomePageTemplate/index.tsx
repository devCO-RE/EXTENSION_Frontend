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
  isOpen: boolean;
}
interface HomePageProps {
  setSpinnerConfig: React.Dispatch<React.SetStateAction<SpinnerConfig>>;
  setMainState: React.Dispatch<React.SetStateAction<string>>;
  setIsBadWord: React.Dispatch<React.SetStateAction<boolean>>;
  curUrl: string;
}

function HomePageTemplate({
  setSpinnerConfig,
  setMainState,
  setIsBadWord,
  curUrl,
}: HomePageProps) {
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
    setSpinnerConfig({ text: "악플을 탐지하는 중 입니다...", time: 3, isOpen: true });
    fetch(`http://49.50.175.233:3000`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: curUrl }),
    })
      .then((response) => response.json())
      .then((data) => {
        setSpinnerConfig({
          text: "",
          time: 3,
          isOpen: false,
        });
        console.log(data);
        alert("탐색완료!");
        if (data.result === 1) setIsBadWord(true);
        setMainState("detect");
      });
  };

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1">현재 페이지에서 악플을 감지해 볼까요?!</Typography>
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
