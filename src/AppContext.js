import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [contacts, setContacts] = useState();
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

  const addContacts = (user) => {
    setContacts([user, ...contacts]);
  };

  const updateContact = (user) => {
    const { id, name, phone, email } = user;
    const newContactsList = contacts.map((contact) => {
      if (contact.id === +id) {
        contact.name = name;
        contact.phone = phone;
        contact.email = email;
      }
      return contact;
    });
    setContacts(newContactsList);
  };

  const removeContact = (id) => {
    const newContactsList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactsList);
  };

  return (
    <AppContext.Provider
      value={{
        contacts,
        isLogged,
        userData,
        login,
        logout,
        setContacts,
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
