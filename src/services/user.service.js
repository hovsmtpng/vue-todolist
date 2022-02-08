import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://94.74.86.174:8080/api/";

class UserService {
  getPublicContent() {
    return axios.get(API_URL + "checklist", { headers: authHeader() });
  }

  addChecklist() {
    return axios.post(
      API_URL + "checklist",
      { name: "hovely" },
      { headers: authHeader() }
    );
  }

  getChecklist() {
    return axios.get(API_URL + `checklist/${1}/item`, {
      headers: authHeader(),
    });
  }
}

export default new UserService();
