import React from 'react'

const page = () => {

    const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  console.log(products);

  return (
    <div>page</div>
  )
}

export default page