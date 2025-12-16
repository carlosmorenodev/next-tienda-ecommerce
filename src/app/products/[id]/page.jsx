'use client'

import { useParams } from 'next/navigation'
import { products } from '@/lib/data'
import Link from 'next/link';
import Image from 'next/image';

import styles from './page.module.css'


const ProductPage = () => {
  const params = useParams();
  const product = products.find(p => p.id === Number(params.id));

  if (!product) return <p>Producto no encontrado</p>

  return (

    <div className={styles.productPageContainer} >
      <h2 className={styles.productPageTitle}>{product.nombre}</h2>

      {/* Contenedor Flex/Grid para imagen y detalles */}
      <div className={styles.productDetails}>

        {/* 1. Columna de Imagen */}
        <div>
          <Image
            className={styles.productPageImage}
            src={product.imagen}
            alt={product.nombre}
            // Es mejor usar 'fill' o dejar el 'width' y 'height' para Next/Image
            width={600}
            height={600}
          />
        </div>

        {/* 2. Columna de Detalles */}
        <div>
          <div className={styles.productPageLabelsContainer}>
            {product.etiquetas.map((etiqueta, index) => (
              // La 'key' debe ser única, usando índice + etiqueta es más seguro
              <div key={`${product.id}-${index}`} className={styles.productPageLabel}>
                {etiqueta}
              </div>
            ))}
          </div>

          <p className={styles.productPagePrice}>Precio: {product.precio}</p>

          <p className={styles.productPageDescription}>
            {product.descripcion}
          </p>

          {/* Contenedor para botones si quieres más control */}
          <div>
            <button className={styles.productPageBuyButton}>Comprar</button>
            <Link href={'/'} className={styles.backLink}>
              Volver a la lista
            </Link>
          </div>



        </div>

      </div>
    </div >


  )
}
export default ProductPage