'use client'; // Los componentes de error DEBEN ser componentes de cliente.

import { useEffect } from 'react';
import styles from './page.module.css'; // Reutilizaremos algunos estilos.

export default function Error({ error, reset }) {
  useEffect(() => {
    // Puedes registrar el error en un servicio de seguimiento.
    console.error(error);
  }, [error]);

  return (
    <main className={styles.main} style={{ justifyContent: 'center', textAlign: 'center' }}>
      <div>
        <h2>¡Ups! Algo salió mal.</h2>
        <p>No pudimos cargar los productos en este momento. Es posible que haya un problema con la conexión.</p>
        <button
          onClick={
            // Intenta volver a renderizar la página.
            () => reset()
          }
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            cursor: 'pointer',
            marginTop: '20px',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '5px'
          }}
        >
          Intentar de nuevo
        </button>
      </div>
    </main>
  );
}
