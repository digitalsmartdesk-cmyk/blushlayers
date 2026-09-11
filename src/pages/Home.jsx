import { useNavigate } from 'react-router-dom';
import { EDIT_END, getFeatured } from '../data/products';
import ImageSlot from '../components/ImageSlot';
import useCountdown from '../hooks/useCountdown';
import { asset } from '../lib/asset';
import { brand } from '../brand';

const uppercaseBtnBase = {
  fontSize: 13,
  fontWeight: 500,
  letterSpacing: 0.8,
  cursor: 'pointer',
  borderRadius: 2,
  textTransform: 'uppercase',
};

export default function Home() {
  const navigate = useNavigate();
  const { parts: countdownParts } = useCountdown(EDIT_END);
  const featured = getFeatured();
  const { copy } = brand;

  return (
    <main style={{ display: 'flex', flexDirection: 'column' }}>
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.1fr)',
          gap: 0,
          alignItems: 'stretch',
          minHeight: 680,
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div style={{ position: 'relative', background: 'var(--surface-2)' }}>
          <ImageSlot src={asset('/images/hero-main.jpg')} alt={copy.heroPlaceholder} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 28, padding: '80px 72px', minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ width: 32, height: 1, background: 'var(--accent)' }} />
            <span style={{ fontSize: 11, letterSpacing: 2.5, textTransform: 'uppercase', fontWeight: 600, color: 'var(--accent)' }}>{copy.heroEyebrow}</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 58, lineHeight: 1.08, fontWeight: 400, margin: 0, maxWidth: 500 }}>
            {copy.heroHeadline[0]}
            <br />
            {copy.heroHeadline[1]}
            <br />
            <span style={{ fontStyle: 'italic' }}>{copy.heroHeadline[2]}</span>
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-muted-2)', maxWidth: 420, margin: 0, fontWeight: 300 }}>{copy.heroBody}</p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap', marginTop: 4 }}>
            <div style={{ display: 'flex', gap: 8 }}>
              {countdownParts.map((p) => (
                <div
                  key={p.label}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 8,
                    padding: '14px 18px',
                    minWidth: 60,
                  }}
                >
                  <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, fontWeight: 400 }}>{p.value}</span>
                  <span style={{ fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--text-faint)', marginTop: 3 }}>{p.label}</span>
                </div>
              ))}
            </div>
            <span style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 300 }}>{copy.countdownSuffix}</span>
          </div>
          <div style={{ display: 'flex', gap: 14, marginTop: 8 }}>
            <button
              onClick={() => navigate('/collection')}
              style={{ ...uppercaseBtnBase, background: 'var(--text)', color: 'var(--bg)', border: 'none', padding: '16px 32px' }}
            >
              {copy.heroCtaPrimary}
            </button>
            <button
              onClick={() => navigate('/ateliers')}
              style={{ ...uppercaseBtnBase, background: 'none', color: 'var(--text)', border: '1px solid var(--border-strong)', padding: '16px 28px' }}
            >
              {copy.heroCtaSecondary}
            </button>
          </div>
        </div>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: 28, padding: '72px 64px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 32, fontWeight: 400, margin: 0 }}>{copy.philosophyTitle}</h2>
          <a onClick={() => navigate('/collection')} style={{ fontSize: 13, fontWeight: 500, cursor: 'pointer', letterSpacing: 0.3 }}>
            {copy.seeAllEdit} &rarr;
          </a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 40 }}>
          {copy.philosophyCards.map((card) => (
            <div key={card.title} style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 22, borderTop: '1px solid var(--border)' }}>
              <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontStyle: 'italic', color: 'var(--accent)' }}>{card.title}</span>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: 'var(--text-muted)', fontWeight: 300 }}>{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ display: 'flex', flexDirection: 'column', gap: 24, padding: '16px 64px 80px' }}>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 32, fontWeight: 400, margin: 0 }}>{copy.fromThisEdit}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 18 }}>
          {featured.map((item) => (
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
                    letterSpacing: 0.4,
                  }}
                >
                  {item.numberInCollection} / 8
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontSize: 10, letterSpacing: 1.2, textTransform: 'uppercase', fontWeight: 600, color: 'var(--accent)' }}>{item.collectionName}</span>
                <span style={{ fontSize: 13, fontWeight: 500 }}>{item.name}</span>
                <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 16, marginTop: 4 }}>{item.priceLabel}</span>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => navigate('/collection')}
          style={{ ...uppercaseBtnBase, alignSelf: 'center', marginTop: 20, background: 'none', color: 'var(--text)', border: '1px solid var(--border-strong)', padding: '14px 36px' }}
        >
          {copy.viewAllCta}
        </button>
      </section>
    </main>
  );
}
