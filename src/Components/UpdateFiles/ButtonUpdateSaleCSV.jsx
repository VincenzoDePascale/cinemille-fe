import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

const ButtonUpdateSaleCSV = () => {
  const myProfile = useSelector((state) => state.main.myProfile);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const postProgrammazioniCSV = async (csv) => {
    try {
      const response = await fetch("http://localhost:8080/api/sala/saveCSV", {
        method: "POST",
        body: csv,
        headers: {
          Authorization: `Bearer ${myProfile?.accessToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        handleClose();
        // Gestione della risposta
      } else {
        // Gestione dell'errore
      }
    } catch (error) {
      // Gestione dell'errore
    }
  };

  const [file, setFile] = useState();

  const handleOnChange = (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    setFile(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postProgrammazioniCSV(file);
  };

  return (
    <>
      <Button onClick={handleShow}>Aggiorna Sale</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiorna Sale</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form encType="multipart/form-data" method="post">
            <input
              name="file"
              type="file"
              id="csvFileInput"
              accept=".csv"
              onChange={handleOnChange}
            />

            <Modal.Footer>
              <Button
                className="buttonModalSubmit"
                type="submit"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Importa
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ButtonUpdateSaleCSV;
