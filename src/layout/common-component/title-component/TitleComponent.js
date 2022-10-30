import React from "react";

//COMPONENT
import palette from "../../../theme/color.scss";
import { BackIcon } from "../../../assets/icons/SVG";
import { IconsButton } from "../../button/Button";

//CSS
import "./TitleComponent.scss";

export function TitleComponent(props) {
  const { back, endIcon, title, handleBack, handleEndAction } = props;
  return (
    <div className="page-title">
      <div
        className="start"
        style={{ color: back ? palette.primaryColor : "black" }}
      >
        {back ? (
          <>
            <div className="icon-space">
              <IconsButton icon={<BackIcon />} onClick={() => handleBack()} />
            </div>
            <div onClick={() => handleBack()} className="cursor-pointer">
              {title}
            </div>
          </>
        ) : (
          <>{title}</>
        )}
      </div>
      <div className="end">
        {handleEndAction ? (
          <IconsButton icon={endIcon} onClick={() => handleEndAction()} />
        ) : (
          endIcon
        )}
      </div>
    </div>
  );
}
export default TitleComponent;
