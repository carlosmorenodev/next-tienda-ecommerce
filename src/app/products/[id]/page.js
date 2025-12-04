/* import React from 'react'

const page = () => {

    const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  console.log(products);

  return (
    <div>page</div>
  )
}

export default page */

import React from 'react';
import Image from 'next/image';
import styles from '../../page.module.css';

// This function fetches the data for a single product
async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch product');
  }
  return res.json();
}

// The page component is now async and receives params
const ProductDetailPage = async ({ params }) => {
  const { id } = params;
  const product = await getProduct(id);

  return (
    <main className={styles.main}>
      <div className={styles.productDetailCard}>
        <h1>{product.title}</h1>
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
          style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
        />
        <p className={styles.productDescription}>{product.description}</p>
        <p className={styles.productPrice}>${product.price}</p>
        <p>Category: {product.category}</p>
        <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
      </div>
    </main>
  );
};

export default ProductDetailPage;
