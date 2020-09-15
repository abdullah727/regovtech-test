import React, { useState } from "react";
import { createBrowserHistory } from "history";
import { Route, Redirect, Router, Switch } from "react-router-dom";
import "./App.css";
import RegisterPage from "./components/registerPage";
import PreviewPage from "./components/previewPage";

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
        <Route exact path="/">
          <RegisterPage state={state} setState={setState} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
