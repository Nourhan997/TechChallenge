import React from "react";
import "./TitleComponent.scss";
import { BackIcon } from "../../../assets/icons/SVG";
import { IconsButton } from "../../button/Button";

export function SubTitleComponent(props) {
  const { back, endIcon, title, handleBack } = props;
  return (
    <div className="page-title">
      <div className="sub-start">
        {back ? (
          <div className="icon-space">
            <IconsButton icon={<BackIcon />} onClick={() => handleBack()} />
          </div>
        ) : (
          ""
        )}
        {(title)}
      </div>
      <div className="end">{endIcon}</div>
    </div>
  );
}
export default SubTitleComponent;
