//UTILITIES
import React from "react";

//COMPONENT
import palette from "../../theme/color.scss";
import { IconsButton } from "../button/Button";
import { CloseIcon } from "../../assets/icons/SVG";
import { Snackbar, SnackbarContent } from "@mui/material";

export function ResponseSnackbar(props) {
  //VARIABLES
  const { message, onClose, error } = props;

  //FUNCTIONS
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    onClose();
  };

  //VARIABLES
  const action = (
    <React.Fragment>
      <IconsButton
        icon={
          <CloseIcon fill={error ? palette.redColor : palette.whiteColor} />
        }
        onClick={handleClose}
      />
    </React.Fragment>
  );

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={true}
      autoHideDuration={2000}
      action={action}
      message={message}
      onClose={() => handleClose()}
    >
      <SnackbarContent
        message={message}
        style={{
          backgroundColor: error ? palette.lightRedColor : palette.primaryColor,
          color: error ? palette.redColor : palette.whiteColor,
        }}
        action={action}
      ></SnackbarContent>
    </Snackbar>
  );
}

export default ResponseSnackbar;
