import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {


  const [plants, setPlants] = useState([]);
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(setPlants)
  }, [])

 const searchedPlant = plants.filter(plant => {
    return plant.name.toLowerCase().includes(searchValue.toLowerCase())
  })

  const addNewPlant = (newlyAddedPlant) => {
    setPlants([...plants, newlyAddedPlant])

  }
  const handleSearch = (e) => {
    setSearchValue(e.target.value)
    setPlants(searchedPlant)
  }





  return (
    <main>
      <NewPlantForm onAddNewPlant={addNewPlant}/>
      <Search onSearch={handleSearch}/>
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
