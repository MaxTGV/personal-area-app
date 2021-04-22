import styled from "styled-components";
import { Message } from "./Message";

const StyledHomePage = styled.div`
  margin: 100px auto;
  width: 80%;
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(75, 75, 124, 0.05);
  border-radius: 16px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomePage = () => {
  return (
    <StyledHomePage>
      <Message />
    </StyledHomePage>
  );
};
