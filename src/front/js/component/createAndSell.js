import React from "react";
import { Container, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { faShapes } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faTags } from "@fortawesome/free-solid-svg-icons";

export const CreateSell = () => {
  const infoArray = [
    {
      image: <FontAwesomeIcon icon={faWallet} />,
      title: "Set up your wallet",
      text: "Once you have set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the wallets we support.",
    },
    {
      image: <FontAwesomeIcon icon={faShapes} />,
      title: "Create your collection",
      text: "Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.",
    },
    {
      image: <FontAwesomeIcon icon={faImage} />,
      title: "Add your NFTs",
      text: "Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.",
    },
    {
      image: <FontAwesomeIcon icon={faTags} />,
      title: "List them for sale",
      text: "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!",
    },
  ];
  return (
    <Container fluid>
      <h3>Create and sell your NFTs</h3>
      <div className="d-flex">
        {infoArray.map((item, i) => {
          return (
            <Card key={i} style={{ width: "38rem" }}>
              <Card.Img src={item.image} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.text}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </Container>
  );
};
