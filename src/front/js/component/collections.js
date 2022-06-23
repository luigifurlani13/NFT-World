import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Image,
} from "react-bootstrap";
import { Context } from "../store/appContext";

export const Collections = () => {
  const collectibles = [
    {
      number: "1",
      image:
        "https://nftnow.com/wp-content/uploads/2022/02/Doodles-Guide-Feature-Image.png",
      title: "Doodles",
    },
    {
      number: "2",
      image: "https://watcher.guru/news/wp-content/uploads/2021/08/unnamed.png",
      title: "Bored Ape Yacht Club",
    },
    {
      number: "3",
      image: "https://cdn.buttercms.com/vt6WzT0RUa6pj3R1L7DQ",
      title: "Dooplicator",
    },
    {
      number: "4",
      image: "https://miro.medium.com/max/1400/1*s1_A8JBfuq79d-cjVBuXFg.jpeg",
      title: "Azuki",
    },
    {
      number: "5",
      image:
        "https://openseauserdata.com/files/548e9b2e982dc738161895f1881b0974.jpg",
      title: "Coldfellas Official",
    },
    {
      number: "6",
      image:
        "https://i.gadgets360cdn.com/large/cryptopunk_6046_twitter_1634554177991.jpg",
      title: "CryptoPunks",
    },
  ];
  return (
    <Container fluid>
      {collectibles.map((item, i) => {
        return (
          <ListGroup key={i}>
            <ListGroup.Item action as="li" className="d-flex">
              <h1>{item.number}</h1>{" "}
              <Image
                style={{ width: "3rem", height: "3rem" }}
                src={item.image}
              />{" "}
              <h4>
                {item.title}
                <br /> Floor Price:
              </h4>
            </ListGroup.Item>
          </ListGroup>
        );
      })}
    </Container>
  );
};
