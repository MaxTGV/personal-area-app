import styled from "styled-components";
import { Input } from "../shared/components/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAppData } from "../AppContext";
import { useHistory } from "react-router";
import { Button } from "../shared/components/Button";
import { Form } from "../shared/components/Form";



const FormContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  margin-top: 16px;
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(75, 75, 124, 0.05);
  border-radius: 16px;

  button {
    margin-top: 16px;
  }
`;

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/[a-z, а-я]/i, "Только строковые значения")
    .required("Введите имя пользователя"),
  email: yup.string().email("Некорректный формат").required("Введите email"),
  password: yup.string().required("Введите пароль"),
});

export const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const { login } = useAppData();
  const history = useHistory();
  const disabled = watch("password");

  const onSubmit = (data) => {
    login(data);
    history.push("/");
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <Input
            {...register("name")}
            id="name"
            name="name"
            type="text"
            label="Username"
            error={!!errors.name}
            helperText={errors?.name?.message}
          />
          <Input
            {...register("email")}
            id="email"
            name="email"
            type="email"
            label="E-mail"
            error={!!errors.email}
            helperText={errors?.email?.message}
          />
          <Input
            {...register("password")}
            id="password"
            name="password"
            type="password"
            label="Пароль"
            error={!!errors.password}
            helperText={errors?.password?.message}
          />
          <Button disabled={!disabled}>Войти</Button>
        </FormContainer>
      </Form>
    </>
  );
};