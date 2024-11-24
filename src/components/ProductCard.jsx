// src/components/ProductCard.jsx
import React from "react";
import { styles } from "../styles/styles";

export function ProductCard({ product, onAddToCart }) {
  return (
    <div style={styles.productCard}>
      <p>{product.name}</p>
      <p>R$ {product.price.toFixed(2)}</p>
      <button style={styles.button} onClick={() => onAddToCart(product)}>
        Adicionar ao Carrinho
      </button>
    </div>
  );
}
