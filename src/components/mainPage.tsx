import React, { useEffect } from "react";
import {
  Collapse,
  NavLink,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from "reactstrap";
import { history } from "../App";

export interface MainPageProps {}

const MainPage: React.FunctionComponent<MainPageProps> = () => {
  useEffect(() => {
    const isLogin = localStorage.getItem("email");
    if (!isLogin) history.push("/login");
  });
  const handleLogout = () => {
    localStorage.clear();
    history.push("/login");
  };
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarToggler />
        <Collapse isOpen={false} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
          </Nav>
          <NavbarBrand className="cursor-pointer" onClick={handleLogout}>
            Logout
          </NavbarBrand>
        </Collapse>
      </Navbar>
      <h1>Welcome to the Home Page</h1>
      <div>
        <span>Registeration Status:</span>
        <b>APPROVED</b>
      </div>
    </div>
  );
};

export default MainPage;
