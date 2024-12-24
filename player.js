import React from "react";
import { Card } from "react-bootstrap";

const Player = ({ name, team, nationality, shirtNumber, age, imageUrl }) => {
  const cardStyle = {
    width: "18rem",
    margin: "20px"
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={imageUrl} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Équipe:</strong> {team} <br />
          <strong>Nationalité:</strong> {nationality} <br />
          <strong>Numéro de maillot:</strong> {shirtNumber} <br />
          <strong>Âge:</strong> {age} ans
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
