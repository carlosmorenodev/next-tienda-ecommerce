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
            <Image
              src={product.imagen}
              alt={product.nombre}
              width={300}
              height={300}
            />
            <h2 className={styles.productCardTitle}>{product.nombre}</h2>


            <p className={styles.productCardPrice}>{product.precio} €</p>
            <p className={styles.productCardDescription}>{product.descripcion}</p>

            <div className={styles.productCardLabels}>
              <ul>
                {product.etiquetas.map((etiqueta, index) => (
                  <li key={index}>
                    {etiqueta}
                  </li>
                ))}
              </ul>
            </div>
           
          </Link>
        ))}
      </main>
    </div>
  );
}
