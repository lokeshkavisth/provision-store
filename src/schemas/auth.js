import * as Yup from "yup";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("invalid email").required("email is required"),
  password: Yup.string()
    .min(8, "password must be at least 8 characters long")
    .matches(/[0-9]/, "password must contain at least one digit")
    .matches(/[a-z]/, "password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "password must contain at least one uppercase letter")
    .matches(/[^\w]/, "password must contain at least one special character")
    .required("password is required"),
});

export default SignInSchema;
