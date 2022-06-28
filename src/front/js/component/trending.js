import React from "react";
import { SplitButton, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faWallet,
  faFutbol,
  faCamera,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";

export const Trending = () => {
  return (
    <SplitButton title="Top collections over last 24 hours" variant="none">
      <Dropdown.Item eventKey="1">
        {" "}
        <FontAwesomeIcon icon={faMusic} /> Music
      </Dropdown.Item>
      <Dropdown.Item eventKey="2">
        {" "}
        <FontAwesomeIcon icon={faCamera} />
        Photography
      </Dropdown.Item>
      <Dropdown.Item eventKey="3">
        {" "}
        <FontAwesomeIcon icon={faFutbol} />
        Sports
      </Dropdown.Item>
      <Dropdown.Item eventKey="4">
        {" "}
        {/* <FontAwesomeIcon icon={faCards} /> */}
        Trading Cards
      </Dropdown.Item>
      <Dropdown.Item eventKey="5">
        {" "}
        <FontAwesomeIcon icon={faWallet} />
        Utility
      </Dropdown.Item>
      <Dropdown.Item eventKey="6">
        {" "}
        <FontAwesomeIcon icon={faEarthAmericas} />
        Virtual Worlds
      </Dropdown.Item>
    </SplitButton>
  );
};
