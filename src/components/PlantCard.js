import React, {useState} from "react";

function PlantCard({plant}) {

  const { name, price, image } = plant
  const [inStock, setInStock] = useState(true)

  const handleToggle = () => setInStock(!inStock)

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
