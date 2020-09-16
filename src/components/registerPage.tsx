import React, { useState } from "react";
import { Button, Card, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import { history } from "../App";
interface StateProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  uploadedFile: string;
}
export interface RegisterPageProps {
  state: StateProps;
  setState: (arg: StateProps) => void;
}
const RegisterPage: React.FunctionComponent<RegisterPageProps> = (props) => {
  const [error, toggleError] = useState(false);
  const { state, setState } = props;
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    uploadedFile,
  } = state;

  const handleInputChange = (property: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => setState({ ...state, [property]: event.target.value });

  const handleImgUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setState({
        ...state,
        uploadedFile: URL.createObjectURL(event.target.files[0]),
      });
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toggleError(true);
    } else {
      history.push("/preview");
    }
  };
  return (
    <div className="container">
      <div className="d-flex col-12 justify-content-center align-items-center mt-5 text-white ">
        <Card className="text-center w-500 background-night p-4">
          <h1>Sign up</h1>
          <Form className="mt-5" onSubmit={handleSubmit}>
            <FormGroup className="d-flex">
              <Label className="col-3 mt-2" for="firstName">
                First Name
              </Label>
              <Input
                onChange={handleInputChange("firstName")}
                placeholder="Enter First Name..."
                value={firstName}
                className="col-9"
                required
              />
            </FormGroup>
            <FormGroup className="d-flex">
              <Label className="col-3 mt-2" for="lastName">
                Last Name
              </Label>
              <Input
                onChange={handleInputChange("lastName")}
                placeholder="Enter Last Name..."
                value={lastName}
                className="col-9"
                required
              />
            </FormGroup>
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
            <FormGroup className="d-flex">
              <Label className="col-3 mt-2" for="confirmPass">
                Confirm Password
              </Label>
              <Input
                type="password"
                onChange={handleInputChange("confirmPassword")}
                placeholder="Please re-enter password"
                value={confirmPassword}
                className="col-9"
                required
              />
            </FormGroup>

            <FormGroup className="d-flex">
              <Input
                accept="image/x-png,image/gif,image/jpeg"
                type="file"
                name="file"
                id="exampleFile"
                onChange={handleImgUpload}
                className="col-9"
                required
              />
            </FormGroup>
            <img
              src={
                uploadedFile ? uploadedFile : "https://via.placeholder.com/150"
              }
              height={150}
              width={150}
            />
            {error && <Alert color="danger">Passwords donot match!!</Alert>}
            <div className=" mt-4">
              <Button color="danger" type="submit">
                Register
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
