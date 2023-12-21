import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
const API = "http://localhost:6001/plants"

function PlantPage() {

  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(setPlants);
  }, []);

  const searchedPlants = plants.filter(eachPlant => {
    return eachPlant.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const onAddNewPlant = (newlyAddedPlant) => {
    setPlants([...plants, newlyAddedPlant])
  }
  const handleSearch =(e) => {
    setSearchTerm(e.target.value)
  }


  return (
    <main>
      <NewPlantForm 
        onAddNewPlant={onAddNewPlant} 
        API={API}
      />
      <Search 
        onSearch={handleSearch}
      />
      <PlantList 
        plants={searchedPlants}
      />
    </main>
  );
}

export default PlantPage;
