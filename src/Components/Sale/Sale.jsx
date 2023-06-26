import { Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import CardSala from "./CardSala";

import "./Sale.scss";

const Sale = () => {
  const [allSale, setAllSale] = useState([]);

  const getAllSale = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/sala", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setAllSale(data);
      } else {
      }
    } catch (error) {
      // gestione dell'errore
    }
  };

  useEffect(() => {
    getAllSale();
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <h2>Le nostre sale</h2>
        </Row>
        <div>
          <Row>
            {!allSale.length && <p>attualmente non ci sono sale</p>}
            {allSale?.map((s, index) => (
              <CardSala key={index} sala={s} />
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Sale;
