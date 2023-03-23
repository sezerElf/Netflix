import React from "react";
import {
  Container,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";

export default function Head() {
  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">NETFLİX</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            <Nav.Link className="mt-2" href="/series">Diziler</Nav.Link>
            <Nav.Link className="mt-2" href="/movies">Filmler</Nav.Link>
            <Button href="/girisyap" className="ml-5" variant="outline-danger">
              Giriş Yap
            </Button>
            <Button href="/denemebaslat" variant="danger">Deneme Başlat</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
