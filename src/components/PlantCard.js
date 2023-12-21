import React, {useState} from "react";
// import PlantList from "./PlantList";

function PlantCard({plant}) {

  const {name, image, price} = plant 
  const [inStock, setInStock] = useState(true)

  const handleToggle = () => {
    setInStock(!inStock)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={handleToggle} className="primary">In Stock</button>
      ) : (
        <button onClick={handleToggle}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
