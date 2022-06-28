import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Row, Col, Container } from "react-bootstrap";
import { Children } from "../component/children";
import { Cartas } from "../component/homecard";
import { Title } from "../component/hometitle";
import { Collections } from "../component/collections";
import { Trending } from "../component/trending";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <Container fluid className="mt-5">
      <Row>
        <Title />

        <Cartas />
      </Row>

      <Children />
      <Collections />
      <Trending />
      <Children />
    </Container>
  );
};
