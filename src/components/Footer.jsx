"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--primary)',
      color: 'var(--primary-foreground)',
      padding: '4rem 2rem 2rem',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '2rem'
      }}>
        <div style={{ flex: '1 1 300px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Tienda Premium</h2>
          <p style={{ color: '#a1a1aa', lineHeight: '1.6', maxWidth: '400px' }}>
            Descubre nuestra colección exclusiva de productos diseñados con elegancia y funcionalidad.
          </p>
        </div>
        
        <div style={{ flex: '1 1 300px' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1.2rem', color: '#fff' }}>Contacto & Redes</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li>
              <a href="https://carlosmorenodev.vercel.app/" target="_blank" rel="noreferrer" style={{ color: '#a1a1aa', textDecoration: 'none', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '8px' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = '#a1a1aa'}>
                <span>🌐</span> Portfolio
              </a>
            </li>
            <li>
              <a href="mailto:carlosmorenomartindev@gmail.com" style={{ color: '#a1a1aa', textDecoration: 'none', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '8px' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = '#a1a1aa'}>
                <span>✉️</span> carlosmorenomartindev@gmail.com
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/carlosmorenomartindev/" target="_blank" rel="noreferrer" style={{ color: '#a1a1aa', textDecoration: 'none', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '8px' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = '#a1a1aa'}>
                <span>💼</span> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/carlosmorenodev" target="_blank" rel="noreferrer" style={{ color: '#a1a1aa', textDecoration: 'none', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '8px' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = '#a1a1aa'}>
                <span>💻</span> GitHub
              </a>
            </li>
            <li>
              <a href="https://codepen.io/carlosmmdev" target="_blank" rel="noreferrer" style={{ color: '#a1a1aa', textDecoration: 'none', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '8px' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = '#a1a1aa'}>
                <span>✍️</span> CodePen
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div style={{
        maxWidth: '1200px',
        margin: '3rem auto 0',
        paddingTop: '2rem',
        borderTop: '1px solid #3f3f46',
        textAlign: 'center',
        color: '#71717a',
        fontSize: '0.9rem'
      }}>
        © {new Date().getFullYear()} Tienda Premium - Creado por Carlos Moreno.
      </div>
    </footer>
  );
}
