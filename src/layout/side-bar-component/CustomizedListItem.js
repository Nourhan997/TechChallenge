//UTILITIES
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

//COMPONENT
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Tooltip,
} from "@mui/material";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export function CustomizedListItem(props) {
  //PROPS
  const {
    index,
    item,
    handleSelectedIndex,
    minimizeSidebar,
  } = props;
  //VARIABLES
  let navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      {!item.children && !item.route ? (
        <Tooltip title={"COMING_SOON"} placement={"right-end"} arrow={true}>
          <ListItem
            disablePadding={true}
            selected={
              !item.children &&
              window.location.pathname.startsWith(
                `/${item?.route}`
              )
            }
            key={`drawer${item.id}`}
          >
            <ListItemButton
              disabled={item.children ? false : item.route ? false : true}
              onClick={() => {
                handleSelectedIndex(index);

                if (item.children) {
                  handleOpen();
                } else {
                  navigate(`/${item.route}`);
                }
              }}
            >
              <ListItemIcon>{item?.icon}</ListItemIcon>
              {!minimizeSidebar && (
                <>
                  <ListItemText
                    primary={(item.text)}
                    primaryTypographyProps={{
                      style: { whiteSpace: "normal" },
                    }}
                  />
                  {item.children ? (
                    open ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )
                  ) : null}{" "}
                </>
              )}
            </ListItemButton>
          </ListItem>
        </Tooltip>
      ) : (
        <ListItem
          disablePadding={true}
          selected={
            !item.children &&
            window.location.pathname.startsWith(`${item?.route}`)
          }
          key={`drawer${item.id}`}
        >
          <ListItemButton
            disabled={item.children ? false : item.route ? false : true}
            onClick={() => {
              handleSelectedIndex(index);

              if (item.children) {
                handleOpen();
              } else {
                navigate(`${item.route}`);
              }
            }}
          >
            <ListItemIcon>{item?.icon}</ListItemIcon>
            {!minimizeSidebar && (
              <>
                <ListItemText
                  primary={(item.text)}
                  primaryTypographyProps={{
                    style: { whiteSpace: "normal" },
                  }}
                />
                {item.children ? open ? <ExpandLess /> : <ExpandMore /> : null}{" "}
              </>
            )}
          </ListItemButton>
        </ListItem>
      )}
      {item.children && (
        <Collapse in={open} timeout="auto" unmountOnExit key={item.id}>
          {item.children.map((sub_item, subindex) => {
            return (
              <div key={subindex}>
                <ListItemButton
                  disabled={sub_item.route ? false : true}
                  selected={window.location.pathname.includes(
                    `/${sub_item.route}`
                  )}
                  sx={{ pl: 4 }}
                  onClick={() => {
                    // handleMinimiseSidebar(false);
                    navigate(`/${sub_item.route}`);
                  }}
                >
                  <ListItemIcon>{sub_item.icon}</ListItemIcon>
                  <ListItemText
                    primary={(sub_item.text)}
                    primaryTypographyProps={{
                      style: { whiteSpace: "normal" },
                    }}
                  />
                </ListItemButton>
              </div>
            );
          })}
        </Collapse>
      )}
      <Divider />
    </>
  );
}

export default CustomizedListItem;
