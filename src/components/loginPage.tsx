import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Card,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
  FormText,
} from "reactstrap";
import { history } from "../App";
export interface LoginProps {}
const dummyCredentials = {
  dummyEmail: "test@gmail.com",
  dummyPassword: "admin",
};
const Login: React.FunctionComponent<LoginProps> = () => {
  const [error, toggleError] = useState(false);
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = state;
  useEffect(() => {
    const isLogin = localStorage.getItem("email");
    if (isLogin) history.push("/");
  });
  const handleInputChange = (property: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => setState({ ...state, [property]: event.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { dummyEmail, dummyPassword } = dummyCredentials;
    if (email === dummyEmail && password === dummyPassword) {
      localStorage.setItem("email", email);
      history.push("/");
    } else {
      toggleError(true);
    }
  };
  return (
    <div className="container">
      <div className="d-flex col-12 justify-content-center align-items-center mt-5 text-white ">
        <Card className="text-center w-500 background-night p-4">
          <h1>Sign In</h1>
          <Form className="mt-5" onSubmit={handleSubmit}>
            <FormGroup className="d-flex">
              <Label className="col-3 mt-2" for="email">
                Email
              </Label>
              <Input
                onChange={handleInputChange("email")}
                type="email"
                placeholder="Please write an email"
                className="col-9"
                value={email}
                required
              />
            </FormGroup>
            <FormGroup className="d-flex">
              <Label className="col-3 mt-2" for="password">
                Password
              </Label>
              <Input
                type="password"
                onChange={handleInputChange("password")}
                placeholder="Please enter password"
                value={password}
                className="col-9"
                required
              />
            </FormGroup>
            <FormText color="muted">
              Email is "test@gmail.com" & Password is "admin"
            </FormText>
            {error && <Alert color="danger">Invalid Email or Password!!</Alert>}
            <div className=" mt-4">
              <Button color="danger" type="submit">
                Login
              </Button>
              <NavLink to="/register">
                <Button color="danger" className="ml-4">
                  Register
                </Button>
              </NavLink>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
