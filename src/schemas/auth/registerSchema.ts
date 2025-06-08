import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup
    .string()
    .email("Deve ser um e-mail válido")
    .required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
  confirmPassword: yup
    .string()
    .required("Campo obrigatório")
    .oneOf([yup.ref("password")], "As senhas não são iguais."),
});

export type TRegisterSchema = yup.InferType<typeof registerSchema>;
