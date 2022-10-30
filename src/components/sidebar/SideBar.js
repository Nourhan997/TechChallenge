//UTILITIES
import React, { useState } from "react";

//COMPONENT
import { SideBarBackIcon } from "../../assets/icons/SVG";
import { StyledListNav } from "../../theme/ComponentTheme";
import { SideBarItems } from "../../core/variables/SideBarItems";
import CustomizedListItem from "../../layout/side-bar-component/CustomizedListItem";

import "./SideBar.scss";

export function SideBar(props) {
  //VARIABLES

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [minimizeSidebar, setMinimizeSidebar] = useState(false);

  //FUNCTIONS

  const handleSelectedIndex = (value) => {
    setSelectedIndex(value);
  };

  const handleMinimiseSidebar = (value) => {
    setMinimizeSidebar(value);
  };

  return (
    <StyledListNav
      disablePadding={true}
      component="nav"
      className="side-bar-container"
    >
      {SideBarItems.map((item, index) => (
        <CustomizedListItem
          key={item.id}
          item={item}
          index={index}
          selectedIndex={selectedIndex}
          handleSelectedIndex={handleSelectedIndex}
          length={SideBarItems.length}
          minimizeSidebar={minimizeSidebar}
          handleMinimiseSidebar={handleMinimiseSidebar}
        />
      ))} 
    </StyledListNav>
  );
}
export default SideBar;
