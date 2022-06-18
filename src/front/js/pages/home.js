import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Row } from "react-bootstrap";
import { Children } from "../component/children";
import { Cartas } from "../component/homecard";
import { Title } from "../component/hometitle";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="mt-5">
      <Row className="d-flex">
        <Title />
        <Cartas />
      </Row>

      <Children />
    </div>
  );
};
