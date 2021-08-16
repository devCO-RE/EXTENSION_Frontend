import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  DialogTitle,
  Dialog,
  Typography,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import { blue } from "@material-ui/core/colors";
import { classicNameResolver } from "typescript";

const emails = ["test@gmail.com", "user02@gmail.com", "soo@naver.com"];
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

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">전송할 사람을 선택해주세요!</DialogTitle>
      <List>
        {emails.map((email) => (
          <ListItem button onClick={() => handleListItemClick(email)} key={email}>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}
        <ListItem autoFocus button onClick={() => handleListItemClick("addAccount")}>
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem>
      </List>
    </Dialog>
  );
}
interface SpinnerConfig {
  text: string;
  time: number;
}
interface TransferPageProps {
  setSpinnerConfig: React.Dispatch<React.SetStateAction<SpinnerConfig>>;
  setMainState: React.Dispatch<React.SetStateAction<string>>;
}

function TransferPageTemplate({ setSpinnerConfig, setMainState }: TransferPageProps) {
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

  const handleClickTransfer = () => {
    setSpinnerConfig({ text: selectedValue + "님께 전송중...", time: 3 });
    setMainState("progress");
  };

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1">선택된 사람: {selectedValue}</Typography>
      <br />
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        자료 받을 사람 선택
      </Button>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
      <br />
      <Button
        className={classes.transferbtn}
        variant="contained"
        color="primary"
        onClick={handleClickTransfer}
      >
        전송
      </Button>
    </div>
  );
}

export default TransferPageTemplate;
