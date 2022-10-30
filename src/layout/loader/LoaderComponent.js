//UTILITIES
import React from "react";

//COMPONENT
import { CircularProgress } from "@mui/material";

//CSS
import "./LoaderComponent.scss";

export function LoaderComponent(props) {
  return (
    <div className="loader-component">
      <CircularProgress color="primary" />
    </div>
  );
}

export default LoaderComponent;
