import { Button, Container, Form, Modal, Nav, Navbar } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";

import "./Menu.scss";

const Menu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const token = useSelector((state) => state.main.myProfile.accessToken);

  console.log(token);

  // logica modale login

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //login

  const postLogin = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          //Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
          //"Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("questo è data della fetch LOGIN", data);
        dispatch({ type: "ADD_MY_PROFILE", payload: data });
        navigate("/updateFiles");
        handleClose();
      } else {
        alert("nome utente o password errati");
        // gestione dell'errore
      }
    } catch (error) {
      // gestione dell'errore
    }
  };

  const goToHome = () => {
    navigate("/");
  };

  const goToFilm = () => {
    navigate("/film");
  };

  const goToSale = () => {
    navigate("/sale");
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand onClick={goToHome}>CineMille</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={goToFilm}>film</Nav.Link>
            <Nav.Link onClick={goToSale}>sale</Nav.Link>
            <Button onClick={handleShow}>AreaRiservata</Button>
          </Nav>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il tuo username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Inserisci la tua email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Inserisci la tua password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
          <Button variant="primary" onClick={postLogin}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Menu;
