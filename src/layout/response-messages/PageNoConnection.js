import * as React from "react";
import { NoConnectionSVG } from "../../assets/icons/SVG";
import "./ResponseMessages.scss";
export default function PageNoConnection() {
  return (
    <div className="no-connection-container">
      <div className="no-connection">
        {" "}
        <NoConnectionSVG />
        <div className="title">{("NO CONNECTION")}!</div>
        <div className="no-connection-sub-title">
          <div>{("PLEASE Check your Connection")}!</div>
          <div>{("YOU ARE OFFLINE NOW")}</div>
        </div>
      </div>
    </div>
  );
}
