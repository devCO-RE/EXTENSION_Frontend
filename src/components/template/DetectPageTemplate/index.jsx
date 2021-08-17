import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: { marginTop: 80 },
  transferbtn: {
    marginTop: 50,
  },
});


function DetectPageTemplate({ setSpinnerConfig, setMainState }) {
  const classes = useStyles();
  function doStuffWithDom(domContent) {
    console.log("I received the following DOM content:\n" + domContent);
  }
  /* eslint-disable no-undef */
  const requestPdf = async () => {
    // A function to use as callback
    let queryOptions = { active: true, currentWindow: true };
    chrome.tabs.query(queryOptions, function (tabs) {
      var tab = tabs[0];
      chrome.tabs.sendMessage(tab.id, { text: "report_back" }, doStuffWithDom);
    });
    setMainState("progress");
    setSpinnerConfig({text: "파일 변환 중 입니다...", time: 20});
  };
  return (
    <div className={classes.root}>
      <Typography variant="subtitle1">악플이 감지되었습니다!!</Typography>
      <br />
      <Typography variant="subtitle1">악플 내역을 파일로 변환 후 전송하시겠습니까?</Typography>
      <br />
      <Button
        className={classes.transferbtn}
        variant="contained"
        color="primary"
        onClick={requestPdf}
      >
        악플 내용을 파일로 변환하기
      </Button>
    </div>
  );
}

export default DetectPageTemplate;