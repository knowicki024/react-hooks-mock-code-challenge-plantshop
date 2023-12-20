import React, {useState} from "react";

function NewPlantForm({plants, setPlants, handleAddPlant}) {

  const [newPlant, setNewPlant] = useState({
    name: "",
    image: "",
    price: ""
  });
  function addNewPlant(newPlant) {
    fetch("http://localhost:6001/plants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newPlant)
    }
  .then(res => res.json())
  .then(setPlants))

  }

  function handleChange(e) {
    setNewPlant({...newPlant, [e.target.name]: e.target.value});
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleChange}>
        <input 
        type="text" 
        name="name" 
        placeholder="Plant name" 
        value={newPlant.name}
        onChange={handleChange}
        />
        <input 
        type="text" 
        name="image" 
        placeholder="Image URL" 
        value={newPlant.image}
        onChange={handleChange}
        />
        <input 
        type="number"
         name="price" 
         step="0.01" 
         placeholder="Price" 
         value={newPlant.price}
         onChange={handleChange}
         />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
