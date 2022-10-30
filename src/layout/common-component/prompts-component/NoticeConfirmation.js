import React, { useState } from "react";
import { DialogContent, DialogActions } from "@mui/material";
import DialogCustomTitle from "../../dialog-component/DialogCustomTitle";
import { NoticeDialog } from "../../../theme/ComponentTheme";

import { PrimaryButton, SecondaryButton } from "../../button/Button";

//CSS
import "./Prompt.scss";

export function NoticeConfirmation(props) {
  //VARIABLES
  const { data, handleResponse, message, logout } = props;

  return (
    <NoticeDialog open={true}>
      <DialogCustomTitle title="" onClose={() => handleResponse("cancel")} />
      <DialogContent>
        <div className="delete-without-reason-prompt">
          <div>Notice</div>
          <div>
            {message
              ? message
              : `${`Are you sure you want to ${
                  logout ? "LOGOUT" : "DELETE"
                }`}?`}
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <SecondaryButton
          text="NO"
          onClick={() => {
            handleResponse("no", data);
          }}
        />
        <PrimaryButton
          text="YES"
          onClick={() => {
            handleResponse("yes", data);
          }}
        />
      </DialogActions>
    </NoticeDialog>
  );
}
export default NoticeConfirmation;
