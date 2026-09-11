import { Navigate, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { brand } from '../brand';

export default function Confirmation() {
  const navigate = useNavigate();
  const { lastOrder } = useCart();
  const { copy } = brand;

  if (!lastOrder) return <Navigate to="/" replace />;

  const totalLabel = '₹' + lastOrder.total.toLocaleString('en-IN');

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, padding: '100px 64px', textAlign: 'center' }}>
      <span
        style={{
          width: 52,
          height: 52,
          borderRadius: '50%',
          background: 'var(--accent)',
          color: 'var(--bg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 22,
        }}
      >
        &#10003;
      </span>
      <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 34, fontWeight: 400, margin: 0 }}>{copy.confirmedHeadline}</h1>
      <p style={{ fontSize: 14, color: 'var(--text-muted)', maxWidth: 400, margin: 0, fontWeight: 300, lineHeight: 1.7 }}>
        {copy.confirmedBody(lastOrder.orderNumber, totalLabel)}
      </p>
      <button
        onClick={() => navigate('/collection')}
        style={{
          background: 'var(--text)',
          color: 'var(--bg)',
          border: 'none',
          padding: '15px 30px',
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: 0.6,
          cursor: 'pointer',
          borderRadius: 2,
          marginTop: 10,
          textTransform: 'uppercase',
        }}
      >
        {copy.continueBrowsing}
      </button>
    </main>
  );
}
