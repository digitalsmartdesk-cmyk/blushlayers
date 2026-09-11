import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { brand } from '../brand';

const navColor = (active) => (active ? 'var(--text)' : 'var(--text-muted)');

export default function Header() {
  const { pathname } = useLocation();
  const { cartItems } = useCart();

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '18px 52px',
        background: 'color-mix(in oklch, var(--bg) 94%, transparent)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <Link
        to="/"
        style={{
          cursor: 'pointer',
          fontFamily: "'Playfair Display',serif",
          fontSize: 24,
          fontWeight: 400,
          letterSpacing: 3,
          textTransform: 'uppercase',
          color: 'var(--text)',
        }}
      >
        {brand.wordmark}
      </Link>
      <nav style={{ display: 'flex', gap: 36, alignItems: 'center', fontSize: 13, fontWeight: 500, letterSpacing: 0.4 }}>
        <Link to="/" style={{ cursor: 'pointer', color: navColor(pathname === '/') }}>
          Home
        </Link>
        <Link to="/collection" style={{ cursor: 'pointer', color: navColor(pathname.startsWith('/collection') || pathname.startsWith('/product')) }}>
          {brand.nav.editLabel}
        </Link>
        <Link to="/ateliers" style={{ cursor: 'pointer', color: navColor(pathname === '/ateliers') }}>
          {brand.nav.atelierLabel}
        </Link>
        <Link
          to="/cart"
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, color: navColor(pathname === '/cart' || pathname === '/checkout') }}
        >
          Bag
          <span
            style={{
              background: 'var(--accent)',
              color: 'var(--bg)',
              fontSize: 11,
              fontWeight: 700,
              borderRadius: 999,
              minWidth: 18,
              height: 18,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 4px',
            }}
          >
            {cartItems.length}
          </span>
        </Link>
      </nav>
    </header>
  );
}
