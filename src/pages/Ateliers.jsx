import { getCollectionsGrouped } from '../data/products';
import ImageSlot from '../components/ImageSlot';
import { asset } from '../lib/asset';
import { brand } from '../brand';

export default function Ateliers() {
  const collectionsGrouped = getCollectionsGrouped();
  const { copy } = brand;

  return (
    <main style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
      <section style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', minHeight: 480, borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 20, padding: '72px 64px', minWidth: 0 }}>
          <span style={{ fontSize: 11, letterSpacing: 2.5, textTransform: 'uppercase', fontWeight: 600, color: 'var(--accent)' }}>{copy.atelierEyebrow}</span>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 46, fontWeight: 400, lineHeight: 1.1, margin: 0 }}>
            {copy.atelierHeadline[0]}
            <br />
            <span style={{ fontStyle: 'italic' }}>{copy.atelierHeadline[1]}</span>
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: 'var(--text-muted-2)', maxWidth: 420, margin: 0, fontWeight: 300 }}>{copy.atelierBody}</p>
        </div>
        <div style={{ position: 'relative', background: 'var(--surface-2)' }}>
          <ImageSlot src={asset('/images/weavers-hero.jpg')} alt={copy.atelierHeroPlaceholder} />
        </div>
      </section>
      <section style={{ display: 'flex', flexDirection: 'column', gap: 32, padding: '0 64px 80px' }}>
        {collectionsGrouped.map((coll) => (
          <div
            key={coll.name}
            style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: 36, alignItems: 'center', paddingBottom: 32, borderBottom: '1px solid var(--border)' }}
          >
            <div style={{ position: 'relative', aspectRatio: '4/3' }}>
              <ImageSlot src={coll.loomImg} alt={`Atelier photo — ${coll.name} studio`} radius={4} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <h3 style={{ margin: 0, fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 400, fontStyle: 'italic' }}>{coll.name}</h3>
              <p style={{ margin: 0, fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.75, maxWidth: 500, fontWeight: 300 }}>
                {coll.tagline}. {copy.atelierRowSuffix}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
