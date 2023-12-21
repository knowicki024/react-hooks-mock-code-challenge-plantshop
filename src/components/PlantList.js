import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

  const plantCards = plants.map(eachPlant => <PlantCard key={eachPlant.id} plant={eachPlant} />);
  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
