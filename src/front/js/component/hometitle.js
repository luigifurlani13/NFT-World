import React from "react";
import { Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export const Title = () => {
  return (
    <Col md={3}>
      <h1>Discover, collect, and sell extraordinary , NFTs</h1>
      <h2>OpenSea is the world's first and largest NFT marketplace</h2>
      <Button variant="primary">Explore</Button>
      <Button variant="none">Create</Button>
      <Button variant="none">
        {" "}
        <FontAwesomeIcon icon={faCirclePlay} />
        Learn more about OpenSea
      </Button>
    </Col>
  );
};
