import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useAppData } from "../AppContext";
import { Button } from "../shared/components/Button";
import { Form } from "../shared/components/Form";
import { Input } from "../shared/components/Input";

const StyledUpdateData = styled.div`
  margin: 0px auto;
  flex-direction: column;
  justify-content: center;
  border: 2px dotted #e3170a;
  padding: 10px;
  border-radius: 10px;
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 40px;
    color: #4b4b7c;
    text-align: center;
  }
`;

const FormUpdate = styled(Form)`
  flex-direction: row;
  input {
    margin-right: 5px;
  }
`;

const ButtonUpdate = styled(Button)`
  flex-direction: row;
  width: 80%;
  font-size: 14px;
`;

const InputID = styled(Input)`
  width: 15%;
  &:hover {
    border: 2px solid #e1e1ed;
  }
`;

export const UpdateItem = ({ id, name, phone, email, updateData }) => {
  const { register, handleSubmit } = useForm();
  const { updateContact } = useAppData();

  const onSubmit = handleSubmit((data) => {
    updateContact(data);
    updateData(false);
  });
  
  return (
    <StyledUpdateData>
      <h1>Редактирование данных</h1>
      <FormUpdate onSubmit={onSubmit}>
        <InputID {...register("id")} name="id" id="id" defaultValue={id} />
        <Input
          {...register("name")}
          name="name"
          id="name"
          defaultValue={name}
        />
        <Input
          {...register("phone")}
          name="phone"
          id="phone"
          defaultValue={phone}
        />
        <Input
          {...register("email")}
          name="email"
          id="email"
          defaultValue={email}
        />
        <ButtonUpdate>Изменить</ButtonUpdate>
      </FormUpdate>
    </StyledUpdateData>
  );
};
