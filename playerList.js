import React from "react";
import Player from "./player";
import players from "./players";

const PlayersList = () => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;