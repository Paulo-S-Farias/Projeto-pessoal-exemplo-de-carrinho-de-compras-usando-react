// src/components/ProductList.jsx
import React from "react";
import { ProductCard } from "./ProductCard";
import { styles } from "../styles/styles";

export function ProductList({ products, onAddToCart }) {
  return (
    <div style={styles.products}>
      <h2>Produtos</h2>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}
