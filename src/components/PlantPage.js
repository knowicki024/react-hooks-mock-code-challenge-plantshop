import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(plants => setPlants(plants));
  }, []);

  const searchedPlants = plants.filter(plant => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const onAddNewPlant = (newlyAddedPlant) => {
    setPlants([...plants, newlyAddedPlant]);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <main>
      <NewPlantForm onAddNewPlant={onAddNewPlant} />
      <Search onSearch={handleSearch}/>
      <PlantList plants={searchedPlants} />
    </main>
  );
}

export default PlantPage;
