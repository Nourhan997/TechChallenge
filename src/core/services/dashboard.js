//UTILITIES
import axios from "axios";
import { dashboard } from "./index";

export const GetDashboardData = () => {
  return axios
    .get(dashboard)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
