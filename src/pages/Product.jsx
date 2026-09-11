import { useNavigate, useParams, Link } from 'react-router-dom';
import { EDIT_END, getProduct, getRelatedProducts, PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import ImageSlot from '../components/ImageSlot';
import useCountdown from '../hooks/useCountdown';
import { brand } from '../brand';

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { days } = useCountdown(EDIT_END);
  const { copy } = brand;

  const product = getProduct(id) || PRODUCTS[0];
  const related = getRelatedProducts(product);
  const daysLeftLabel = `${days} days left`;
  const thumbs = [1, 2, 3];

  const handleAddToCart = () => {
    addToCart(product.id);
    navigate('/cart');
  };

  return (
    <main style={{ display: 'flex', flexDirection: 'column', padding: '48px 64px 80px', gap: 36 }}>
      <div style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 300 }}>
        <Link to="/collection" style={{ cursor: 'pointer' }}>
          {copy.collectionCrumb}
        </Link>
        &nbsp;/&nbsp; {product.name}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 64, alignItems: 'start' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 14, minWidth: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {thumbs.map((n) => (
              <div key={n} style={{ position: 'relative', aspectRatio: '2/3' }}>
                <ImageSlot src={product.imgSrc} alt={`Detail shot ${n} — ${product.material}`} radius={4} />
              </div>
            ))}
          </div>
          <div style={{ position: 'relative', aspectRatio: '2/3' }}>
            <ImageSlot src={product.imgSrc} alt={product.name} radius={4} />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22, maxWidth: 460 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <span style={{ fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600, color: 'var(--accent)' }}>
              {product.collectionName} &middot; No. {product.numberInCollection} of 8
            </span>
            <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 36, fontWeight: 400, fontStyle: 'italic', margin: 0 }}>{product.name}</h1>
            <span style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 300 }}>
              {product.material} &middot; {product.colorway} &middot; {product.atelier}
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
            <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 28 }}>{product.priceLabel}</span>
            <span style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 300 }}>{copy.inclusiveOfTaxes}</span>
          </div>
          {product.lowStock && (
            <div
              style={{
                background: 'var(--lowstock-bg)',
                color: 'var(--accent)',
                fontSize: 13,
                fontWeight: 500,
                padding: '10px 14px',
                borderRadius: 2,
                width: 'fit-content',
              }}
            >
              {copy.lowStockLabel(product.stock)}
            </div>
          )}
          <p style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--text-body)', margin: 0, fontWeight: 300 }}>{product.description}</p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 11,
              padding: 20,
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 6,
            }}
          >
            {product.specs.map((row) => (
              <InfoRow key={row.label} label={row.label} value={row.value} />
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <button
              onClick={handleAddToCart}
              style={{
                flex: 1,
                background: 'var(--text)',
                color: 'var(--bg)',
                border: 'none',
                padding: 16,
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: 0.6,
                cursor: 'pointer',
                borderRadius: 2,
                textTransform: 'uppercase',
              }}
            >
              Add to Bag &mdash; {product.priceLabel}
            </button>
          </div>
          <span style={{ fontSize: 12, color: 'var(--text-faint)', fontWeight: 300 }}>
            Edit closes in {daysLeftLabel} &middot; {copy.closesSuffix}
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
            <h3 style={{ margin: 0, fontSize: 15, fontFamily: "'Playfair Display',serif", fontWeight: 400, fontStyle: 'italic' }}>{copy.theMakerHeading}</h3>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.75, color: 'var(--text-muted)', fontWeight: 300 }}>{product.makerStory}</p>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 24, fontWeight: 400, fontStyle: 'italic', margin: 0 }}>
          {copy.moreFromPrefix} {product.collectionName}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, maxWidth: 680 }}>
          {related.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/product/${item.id}`)}
              style={{ display: 'flex', flexDirection: 'column', gap: 10, cursor: 'pointer' }}
            >
              <div style={{ position: 'relative', aspectRatio: '2/3' }}>
                <ImageSlot src={item.imgSrc} alt={item.name} />
                <span
                  style={{
                    position: 'absolute',
                    top: 10,
                    left: 10,
                    background: 'color-mix(in oklch, var(--bg) 90%, transparent)',
                    fontSize: 10,
                    fontWeight: 600,
                    padding: '4px 9px',
                    borderRadius: 2,
                  }}
                >
                  {item.numberInCollection} / 8
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontSize: 13, fontWeight: 500 }}>{item.name}</span>
                <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 16 }}>{item.priceLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

function InfoRow({ label, value }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}>
      <span style={{ color: 'var(--text-muted)', fontWeight: 300 }}>{label}</span>
      <span style={{ fontWeight: 500 }}>{value}</span>
    </div>
  );
}
