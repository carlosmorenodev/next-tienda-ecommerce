/* import Image from "next/image";
import styles from "./page.module.css";


export default async function Home() {



  async function getData() {
    const res = await fetch('https://fakestoreapi.com/products', { cache: 'no-store' }); // <--- Cambio aquí
  
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
  
    return res.json();
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div>
              <h1>{product.title}</h1>
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
              />
              
            </div>
          </div>
        ))}
      </main>
    </div>
  );
} */

  // src/app/page.js

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

// La función del componente ahora es async para poder usar await directamente.
export default async function Home() {
  
  // Hacemos la llamada a la API aquí.
  // Usamos { cache: 'no-store' } para evitar errores de pre-renderizado en Vercel.
  const res = await fetch('https://fakestoreapi.com/products', { cache: 'no-store' });
  
  if (!res.ok) {
    // Esto mostrará un error si la API falla.
    throw new Error('Failed to fetch data');
  }
  
  const products = await res.json();

  return (
    <main className={styles.main}>
      {products.map((product) => (
        // Cada producto es un enlace a su página de detalle
        <Link href={`/products/${product.id}`} key={product.id} className={styles.productCard}>
          <div className={styles.imageContainer}>
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              style={{ objectFit: 'contain' }}
            />
          </div>
          <h1 className={styles.productTitle}>{product.title}</h1>
          <p className={styles.productPrice}>${product.price}</p>
        </Link>
      ))}
    </main>
  );
}

