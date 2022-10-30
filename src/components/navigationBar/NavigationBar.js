//REACT
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import palette from "../../theme/color.scss";

//COMPONENT
import NoticeConfirmation from "../../layout/common-component/prompts-component/NoticeConfirmation";
import ResponseSnackbar from "../../layout/response-messages/ResponseSnackbar";
import { ChatIcon, UsersIcon } from "../../assets/icons/SideBarSVG";
import {
  Menu,
  MenuItem,
  Fade,
  List,
  IconButton,
  Tooltip,
  ListItemText,
} from "@mui/material";
import { SideBarDrawer, DrawerHeader } from "../../theme/ComponentTheme";
import { BurgerSVG } from "../../assets/icons/SideBarSVG";
import logo from "../../assets/logo/logo.svg";
//CSS
import "./NavigationBar.scss";
//API
import { UserLogout } from "../../core/services/login";

function NavigationBar(props) {

  const isAuth = sessionStorage.getItem("session") ? true : false;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openLogOut, setOpenLogOut] = useState(false);
  const open = Boolean(anchorEl);
  const [message, setMessage] = useState("");
  const [toggleSnackbar, setToggleSnackbar] = useState(false);
  const [error, setError] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(true);

  const navigate = useNavigate();

  //functions

  useEffect(() => {}, [isAuth]);
  const handleSideBar = () => {
    setOpenSideBar(!openSideBar);
  };

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorEl(null);
  };

  const handleAccountDetail = () => {
    handleProfileClose();
    navigate(`/account-detail`);
  };

  const handleLogout = () => {
    setOpenLogOut(true);
  };


  const handleLogOutResponse = (type) => {
    if (type === "yes") {
      handleProfileClose();
      UserLogout().then((response) => {
        if (response.data?.success) {
          sessionStorage.clear();
          navigate("/login");
        } else {
          setError(true);
          setMessage(response.data ? response.data.message : response.message);
          setToggleSnackbar(true);
        }
        setOpenLogOut(false);
      });
    } else {
      setOpenLogOut(false);
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="navigationBar">
        <div className="navigation-bar-container">
          <div className="logo">
            {isAuth && (
              <BurgerSVG
                onClick={handleSideBar}
                className="burger cursor-pointer"
              />
            )}
            <div>
              <img
                src={logo}
                alt="LOGO"
                onClick={() => (isAuth ? navigate("/") : navigate("/login"))}
              />
            </div>
          </div>

          <div className="side-item">
            {isAuth ? (
              <>
                {" "}
                <Tooltip
                  title="Coming Soon"
                  placement={"bottom-end"}
                  arrow={true}
                >
                  <div>
                    <IconButton disabled component="span">
                      <ChatIcon fill={palette.inputColor} />
                    </IconButton>{" "}
                  </div>
                </Tooltip>
                <div className="side-item-divider"></div>
                <IconButton
                  aria-controls={open ? "fade-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleProfileClick}
                  component="span"
                >
                  <UsersIcon />
                </IconButton>
                <Menu
                  id="fade-menu"
                  MenuListProps={{
                    "aria-labelledby": "fade-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleProfileClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={() => handleAccountDetail()}>
                    <ListItemText>Account Details</ListItemText>
                  </MenuItem>
                  <MenuItem onClick={() => handleLogout()}>
                    <ListItemText>LogOut</ListItemText>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <SideBarDrawer
        sx={{
          width: 300,
          flexShrink: 0,
        }}
        variant="persistent"
        anchor="left"
        open={openSideBar && isAuth}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <DrawerHeader className="drawer-header-container">
          <div className="text">
            <img src={logo} alt="LOGO" />
          </div>
          {isAuth && (
            <BurgerSVG
              onClick={handleSideBar}
              className="burger cursor-pointer"
            />
          )}
        </DrawerHeader>
      </SideBarDrawer>

      {toggleSnackbar && (
        <ResponseSnackbar
          message={message}
          error={error}
          onClose={() => {
            setToggleSnackbar(false);
            setError(true);
          }}
        />
      )}
      {openLogOut && (
        <NoticeConfirmation
          data={null}
          logout
          handleResponse={handleLogOutResponse}
        />
      )}
    </>
  );
}

export default NavigationBar;
