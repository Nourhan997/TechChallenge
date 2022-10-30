import React from "react";

export function ResponseMessage(props) {
  const { message } = props;
  return (
    message && (
      <div className="message-space">
        <span className="message-content">{message}</span>
      </div>
    )
  );
}

export default ResponseMessage;
