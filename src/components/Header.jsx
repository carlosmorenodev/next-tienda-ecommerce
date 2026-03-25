"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { cartCount, cartTotal } = useCart();

  return (
    <header className="header" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: 'var(--navbar-height)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 5%',
      background: 'rgba(255, 255, 255, 0.75)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
      zIndex: 1000,
      transition: 'all 0.3s ease'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <h1 style={{ 
          margin: 0, 
          fontSize: '1.4rem', 
          fontWeight: 800,
          letterSpacing: '-0.5px',
          background: 'linear-gradient(135deg, #000 0%, #434343 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          <Link href="/">STUDIO STORE</Link>
        </h1>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        
        <Link 
          href="/cart" 
          style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'var(--primary)', 
            color: 'var(--primary-foreground)', 
            padding: '0.6rem 1.2rem', 
            borderRadius: 'var(--radius)',
            fontWeight: 600,
            fontSize: '0.9rem',
            boxShadow: '0 4px 14px 0 rgba(0,0,0,0.1)',
            transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 14px 0 rgba(0,0,0,0.1)';
          }}
        >
           <span style={{ fontSize: '1.1rem' }}>🛒</span> 
           <span>{cartCount}</span> 
           <span style={{ opacity: 0.3, margin: '0 0.1rem' }}>•</span>
           <span>{cartTotal.toFixed(2)} €</span>
        </Link>
      </div>
    </header>
  );
}
