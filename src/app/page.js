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
}
