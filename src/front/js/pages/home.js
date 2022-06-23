import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Row, Col, Container } from "react-bootstrap";
import { Children } from "../component/children";
import { Cartas } from "../component/homecard";
import { Title } from "../component/hometitle";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <Container fluid className="mt-5">
      <Row>
        <Col>
          <Title />
        </Col>
        <Col>
          <Cartas />
        </Col>
      </Row>

      <Children />
      <Children />
    </Container>
  );
};
