//LAYOUT
import palette from "../../theme/color.scss";
import { Button, CircularProgress, IconButton } from "@mui/material";

//CSS
import "./Button.scss";

export const LinkButton = (props) => {
  const { className, startIcon, onClick, text, loading, color, deleteButton } =
    props;

  return (
    <Button
      variant="text"
      startIcon={startIcon ? startIcon : null}
      style={{
        color:
          color === "primary"
            ? palette.primaryColor
            : color === "secondary"
            ? palette.secondaryColor
            : "black",
      }}
      className={
        deleteButton
          ? `link-button delete-link-button ${className}`
          : `link-button default-link-button ${className}`
      }
      onClick={onClick}
    >
      {loading ? (
        <CircularProgress
          size={"1rem"}
          style={{ color: palette.primaryColor }}
        />
      ) : (
        <>{text}</>
      )}
    </Button>
  );
};

export const IconsButton = (props) => {
  const { className, onClick, icon } = props;
  return (
    <IconButton
      color="primary"
      className={
        className ? `my-icon-button-style ${className}` : "my-icon-button-style"
      }
      component="span"
      onClick={() => onClick()}
    >
      {icon}
    </IconButton>
  );
};

export const IconsTextButton = (props) => {
  const { className, onClick, endIcon, text, textColor } = props;
  return (
    <Button
      variant="text"
      endIcon={endIcon ? endIcon : null}
      color="secondary"
      style={{
        color: textColor === "secondary" ? palette.inputColor : "black",
      }}
      className={`link-button ${className ? className : ""}`}
      component="span"
      onClick={() => onClick()}
    >
      {text}
    </Button>
  );
};

export const PrimaryButton = (props) => {
  const { disabled, type, onClick, className, icon, text, loading } = props;

  return (
    <Button
      variant="contained"
      type={type ? type : "button"}
      onClick={onClick}
      disabled={disabled}
      className={!text ? `icon-button-style ${className}` : className}
      color="primary"
    >
      {loading ? (
        <CircularProgress
          size={"1rem"}
          style={{ color: palette.primaryColor }}
        />
      ) : (
        <>
          {icon && icon}
          {text ? text : ""}
        </>
      )}
    </Button>
  );
};
export const SecondaryButton = (props) => {
  const { type, onClick, className, startIcon, icon, text } = props;

  return (
    <Button
      variant="contained"
      onClick={onClick}
      color="secondary"
      className={className}
      startIcon={startIcon ? startIcon : null}
      type={type ? type : "button"}
    >
      {icon && icon}

      {text ? text : ""}
    </Button>
  );
};

export default { LinkButton, PrimaryButton, SecondaryButton, IconsButton };
