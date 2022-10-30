import * as React from "react";
import "./Form.scss";
export default function CustomForm(props) {
  const { formError, onSubmit, insideTab, removePadding, title, children } =
    props;

  return (
    <form
      className={
        insideTab
          ? "inside-tab-form"
          : removePadding
          ? "remove-padding"
          : "outside-tab-form"
      }
      onSubmit={(e) => onSubmit(e)}
    >
      <div>
        <p className="form-title">{title}</p>
      </div>
      <div className={"form-children"}>{children}</div>
    </form>
  );
}
