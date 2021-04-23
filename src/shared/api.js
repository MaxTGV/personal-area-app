//const server = process.env.REACT_APP_DATA_URL;

import { USERS } from "./appData";

export const fetchUsersList = () => {
  return USERS; //fetch(`https://jsonplaceholder.typicode.com/users/`).then((res) => res.json());
};
