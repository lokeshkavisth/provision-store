import { Formik } from "formik";
import SignInSchema from "../schemas/auth";
import Input from "../components/ui/Input";
import React from "react";
import { useNavigate } from "react-router-dom";
import storeAPI from "../api/storeAPI";
import sha256 from "crypto-js/sha256";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

const SignIn = () => {
  const [authError, setAuthError] = React.useState("");

  const navigate = useNavigate();
  const { setAuthData } = useAuth();

  const signIn = async ({ email, password }) => {
    const id = toast.loading("Please wait...", { position: "bottom-center" });
    const toastConfigs = {
      isLoading: false,
      position: "bottom-center",
      autoClose: true,
      closeButton: true,
    };
    try {
      const hashedPassword = sha256(password).toString();

      const formData = new FormData();
      formData.append("username", email);
      formData.append("password", hashedPassword);
      formData.append("grant_type", "password");

      // const data = `username=${email}&password=${hashedPassword}&grant_type=password`;

      const options = {
        method: "post",
        url: "https://apiv2stg.promilo.com/user/oauth/token",
        headers: {
          Authorization: "Basic UHJvbWlsbzpxNCE1NkBaeSN4MiRHQg==",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: formData,
      };

      const res = await storeAPI(options);
      setAuthData(res.data.response);

      // console.log("res", res);
      toast.update(id, {
        render: "Request is successful!",
        type: "success",
        ...toastConfigs,
      });
      navigate("/");
    } catch (error) {
      console.error(error);
      setAuthError(error.response.data.status.message);
      toast.update(id, {
        render: "Request is failed!",
        type: "error",
        ...toastConfigs,
      });
    }
  };

  return (
    <section
      className="grid place-items-center max-h-screen min-h-[80vh] mx-auto"
      style={{ maxWidth: "30rem" }}
    >
      <section className="w-full border border-gray-700 rounded-md md:p-8 p-4">
        <h1 className="mb-5 text-primary text-2xl font-bold">Account Login</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={SignInSchema}
          onSubmit={(values) => {
            signIn(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            dirty,
            isValid,
          }) => (
            <form onSubmit={handleSubmit} className="w-full">
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                htmlFor="Email*"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={errors.email && touched.email && errors.email}
              />

              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                htmlFor="Password*"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={errors.password && touched.password && errors.password}
              />
              <p className="text-red-500 mb-3">
                <small>{authError}</small>
              </p>

              <button
                disabled={!(isValid && dirty)}
                type="submit"
                className="btn btn-primary w-full"
              >
                Sign-in
              </button>
            </form>
          )}
        </Formik>
      </section>
    </section>
  );
};

export default SignIn;
