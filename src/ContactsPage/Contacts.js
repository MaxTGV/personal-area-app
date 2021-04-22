import { useState } from "react";
import styled from "styled-components";
import { useAppData } from "../AppContext";
import { AddItem } from "./AddItem";
import { AddItemForm } from "./AddItemForm";
import { ContactItem } from "./ContactItem";
import { Search } from "./Search";

const StyledContacts = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 16px;
  margin-top: 16px;
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(75, 75, 124, 0.05);
  border-radius: 16px;
`;

const FuncElements = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const Contacts = () => {
  const { contacts, addContacts } = useAppData();
  const [value, setValue] = useState("");
  const [isClicked, setIsClicked] = useState("");

  const onChange = (val) => {
    setValue(val);
  };

  const onClicked = (user) => {
    setIsClicked(!isClicked);
    addContacts(user);
  };

  const searchContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <StyledContacts>
      <FuncElements>
        <Search value={value} onChange={onChange} />
        <AddItem isClicked={setIsClicked} />
      </FuncElements>
      {isClicked && <AddItemForm onClicked={onClicked} />}
      {contacts &&
        searchContact.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
    </StyledContacts>
  );
};
