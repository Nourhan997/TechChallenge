import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";

export const SideBarLayout = () => {
  return (
    <div className="side-bar-layout">
      <div className="side-bar-list">
        <Sidebar />
      </div>

      <div className="side-bar-children">
        <Outlet />
      </div>
    </div>
  );
};

export default SideBarLayout;
