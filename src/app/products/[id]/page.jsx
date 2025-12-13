'use client'

import { useParams } from 'next/navigation'
import { products } from '@/lib/data'
import Link from 'next/link';

const ProductPage = () => {
    const params = useParams();
    const product = products.find(p => p.id === Number(params.id));

    if(!product) return <p>Producto no encontrado</p>

  return (
    <div>
        <h2>{product.nombre}</h2>
        <p>Precio: {product.precio}</p>
        <Link href={'/'}>Volver</Link>
    </div>
  )
}

export default ProductPage