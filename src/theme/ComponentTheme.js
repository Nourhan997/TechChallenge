import "./variables.scss";
import { Menu, List, Drawer, Dialog } from "@mui/material";
import styled from "@emotion/styled";
import theme from "./SuperAdminTheme";
import { MobileOverBreakPoint } from "../core/variables/Variables";
import palette from "../theme/color.scss";

export const StyledFilterMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 4,
    marginTop: theme.spacing(1),
    minWidth: 280,
    maxWidth: 300,
    overflow: "visible",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",

    "& .MuiMenuItem-root": {
      cursor: "default",
      backgroundColor: "transparent",
    },
  },
}));

export const StyledListNav = styled(List)(() => ({
  "&.MuiList-root": {
    minHeight: "300px",
    width: "100%",
    // position: "fixed",
    maxHeight: "80vh",
    overflow: "overlay",
    whiteSpace: "nowrap",
    overflowX: "hidden",
    textOverflow: "ellipsis",

    "& .Mui-selected": {
      color: palette.primaryColor,
    },
  },
}));

export const SideBarDrawer = styled(Drawer)({
  "& .MuiDrawer-paper": {
    [theme.breakpoints.up(MobileOverBreakPoint)]: {
      display: "none",
    },
    // marginTop: "60px",
    boxSizing: "border-box",
    maxWidth: "300px",
    minHeight: "300px",
    height: "fit-content",
    maxHeight: "100vh",
    fontSize: "18px",
    overflow: "overlay",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflowX: "hidden",
    overflowY: "auto",
    padding: "10px",
  },
  "& .Mui-selected": {
    color: palette.primaryColor,
  },
});

export const DrawerHeader = styled("div")({
  display: "flex",
  alignItems: "center",

  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
});

export const NoticeDialog = styled(Dialog)({
  "& .MuiDialogTitle-root": {
    border: "none",
    padding: "unset",
  },
});

