import React, { useState } from "react";
import {
  Button,
  Card,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Alert,
} from "reactstrap";

import { history } from "../App";

interface StateProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  uploadedFile: string;
}
export interface PreviewPageProps {
  state: StateProps;
  setState: (arg: StateProps) => void;
}
const PreviewPage: React.FunctionComponent<PreviewPageProps> = ({
  state,
  setState,
}) => {
  const [edit, onEdit] = useState(false);
  console.log("edit", edit);
  const [error, toggleError] = useState(false);
  const {
    firstName,
    lastName,
    email,
    uploadedFile,
    confirmPassword,
    password,
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
    <Card>
      {!edit && (
        <>
          <div>
            <div>First Name: </div>
            <div>{firstName}</div>
          </div>
          <div>
            <div>Last Name: </div>
            <div>{lastName}</div>
          </div>
          <div>
            <div>Email: </div>
            <div>{email}</div>
          </div>
          <div>
            <div>Uploaded File: </div>
            <img src={uploadedFile} height={150} width={150} />
          </div>
        </>
      )}
      {edit && (
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input
              onChange={handleInputChange("firstName")}
              placeholder="Enter First Name..."
              value={firstName}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Last Name</Label>
            <Input
              onChange={handleInputChange("lastName")}
              placeholder="Enter Last Name..."
              value={lastName}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              onChange={handleInputChange("email")}
              type="email"
              placeholder="Please write an email"
              value={email}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              onChange={handleInputChange("password")}
              placeholder="Please enter password"
              value={password}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="confirmPass">Confirm Password</Label>
            <Input
              type="password"
              onChange={handleInputChange("confirmPassword")}
              placeholder="Please re-enter password"
              value={confirmPassword}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleFile">File</Label>
            <Input
              accept="image/x-png,image/gif,image/jpeg"
              type="file"
              name="file"
              id="exampleFile"
              onChange={handleImgUpload}
              required
            />
            <FormText color="muted">
              This is some placeholder block-level help text for the above
              input. It's a bit lighter and easily wraps to a new line.
            </FormText>
          </FormGroup>
          <img
            src={
              uploadedFile ? uploadedFile : "https://via.placeholder.com/150"
            }
            height={150}
            width={150}
          />
          <Button type="submit">Submit</Button>
          {error && <Alert color="danger">Passwords donot match!!</Alert>}
        </Form>
      )}
      <Button onClick={() => onEdit(true)}>Edit</Button>
    </Card>
  );
};

export default PreviewPage;
