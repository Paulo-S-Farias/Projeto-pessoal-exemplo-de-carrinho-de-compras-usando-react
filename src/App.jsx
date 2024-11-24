// src/App.jsx
import React, { useState } from "react";
import { ProductList } from "./components/ProductList";
import { Cart } from "./components/Cart";
import { products } from "./data/products";
import { styles } from "./styles/styles";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Carrinho de Compras</h1>
      <ProductList products={products} onAddToCart={addToCart} />
      <Cart cart={cart} onRemoveFromCart={removeFromCart} />
    </div>
  );
}

export default App;
