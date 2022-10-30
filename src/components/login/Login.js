import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
//mui
import theme from "../../theme/SuperAdminTheme";
import { ThemeProvider } from "@mui/material/styles";
import {
  FormInput,
  FormPassword,
} from "../../layout/form-components/FormComponents";
import CustomForm from "../../layout/form/Form";
import { ResponseMessage } from "../../layout/response-messages/ResponseMessage";
import { PrimaryButton } from "../../layout/button/Button";
import {
  emailValidator,
  requiredValidator,
} from "../../core/validation/form-validations";
//CSS
import "./Login.scss";

//services
import { UserLogin } from "../../core/services/login";

function Login(props) {
  //VARIABLES
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formError, setFormError] = useState({
    email: "",
    password: "",
  });
  const [formValues, setFormValues] = useState({
    portal_id: 1,
    email: "",
    password: "",
  });

  //FUNCTIONS
  const toggleError = (field, message, boolean) => {
    setFormError({ ...formError, [field]: message });
  };

  const CheckFields = () => {
    let array = {
      ...formError,
      ...(formValues.email === "" &&
        formError.email === "" && { email: "Field is required" }),
      ...(formValues.password === "" &&
        formError.password === "" && { password: "Field is required" }),
    };
    setFormError(array);

    return Object.values(array).every((item) => item === "");
  };
  const handleSubmit = (e) => {
    e?.preventDefault();

    if (CheckFields()) {
      setLoading(true);
      UserLogin(formValues).then((response) => {
        sessionStorage.setItem("session", true);
        navigate(`/dashboard`);
        setLoading(false);
      });
    }
  };

  const keyDownHandler = (event) => {
    if (event.key === "Enter") {
      // 👇️ call submit function here
      event.preventDefault();
      handleSubmit(event);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [formValues]);
  return (
    <ThemeProvider theme={theme}>
      <div className="page-container">
        <div className="login-container">
          <div className="form-container">
            <CustomForm title="Login" onSubmit={handleSubmit}>
              <FormInput
                required
                name="email"
                label="Email"
                placeholder={"Enter email"}
                value={formValues.email}
                onChange={(value) => {
                  setFormValues({ ...formValues, email: value });
                  setErrorMessage("");
                }}
                validation={emailValidator}
                inputError={formError.email}
                toggleError={toggleError}
              />

              <FormPassword
                required
                name="password"
                label="password"
                placeholder={"Enter password"}
                value={formValues.password}
                onChange={(value) => {
                  setFormValues({ ...formValues, password: value });
                  setErrorMessage("");
                }}
                validation={requiredValidator}
                inputError={formError.password}
                toggleError={toggleError}
              />
              <div>
                <PrimaryButton
                  type="submit"
                  text="Login"
                  loading={loading}
                  disabled={loading ? true : false}
                />
              </div>
              <ResponseMessage message={errorMessage} />
            </CustomForm>
          </div>

          <div className="image-container">
         
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
export default Login;
