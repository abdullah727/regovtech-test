import React, { useState } from "react";
import { createBrowserHistory } from "history";
import { Route, Redirect, Router, Switch } from "react-router-dom";
import "./App.css";
import RegisterPage from "./components/registerPage";
import PreviewPage from "./components/previewPage";
import Login from "./components/loginPage";
import MainPage from "./components/mainPage";

export const history = createBrowserHistory();

function App() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    uploadedFile: "",
  });
  return (
    <Router history={history}>
      <Switch>
        <Route path="/preview">
          <PreviewPage state={state} setState={setState} />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <RegisterPage state={state} setState={setState} />
        </Route>
        <Route exact path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
