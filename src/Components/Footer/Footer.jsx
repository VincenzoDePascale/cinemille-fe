import { Row, Col } from "react-bootstrap";
import { Button, Container, Form, Modal, Nav, Navbar } from "react-bootstrap";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <Row className="footer bg-gradient-dark">
        <Col md={6} lg={3}>
          <div className="titolo">Info e Contatti</div>
          <div className="content">via Roma a Firenze (FI)</div>
          <div className="content">FAQ</div>
          <div className="content">Contatti</div>
        </Col>
        <Col md={6} lg={3}>
          <div className="titolo">Il nostro cinema</div>
          <div className="content">Chi Siamo</div>
          <div className="content">Lavora con noi</div>
          <div className="content">Il nostro cimena</div>
        </Col>
        <Col md={6} lg={3}>
          <div className="titolo">Note legali</div>
          <div className="content">Privacy policy</div>
          <div className="content">Cookie policy</div>
          <div className="content">Condizioni di utilizzo</div>
          <div className="content">Regolamenti</div>
        </Col>
        <Col md={6} lg={3}>
          <div className="titolo">Social</div>
          <div className="content">Facebook</div>
          <div className="content">YouTube</div>
          <div className="content">Instagram</div>
        </Col>
      </Row>
    </>
  );
};

export default Footer;
