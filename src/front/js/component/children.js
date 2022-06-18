import React from "react";
import { Interval } from "../component/carousel";
import { Col, Image } from "react-bootstrap";
import "../../styles/children.css";

export const Children = () => {
  return (
    <Interval show={3}>
      <Col sm={4} className="box">
        <Image
          src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-0.jpg?w=960&cbr=1&q=90&fit=max"
          style={{ width: "100%" }}
        />
      </Col>

      <Col sm={4} className="box">
        <Image
          src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F08%2Fcryptopunk-rental-protocol-nft-ethereum-blockchain-renft-0.jpg?w=960&cbr=1&q=90&fit=max"
          style={{ width: "100%" }}
        />
      </Col>
      <Col sm={4} className="box">
        <Image
          src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F01%2Fmigos-takeoff-bored-ape-yacht-club-mutant-nft-purchase-000.jpg?w=960&cbr=1&q=90&fit=max"
          style={{ width: "100%" }}
        />
      </Col>

      <Col sm={4} className="box">
        <Image
          src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F01%2Fmigos-takeoff-bored-ape-yacht-club-mutant-nft-purchase-000.jpg?w=960&cbr=1&q=90&fit=max"
          style={{ width: "100%" }}
        />
      </Col>

      <Col sm={4} className="box">
        <Image
          src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-0.jpg?w=960&cbr=1&q=90&fit=max"
          style={{ width: "100%" }}
        />
      </Col>

      <Col sm={4} className="box">
        <Image
          src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F08%2Fcryptopunk-rental-protocol-nft-ethereum-blockchain-renft-0.jpg?w=960&cbr=1&q=90&fit=max"
          style={{ width: "100%" }}
        />
      </Col>

      <Col sm={4} className="box">
        <Image
          src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F01%2Fmigos-takeoff-bored-ape-yacht-club-mutant-nft-purchase-000.jpg?w=960&cbr=1&q=90&fit=max"
          style={{ width: "100%" }}
        />
      </Col>
    </Interval>
  );
};
