import React from "react";
import { Container } from "react-bootstrap";
import NavBar from "./NavBar";

function Layout({ children }) {
  return (
    <>
      <div className="d-flex flex-column p-2">
        <NavBar />
        <Container>
          <div>{children}</div>
        </Container>
      </div>
    </>
  );
}

export default Layout;
