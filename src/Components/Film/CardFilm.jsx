import { Card, Col } from "react-bootstrap";

import cinepresa from "../../Assets/img/cinepresa.jpg";

const CardFilm = ({ film }) => {
  let imgSrc;

  if (film?.immagine === "" || film?.immagine === null) {
    imgSrc = cinepresa;
  } else {
    imgSrc = film?.immagine;
  }

  return (
    <>
      <Col xs={12} md={6} lg={4}>
        <Card>
          <Card.Img
            variant="top"
            src={imgSrc}
            alt={`locandina ${film?.titolo}`}
          />
          <Card.Body>
            <Card.Title>titolo: {film?.titolo}</Card.Title>
            <Card.Text>
              autore: {film?.autore}, <br />
              genere: {film?.genere?.genere}
            </Card.Text>
            <Card.Text>descrizione: {film?.descrizione}</Card.Text>

            <Card.Text>durata: {film?.minuti} minuti</Card.Text>
            <Card.Text>uscito il: {film?.dataUscita}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CardFilm;
