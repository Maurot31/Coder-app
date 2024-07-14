import { object, string, ref } from "yup";

export const signupSchema = object().shape({
  email: string()
    .required("El correo electrónico es requerido")
    .email("El correo electrónico no es válido"),
  password: string()
    .required("La contraseña es requerida")
    .min(6, "La contraseña debe tener al menos 6 caracteres"),
  confirmPassword: string()
    .oneOf([ref("password")], "Las contraseñas no coinciden")
    .required("Confirma tu contraseña"),
});
