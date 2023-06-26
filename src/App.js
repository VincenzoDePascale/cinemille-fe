import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Homepage from "./Components/Homepage/Homepage";
import UpdateFiles from "./Components/UpdateFiles/UpdateFiles";
import Menu from "./Components/Menu/Menu";
import Film from "./Components/Film/Film";
import Sale from "./Components/Sale/Sale";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app-container">
          <header>
            <Menu />
          </header>
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/film" element={<Film />} />
              <Route path="/sale" element={<Sale />} />
              <Route path="/updateFiles" element={<UpdateFiles />} />
            </Routes>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
