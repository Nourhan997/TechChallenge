import {
  DashboardIcon,
  SurveysIcon,
} from "../../assets/icons/SideBarSVG";

export const SideBarItems = [
  {
    id: "dashboard",
    text: "Dashboard",
    route: "/dashboard",
    icon: <DashboardIcon />,
  },
  {
    id: "admins",
    text: "Surveys",
    route: "/surveys",
    icon: <SurveysIcon />,
  },
];
