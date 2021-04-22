import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  const [userData, setUserData] = useState();

  const login = (user) => {
    setUserData(user);
    setIsLogged(true);
  };

  const logout = () => {
    setUserData();
    setIsLogged(false);
  };

  const addContacts = (data) => {
    setContacts([...contacts, data]);
  };

  const updateContact = () => {};

  const removeContact = ({ id }) => {
    const newContactsList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactsList);
  };

  const searchContact = ({ value, contacts }) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(value.toLowerCase())
    );
  };

  return (
    <AppContext.Provider
      value={{
        contacts,
        isLogged,
        userData,
        login,
        logout,
        searchContact,
        updateContact,
        addContacts,
        removeContact,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppData = () => useContext(AppContext);
