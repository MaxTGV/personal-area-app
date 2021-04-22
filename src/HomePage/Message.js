import styled from "styled-components";
import { useAppData } from "../AppContext";
import { Button } from "../shared/components/Button";

const StyledMessage = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 40px;
  color: #1f1f33;
  text-align: center;
`;

const HomePageButton = styled(Button)`
  width: 80%;
  margin: 10px 0px;
`;

export const Message = () => {
  const { userData, logout } = useAppData();
  return userData ? (
    <>
      <StyledMessage>{`Рады Вас видеть, ${userData.name}!`}</StyledMessage>
      <HomePageButton onClick={() => logout()} >Выйти</HomePageButton>
    </>
  ) : (
    <StyledMessage>{`Добро пожаловать в личный кабинет!
    Вы не авторизованы...`}</StyledMessage>
  );
};
