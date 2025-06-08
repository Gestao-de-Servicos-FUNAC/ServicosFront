import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Deve ser um e-mail válido")
    .required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});

export type TLoginSchema = yup.InferType<typeof loginSchema>;
