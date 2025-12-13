import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { products } from '@/lib/data'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {products.map((product) => (
          <Link
            href={`/products/${product.id}`}
            key={product.id}
            className={styles.productCard}
          >
            <div className={styles.productCardLabels}>
              <ul>
                {product.etiquetas.map((etiqueta, index) => (
                  // Es importante incluir una 'key' única cuando se usa map
                  // para crear una lista de elementos en React. Usar el 'index'
                  // es aceptable si la lista es estática y no cambia de orden.
                  <li key={index}>
                    {etiqueta}
                  </li>
                ))}
              </ul>
            </div>
            <h2 className={styles.productCardTitle}>{product.nombre}</h2>
            <Image
              src={product.imagen}
              alt={product.nombre}
              width={300}
              height={300}
            />
            <p className={styles.productCardPrice}>{product.precio}</p>
            <p className={styles.productCardDescription}>{product.descripcion}</p>

          </Link>
        ))}
      </main>
    </div>
  );
}
