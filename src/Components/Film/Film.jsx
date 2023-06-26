import { Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import CardFilm from "./CardFilm";

const Film = () => {
  const [allFilm, setAllFilm] = useState([]);

  const getAllFilm = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/film", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setAllFilm(data);
      } else {
      }
    } catch (error) {
      // gestione dell'errore
    }
  };

  useEffect(() => {
    getAllFilm();
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          {" "}
          <h2>I nostri Film</h2>
        </Row>
        <Row>
          {!allFilm.length && <div>attualmente non ci sono film</div>}
          {allFilm?.map((f, index) => (
            <CardFilm key={index} film={f} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Film;
