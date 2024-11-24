// src/components/Cart.jsx
import React from "react";
import { styles } from "../styles/styles";

export function Cart({ cart, onRemoveFromCart }) {
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={styles.cart}>
      <h2>Meu Carrinho</h2>
      {cart.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} style={styles.cartItem}>
              {item.name} (x{item.quantity}) - R$ {item.price.toFixed(2)}
              <button
                style={styles.button}
                onClick={() => onRemoveFromCart(item.id)}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: R$ {totalPrice.toFixed(2)}</h3>
    </div>
  );
}
