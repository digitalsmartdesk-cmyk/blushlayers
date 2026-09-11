import { useNavigate } from 'react-router-dom';
import { EDIT_END, getCollectionsGrouped } from '../data/products';
import ImageSlot from '../components/ImageSlot';
import useCountdown from '../hooks/useCountdown';
import { brand } from '../brand';

export default function Collection() {
  const navigate = useNavigate();
  const { days } = useCountdown(EDIT_END);
  const collectionsGrouped = getCollectionsGrouped();
  const daysLeftLabel = `${days} days left`;
  const { copy } = brand;

  return (
    <main style={{ display: 'flex', flexDirection: 'column', padding: '48px 64px 80px', gap: 32 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <span style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600, color: 'var(--accent)' }}>
          {copy.collectionEyebrowPrefix} &middot; {daysLeftLabel}
        </span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 40, fontWeight: 400, margin: 0 }}>{copy.collectionTitle}</h1>
          <span style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 300 }}>{copy.collectionSubtitle}</span>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
        {collectionsGrouped.map((coll) => (
          <div key={coll.name} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                borderBottom: '1px solid var(--border)',
                paddingBottom: 14,
                flexWrap: 'wrap',
                gap: 8,
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, fontWeight: 400, fontStyle: 'italic', margin: 0 }}>{coll.name}</h2>
                <span style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 300 }}>{coll.tagline}</span>
              </div>
              <span style={{ fontSize: 11, letterSpacing: 1, textTransform: 'uppercase', color: 'var(--text-faint)', whiteSpace: 'nowrap' }}>8 designs</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '28px 20px' }}>
              {coll.items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => navigate(`/product/${item.id}`)}
                  style={{ display: 'flex', flexDirection: 'column', gap: 10, cursor: 'pointer' }}
                >
                  <div style={{ position: 'relative', aspectRatio: '2/3' }}>
                    <ImageSlot src={item.imgSrc} alt={`${item.name} — ${item.colorway}`} />
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
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {item.numberInCollection} / 8
                    </span>
                    {item.lowStock && (
                      <span
                        style={{
                          position: 'absolute',
                          top: 10,
                          right: 10,
                          background: 'var(--accent)',
                          color: 'var(--bg)',
                          fontSize: 10,
                          fontWeight: 600,
                          padding: '4px 9px',
                          borderRadius: 2,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {copy.stockBadge(item.stock)}
                      </span>
                    )}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <span style={{ fontSize: 13, fontWeight: 500 }}>{item.name}</span>
                    <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 300 }}>
                      {item.material} &middot; {item.colorway}
                    </span>
                    <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 16, marginTop: 4 }}>{item.priceLabel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
