import { Col, Container, Image, Row } from "react-bootstrap";

import React from "react";
import "./style.css";

const About = () => {
  return (
    <Container>
      <Row className="w-100">
        <Col md={4}>
          <Image
            className="imgLogo"
            src="src\assets\img\logo\About_logo.png"
            roundedCircle
          />
        </Col>
        <Col md={6}>
          <h1>Sobre Nós</h1>

          <p>
            Somos uma loja de venda de mangás e manhwas usado voltados para o
            publico que deseja colecionar ou mesmo adquirir um produto que
            gostaria a preços mais em conta.
          </p>
          <p>Prezamos pelo respeito e valorização </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
