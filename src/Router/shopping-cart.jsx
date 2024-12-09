
import { useState } from "react";

export function ShoppingCart() {
  
  
  const products = [
    { id: 1, name: "Apple", price: 1 },
    { id: 2, name: "Banana", price: 0.5 },
    { id: 3, name: "Orange", price: 0.8 },
  ];

  
  
  const [cart, setCart] = useState([]);

  
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  
  const delCart = (productToRemove) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productToRemove.id));
  };

  
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "20px",marginTop:"20px" }}>
      <h2>Shopping Cart</h2>

      <h3>Products:</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price.toFixed(2)}{" "}
            <button onClick={() => addToCart(product)} style={{marginRight:"10px",marginBottom:"10px"}}>Add to Cart</button>
            <button onClick={() => delCart(product)}>Delete from Cart</button>
          </li>
        ))}
      </ul>

      <h3>Cart:</h3>
      {cart.length > 0 ? (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty!</p>
      )}

      <h3>Total: {totalPrice.toFixed(2)}</h3>
    </div>
  );
}
