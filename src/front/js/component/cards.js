import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Component } from "react-bootstrap";

export const Cartas = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <Col>
      <Card
        className="bg-dark text-white orientacion"
        style={{ width: "45rem", height: "50rem" }}
      >
        <Card.Img
          className="imagen"
          style={{ height: "40rem" }}
          variant="top"
          src="https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_86916bb6.jpeg?region=304%2C0%2C1778%2C1000&width=1536"
        />
        <Card.Body>
          <Card.Title>Bored Ape Yacht Club</Card.Title>
          <Link to={"/information" + props.i}>
            <Button variant="primary">Learn More</Button>
          </Link>
          <Button
            className="heart"
            variant="warning"
            onClick={() => actions.favoritesInfo()}
          >
            <i className="far fa-heart" />
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

Cartas.propTypes = {
  i: PropTypes.string,
};
