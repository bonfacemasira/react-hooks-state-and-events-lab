import React, {useState} from "react";

function Item({ name, category }) {
  
  const [inCart, setInCart] = useState(false);
  const listItems = inCart ? "in-cart" : "";

  const displayText = inCart ? "Remove From Cart" : "Add to Cart";

  function addToCart() {
    setInCart(!inCart)
  }

  return (
    <li className={listItems}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>{displayText}</button>
    </li>
  );
}

export default Item;
