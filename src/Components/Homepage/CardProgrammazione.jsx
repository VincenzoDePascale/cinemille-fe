import { Card, Col } from "react-bootstrap";

import sala from "../../Assets/img/sala.jpg";

const CardProgrammazione = ({ index, prog }) => {
  let imgSrc;

  if (prog?.film?.immagine === "" || prog?.film?.immagine === null) {
    imgSrc = sala;
  } else {
    imgSrc = prog?.film?.immagine;
  }

  return (
    <>
      <Col xs={12} md={6} lg={4}>
        <Card>
          <Card.Img
            variant="top"
            src={imgSrc}
            alt={`immagine ${prog?.film?.titolo}`}
          />
          <Card.Body>
            <Card.Title>titolo film: {prog?.film?.titolo}</Card.Title>
            <Card.Text>
              autore: {prog?.film?.autore}, genere: {prog?.film?.genere?.genere}
            </Card.Text>
            <Card.Text>descrizione film: {prog?.film?.descrizione}</Card.Text>
            <Card.Text>
              sala: {prog?.sala?.codiceIdentificativo}, ore: {prog?.orario}
            </Card.Text>
            <Card.Text>durata: {prog?.film?.minuti} minuti</Card.Text>
            <Card.Text>
              in sala <br /> dal: {prog?.dataInizioProgrammazione} <br /> al:{" "}
              {prog?.dataFineProgrammazione}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CardProgrammazione;
