import { Row, Container, Button } from "react-bootstrap";
import "./Homepage.scss";
import theSpace from "../../Assets/img/theSpace.jpg";
import { useEffect, useState } from "react";
import CardProgrammazione from "./CardProgrammazione";
import moment from "moment/moment";

const Homepage = () => {
  const [allProgrammazioni, setAllProgrammazioni] = useState([]);

  //fetch che prende tutte le programmazioni

  // const getAllProgrammazioni = async () => {
  //   try {
  //     const response = await fetch("http://localhost:8080/api/programmazione", {
  //       method: "GET",
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       setAllProgrammazioni(data);
  //     } else {
  //       // gestione dell'errore
  //     }
  //   } catch (error) {
  //     // gestione dell'errore
  //   }
  // };
  //
  // useEffect(() => {
  //  getAllProgrammazioni();
  //}, []);

  //fetch che prende le programmazioni in un lasso di tempo

  const [startDate, setStartDate] = useState(moment().format("YYYY-MM-DD"));
  const [endDate, setEndDate] = useState(
    moment().add(moment.duration(1, "W")).format("YYYY-MM-DD")
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setStartFetch(true);
  };

  const [startFetch, setStartFetch] = useState(false);

  const getAllProgrammazioniRange = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/programmazione/dateRangeFine/${startDate}/${endDate}`,
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const data = await response.json();
        setAllProgrammazioni(data);
        setStartFetch(false);
      } else {
        // gestione dell'errore
      }
    } catch (error) {}
  };

  getAllProgrammazioniRange();

  useEffect(() => {
    if (startFetch) {
      getAllProgrammazioniRange();
    }
  }, [startFetch]);

  return (
    <>
      <Container fluid>
        <img
          className="immagineCinema"
          src={theSpace}
          alt={`immagine cinema`}
        ></img>

        <form className="inputDate" onSubmit={handleSubmit}>
          <label>
            data inizio proiezioni:{" "}
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>

          <label>
            data fine proiezioni:{" "}
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </label>
          <Button type="submit">Submit</Button>
        </form>
        <Row>
          <h2>Film in sala</h2>
        </Row>
        {!allProgrammazioni.length && (
          <div>attualmente non ci sono programmazioni</div>
        )}
        {allProgrammazioni.length > 0 && (
          <Row className="topFilm">
            {allProgrammazioni.map((p, index) => (
              <CardProgrammazione key={index} prog={p} />
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default Homepage;
