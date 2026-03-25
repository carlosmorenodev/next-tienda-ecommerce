"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { products } from '@/lib/data'
import { useCart } from "../context/CartContext";

export default function Home() {
  const { addToCart } = useCart();
  const [notification, setNotification] = useState(null);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    addToCart(product);
    setNotification(`¡${product.nombre} añadido al carrito!`);
    
    // Ocultar notificación después de 3 segundos
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <div className={styles.page}>
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Diseño & Elegancia</h1>
          <p className={styles.heroDescription}>
            Descubre nuestra exclusiva colección de gadgets y accesorios diseñados para destacar en funcionalidad y estética.
          </p>
          <a href="#novedades" className={styles.heroButton}>
            Ver Colección
          </a>
        </div>
      </section>

      {/* Main Content Area */}
      <section id="novedades" className={styles.productsSection}>
        <h2 className={styles.sectionTitle}>Nuestras Novedades</h2>
        <main className={styles.main}>
          {products.map((product) => (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className={styles.productCard}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={product.imagen || "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop"}
                  alt={product.nombre}
                  fill
                  style={{ objectFit: 'cover' }}
                  className={styles.productImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className={styles.cardContent}>
                <h2 className={styles.productCardTitle}>{product.nombre}</h2>
                <p className={styles.productCardDescription}>{product.descripcion}</p>

                <div className={styles.productCardLabels}>
                  <ul>
                    {product.etiquetas.map((etiqueta, index) => (
                      <li key={index}>{etiqueta}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.priceWrapper}>
                  <span className={styles.productCardPrice}>{product.precio} €</span>
                </div>

                <button 
                  className={styles.addToCartButton}
                  onClick={(e) => handleAddToCart(e, product)}
                >
                  Añadir al carrito
                </button>
              </div>
            </Link>
          ))}
        </main>
      </section>

      {/* Pop-up de notificación */}
      {notification && (
        <div className={styles.notification}>
          {notification}
        </div>
      )}
    </div>
  );
}
