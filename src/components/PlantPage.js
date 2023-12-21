import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
const API = "http://localhost:6001/plants"

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

useEffect(() => {
  fetch(API)
  .then(res => res.json())
  .then(setPlants)
}, [])

  const searchPlants = plants.filter(plant => {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const addNewPlant = (newPlant) => {
    setPlants([...plants, newPlant])
  }

  const handleSearch =(e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <main>
      <NewPlantForm API={API} onAddNewPlant={addNewPlant}/>
      <Search onSearch={handleSearch}/>
      <PlantList plants ={searchPlants} />
    </main>
  );
}

export default PlantPage;
