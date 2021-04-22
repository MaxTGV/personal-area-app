import { Redirect } from "react-router";
import { useAppData } from "../AppContext";
import { Contacts } from "./Contacts";

export const ContactsPage = () => {
  const { isLogged } = useAppData();
  if (!isLogged) {
    return <Redirect to="/login" />;
  }
  return <Contacts />;
};
