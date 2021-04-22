//const server = process.env.REACT_APP_DATA_URL;

export const fetchUsersList = () => {
  return fetch(`https://jsonplaceholder.typicode.com/users`).then((res) => res.json());
};
