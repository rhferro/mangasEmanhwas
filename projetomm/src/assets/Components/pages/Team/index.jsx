import { Col, Container, Image, Row } from "react-bootstrap";
import React from "react";

const Team = () => {
  return (
    <Container>
      <h1>Sobre Nós</h1>
      <Row>
        <Col xs={6} md={4}>
          <Image
            className="imgLogo"
            src="src\assets\img\img-team\programer-owner.jpg"
            roundedCircle
          />
        </Col>
        <Col>
          <br />
          <br />
          <p>Estudante de programação e implementador desse site.</p>
        </Col>
      </Row>
      <br /> <br />{" "}
      <Row>
        <Col>
          <br />

          <p>
            IA auxiliadora de temas para o site e possibilidades de abordagens
            aos clientes.
          </p>
        </Col>
        <Col xs={6} md={4}>
          <Image
            className="imgLogo"
            src="src\assets\img\img-team\gpt-logo.png"
            roundedCircle
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Team;
