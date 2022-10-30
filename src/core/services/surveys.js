//UTILITIES
import axios from "axios";
import { surveys } from "./index";

export const GetAllSurveys = () => {
  return axios
    .get(surveys)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
