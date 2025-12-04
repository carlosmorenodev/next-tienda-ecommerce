import Image from "next/image";
import styles from "./page.module.css";

export default async function Home() {

  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  console.log(products);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {products.map((product) => (
          <div className={styles.productCard}>
            <div key={product.id}>
              <h1>{product.title}</h1>
              <img src={product.image} alt={product.title} />
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
