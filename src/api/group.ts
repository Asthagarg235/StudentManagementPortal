import axios from "axios";

import { Groups } from "../models/Groups";
import { BASE_URL, LS_LOGIN_TOKEN } from "./base";

interface GroupRequest {
    limit?: number;
    offset?: number;
    query?: string;
    status: "all-groups" | "favourite" | "archieved";
}

interface GroupResponse{
    data: Groups[];
}
export const fetchGroups = (
    data: GroupRequest
  ) => {
    const url = BASE_URL + "/groups";
    return axios
      .get(url, { params: data })
      .then((response) => {
        console.log(response.data.data);
        return response.data.data;
      })
      .catch((e) => console.log(e));
  };
