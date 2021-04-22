import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 3px 4px rgba(46, 49, 55, 0.05),
    0px 0px 2px rgba(46, 49, 55, 0.15);
`;

const HeaderItem = styled.span`
  border: 2px solid transparent;
  border-radius: 12px;
  padding: 5px 10px;
  &:hover {
    border: 2px solid #e1e1ed;
    box-shadow: 0px 3px 4px rgba(75, 75, 124, 0.05),
      0px 0px 2px rgba(75, 75, 124, 0.2);
  }
  &:active {
    box-shadow: inset 0px 1px 4px rgba(0, 0, 0, 0.25);
  }

  & a {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #4b4b7c;
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderItem>
        <Link to="/">Home</Link>
      </HeaderItem>
      <HeaderItem>
        <Link to="/login">Login</Link>
      </HeaderItem>
      <HeaderItem>
        <Link to="/contacts">Contacts</Link>
      </HeaderItem>
    </StyledHeader>
  );
};
