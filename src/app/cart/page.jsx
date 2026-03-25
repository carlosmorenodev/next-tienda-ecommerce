"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../context/CartContext";
import styles from "./page.module.css";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  return (
    <div className={styles.cartContainer}>
      <h2>Tu Carrito</h2>
      
      {cartItems.length === 0 ? (
        <div className={styles.emptyCart}>
          <p>Tu carrito está vacío.</p>
          <Link href="/" className={styles.continueShopping}>
            Continuar comprando
          </Link>
        </div>
      ) : (
        <div className={styles.cartContent}>
          <div className={styles.cartItemsList}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <Image
                  src={item.imagen}
                  alt={item.nombre}
                  width={100}
                  height={100}
                  className={styles.itemImage}
                />
                <div className={styles.itemDetails}>
                  <h3>{item.nombre}</h3>
                  <p className={styles.itemPrice}>{item.precio} €</p>
                </div>
                <div className={styles.itemActions}>
                  <div className={styles.quantityControl}>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      +
                    </button>
                  </div>
                  <button 
                    className={styles.removeBtn}
                    onClick={() => removeFromCart(item.id)}
                  >
                    Eliminar
                  </button>
                </div>
                <div className={styles.itemSubtotal}>
                  <p>{(item.precio * item.quantity).toFixed(2)} €</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.cartSummary}>
            <h3>Resumen del pedido</h3>
            <div className={styles.summaryRow}>
              <span>Total:</span>
              <span className={styles.totalPrice}>{cartTotal.toFixed(2)} €</span>
            </div>
            <button className={styles.checkoutBtn}>
              Proceder al pago
            </button>
            <Link href="/" className={styles.continueShoppingLink}>
              Seguir comprando
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
