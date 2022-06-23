import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Card, Button, Image } from "react-bootstrap";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export const Cartas = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <Card className="text-black" style={{ width: "45rem", height: "45rem" }}>
      <Card.Img
        className="imagen"
        style={{ height: "40rem" }}
        variant="top"
        src="https://lh3.googleusercontent.com/09N0-Q9MIMm7yGcdLIk7O5p7ZFGb_BgiY8IIV1SjAanirnh-81t39LfKtmGLRm5JmJ3_jTKBBnC9OtEp35aYlyEsyNRIKrdR99Gi4w=w1400-k"
      />
      <Card.Body className="d-flex justify-content-between">
        <Image
          style={{ width: "3rem", height: "3rem" }}
          src="https://lh3.googleusercontent.com/09N0-Q9MIMm7yGcdLIk7O5p7ZFGb_BgiY8IIV1SjAanirnh-81t39LfKtmGLRm5JmJ3_jTKBBnC9OtEp35aYlyEsyNRIKrdR99Gi4w=w1400-k"
        />
        <Card.Text>
          <b>Bored Ape Yacht Club</b>
          <br />
          Tako redpanda
        </Card.Text>
        <Button variant="none">
          <FontAwesomeIcon icon={faCircleInfo} />
        </Button>
      </Card.Body>
    </Card>
  );
};
