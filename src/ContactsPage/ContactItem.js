import { useState } from "react";
import styled from "styled-components";
import { useAppData } from "../AppContext";
import remove from "../img/remove.svg";
import update from "../img/update.svg";
import { UpdateItem } from "./UpdateItem";

const StyledContactItem = styled.div`
  margin: 10px 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #e1e1ed;
  padding: 10px;
  border-radius: 10px;
`;

const ContactData = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-around;

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 40px;
    color: #4b4b7c;
  }
`;
const ContactImage = styled.div`
  cursor: pointer;
`;

export const ContactItem = ({ contact, key }) => {
  const [updateData, setUpdateData] = useState(false);
  const { removeContact } = useAppData();
  const { id, name, phone, email } = contact;
  return (
    <>
      <StyledContactItem key={key}>
        <ContactData>
          <p>{name}</p>
          <p> {phone}</p>
          <p> {email}</p>
        </ContactData>
        <ContactImage>
          <img
            src={update}
            alt="update"
            onClick={() => setUpdateData(!updateData)}
          />
          <img src={remove} alt="remove" onClick={() => removeContact(id)} />
        </ContactImage>
      </StyledContactItem>
      {updateData && (
        <UpdateItem
          id={id}
          name={name}
          phone={phone}
          email={email}
          updateData={setUpdateData}
        />
      )}
    </>
  );
};
