//UTILITIES
import React from "react";

//COMPONENT
import { NoDataFoundSVG } from "../../assets/icons/SVG";
//CSS
import "./ResponseMessages.scss";

export function NoDataFound(props) {
  return (
    <div className="no-data-found">
      <NoDataFoundSVG />
    </div>
  );
}

export default NoDataFound;
