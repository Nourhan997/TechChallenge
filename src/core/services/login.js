
import { login , Logout} from "./index";
import axios from "axios";


export const UserLogin = (data) => {
  return axios
    .post(login, data)
    .then((response) => {
      return true;
    })
    .catch((error) => {
      return error;
    });
};

export const UserLogout = () => {
  return axios
    .get(Logout)
    .then((response) => {
      return true;
    })
    .catch((error) => {
      return error;
    });
};
