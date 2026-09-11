import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ImageSlot from '../components/ImageSlot';
import { brand } from '../brand';

export default function Cart() {
  const navigate = useNavigate();
  const { cartItems, cartSubtotal, removeFromCart } = useCart();
  const cartSubtotalLabel = '₹' + cartSubtotal.toLocaleString('en-IN');
  const { copy } = brand;

  return (
    <main style={{ display: 'flex', flexDirection: 'column', padding: '48px 64px 80px', gap: 32, maxWidth: 1000, margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
      <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 36, fontWeight: 400, margin: 0 }}>{copy.bagTitle}</h1>

      {cartItems.length === 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, padding: '80px 0' }}>
          <span style={{ fontSize: 15, color: 'var(--text-muted)', fontWeight: 300 }}>{copy.bagEmpty}</span>
          <button
            onClick={() => navigate('/collection')}
            style={{
              background: 'var(--text)',
              color: 'var(--bg)',
              border: 'none',
              padding: '14px 28px',
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: 0.6,
              cursor: 'pointer',
              borderRadius: 2,
              textTransform: 'uppercase',
            }}
          >
            {copy.browseAllCta}
          </button>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 48, alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {cartItems.map((ci) => (
              <div
                key={ci.cartIndex}
                style={{ display: 'grid', gridTemplateColumns: '90px 1fr auto', gap: 18, alignItems: 'center', paddingBottom: 20, borderBottom: '1px solid var(--border)' }}
              >
                <div style={{ position: 'relative', aspectRatio: '2/3' }}>
                  <ImageSlot src={ci.imgSrc} alt={ci.name} radius={4} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span style={{ fontSize: 14, fontWeight: 500 }}>{ci.name}</span>
                  <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 300 }}>
                    {ci.collectionName} &middot; No. {ci.numberInCollection} / 8 &middot; {ci.material}
                  </span>
                  <span onClick={() => removeFromCart(ci.cartIndex)} style={{ fontSize: 12, color: 'var(--accent)', cursor: 'pointer', marginTop: 4 }}>
                    Remove
                  </span>
                </div>
                <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 17 }}>{ci.priceLabel}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 6, padding: 24 }}>
            <h3 style={{ margin: 0, fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 400 }}>Order Summary</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
              <span style={{ color: 'var(--text-muted)', fontWeight: 300 }}>Subtotal</span>
              <span style={{ fontWeight: 500 }}>{cartSubtotalLabel}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
              <span style={{ color: 'var(--text-muted)', fontWeight: 300 }}>Shipping</span>
              <span style={{ fontWeight: 500 }}>Complimentary</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 15, paddingTop: 12, borderTop: '1px solid var(--border)' }}>
              <span style={{ fontWeight: 600 }}>Total</span>
              <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 18 }}>{cartSubtotalLabel}</span>
            </div>
            <button
              onClick={() => navigate('/checkout')}
              style={{
                background: 'var(--text)',
                color: 'var(--bg)',
                border: 'none',
                padding: 15,
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: 0.6,
                cursor: 'pointer',
                borderRadius: 2,
                marginTop: 6,
                textTransform: 'uppercase',
              }}
            >
              Proceed to Checkout
            </button>
            <span style={{ fontSize: 11, color: 'var(--text-faint)', textAlign: 'center', fontWeight: 300 }}>{copy.shipsWithCert}</span>
          </div>
        </div>
      )}
    </main>
  );
}
