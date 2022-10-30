import React from "react";
import { Detector } from "react-detect-offline";
import PageNoConnection from "../../layout/response-messages/PageNoConnection";
const CheckConnection = (props) => {
  return (
    <>
      <Detector
        render={({ online }) =>
          online ? props.children : <PageNoConnection />
        }
      />
    </>
  );
};
export default CheckConnection;
