import { EDIT_END } from '../data/products';
import { brand } from '../brand';

const endDateLabel = EDIT_END.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: 'auto',
        padding: '48px 64px',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 12,
        color: 'var(--text-faint)',
        fontWeight: 300,
      }}
    >
      <span>&copy; 2026 {brand.name}. {brand.copy.footerTagline}.</span>
      <span>Edition closes {endDateLabel}</span>
    </footer>
  );
}
