import React from "react";
import { Card, Col } from "react-bootstrap";

import ddd from "../../Assets/img/3d.jpg";
import isense from "../../Assets/img/isense.jpg";
import imax from "../../Assets/img/imax.jpg";

import "./CardSala.scss";

const CardSala = ({ sala }) => {
  let imgSrc;

  if (sala?.tecnologiaSala?.tipo === "3D") {
    imgSrc = ddd;
  } else if (sala?.tecnologiaSala?.tipo === "isense") {
    imgSrc = isense;
  } else if (sala?.tecnologiaSala?.tipo === "imax") {
    imgSrc = imax;
  } else {
    imgSrc = sala;
  }

  return (
    <Col xs={6} md={4} lg={2}>
      <Card className="Card">
        {imgSrc && (
          <Card.Img
            className="img"
            variant="top"
            src={imgSrc}
            alt={`immagine ${sala?.tecnologiaSala?.tipo}`}
          />
        )}
        <Card.Body>
          <Card.Text>
            <span>
              sala {sala?.codiceIdentificativo}: capienza {sala?.capienza}.
            </span>{" "}
            <br />
            <span>
              tecnologia {sala?.tecnologiaSala?.tipo}:{" "}
              {sala?.tecnologiaSala?.descrizione}.
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardSala;
