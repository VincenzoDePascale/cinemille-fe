import { Button, Col, Container, Row } from "react-bootstrap";
import ButtonUpdateProgrammazioneCSV from "./ButtonUpdateProgrammazioneCSV";
import ButtonUpdateFilmCSV from "./ButtonUpdateFilmCSV";
import ButtonUpdateSaleCSV from "./ButtonUpdateSaleCSV";
import { useEffect, useState } from "react";
import CardFilm from "../Film/CardFilm";
import CardProgrammazione from "../Homepage/CardProgrammazione";

import "./UpdateFiles.scss";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const UpdateFiles = () => {
  const roles = useSelector((state) => state.main.myProfile.roles);

  const token = useSelector((state) => state.main.myProfile.accessToken);

  useEffect(() => {
    if (!roles || roles.filter((e) => e.id === 1).length === 0) {
      window.location.href = "/";
    }
  }, [roles]);

  const [allFilm, setAllFilm] = useState([]);
  const [allProgrammazioni, setAllProgrammazioni] = useState([]);

  // get all film

  const getAllFilm = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/film", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setAllFilm(data);
        setAllProgrammazioni([]);
      } else {
      }
    } catch (error) {
      // gestione dell'errore
    }
  };

  // get all programmazioni

  const getAllProgrammazioni = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/programmazione", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setAllProgrammazioni(data);
        setAllFilm([]);
      } else {
      }
    } catch (error) {
      // gestione dell'errore
    }
  };

  return (
    <>
      <Container fluid>
        <Row className="boxCaricamento">
          <h2>caricamento file</h2>
          <Col lg={4}>
            <ButtonUpdateFilmCSV />
          </Col>
          <Col lg={4}>
            <ButtonUpdateSaleCSV />
          </Col>
          <Col lg={4}>
            <ButtonUpdateProgrammazioneCSV />
          </Col>
        </Row>
        <Row className="boxLettura">
          <h2>caricamento dati in archivio</h2>
          <Col lg={6}>
            <Button onClick={getAllFilm}>tutti i film</Button>
          </Col>
          <Col lg={6}>
            <Button onClick={getAllProgrammazioni}>
              tutte le programmazioni
            </Button>
          </Col>

          <Row>
            {allFilm.length > 0 && (
              <>
                <h3>Elenco film</h3>
                <Row>
                  {allFilm?.map((f, index) => (
                    <CardFilm key={index} film={f} />
                  ))}
                </Row>
              </>
            )}
            {allProgrammazioni.length > 0 && (
              <>
                <h3>Elenco programmazioni</h3>
                <Row>
                  {allProgrammazioni.map((p, index) => (
                    <CardProgrammazione key={index} prog={p} />
                  ))}
                </Row>
              </>
            )}
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default UpdateFiles;
