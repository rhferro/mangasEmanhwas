import NavigationBar from "./assets/components/NavigationBar";
import Footer from "./assets/components/Footer";
import MainContent from "./assets/components/MainContent";
import Publicity from "./assets/components/Publicity";
import About from "./assets/Components/pages/About/index.jsx";
import Products from "./assets/Components/pages/Products/index.jsx";
import Team from "./assets/Components/pages/Team/index.jsx";

import { Container, Row, Col } from "react-bootstrap";

import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <NavigationBar />

      <Container fluid>
        <Row>
          <Col xs={10} className="carrouselPosition">
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/about" element={<About />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/Team" element={<Team />} />
            </Routes>
          </Col>

          <Col>
            <Publicity />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
