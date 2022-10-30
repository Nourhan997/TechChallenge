import { DialogTitle, IconButton } from "@mui/material";
import { CloseIcon } from "../../assets/icons/SVG";
import React from "react";
import "./DialogCustomTitle.scss";

export function DialogCustomTitle(props) {

  const { title } = props;

  return (
    <>
      <DialogTitle>
        <div className="dialog-title-section">
          <div>{(title)}</div>
          <div>
            <IconButton aria-label="close" onClick={() => props.onClose()}>
              <CloseIcon />
            </IconButton>
          </div>
        </div>
      </DialogTitle>
    </>
  );
}
export default DialogCustomTitle;
