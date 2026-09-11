// Brand config — the knobs that differ between drop-model storefronts (Saya here;
// Aaranya, Vasavi and Mahika follow the same pattern in their own repos).
//
// Saya is a deliberately different register from the other three brands: different
// fonts, a taller 2:3 image ratio, a reversed hero layout, uppercase wide-tracking
// buttons, and a single-piece (not "set") product schema. Those are structural/layout
// differences, not just copy swaps, so they're expressed directly in the page
// components' JSX/CSS rather than forced through brand.copy — brand.js still carries
// every piece of brand-specific text and the numeric/scheduling config.
export const brand = {
  name: 'Saya',
  wordmark: 'SAYA',
  unit: 'piece',
  unitPlural: 'pieces',
  orderPrefix: 'SAY-',
  editStart: new Date(2026, 7, 3), // Aug 3, 2026
  editWindowDays: 60,
  basePrice: 4800,
  priceStep: 1600,

  nav: {
    editLabel: 'The Edit — 40 Pieces',
    atelierLabel: 'Our Ateliers',
  },

  copy: {
    heroEyebrow: 'The Intimate Edit, 2026',
    heroHeadline: ['Forty pieces.', 'For the hours', 'that are yours alone.'],
    heroBody:
      'Five collections across our partner ateliers in Paris, Lyon, Mumbai, Benares and Jaipur — each piece individually numbered, produced in tens, never revisited once this edit closes.',
    heroCtaPrimary: 'Explore the Edit',
    heroCtaSecondary: 'The Craft',
    heroPlaceholder: 'Hero — model in silk chemise, soft studio light, intimate editorial mood',
    countdownSuffix: 'until this edit closes',

    philosophyTitle: 'The philosophy',
    philosophyCards: [
      {
        title: 'Ten, not ten thousand',
        body: 'Each design is made exactly ten times. A number on the label is your guarantee no one has the same piece made the same way.',
      },
      {
        title: 'The atelier, not the factory',
        body: 'Every piece is hand-finished by the artisan who made it — cut, sewn, and inspected in a single atelier, never on a production line.',
      },
      {
        title: 'Sixty days, then forever gone',
        body: 'When the countdown ends the collection retires. No reruns, no restocks. A new edit of forty takes its place.',
      },
    ],

    fromThisEdit: 'From this edit',
    seeAllEdit: 'See all 40 pieces',
    viewAllCta: 'View all 40 pieces',

    collectionEyebrowPrefix: 'Intimate Edit',
    collectionTitle: 'The 40 Pieces',
    collectionSubtitle: "Each numbered 1–40. Once an edition sells out, it closes with the edit.",
    collectionCrumb: 'The Edit',

    inclusiveOfTaxes: 'inclusive of taxes',
    lowStockLabel: (n) => `${n} of 10 remain`,
    stockBadge: (n) => `${n} left`,
    closesSuffix: 'not restocked after sellout',
    theMakerHeading: 'The maker',
    moreFromPrefix: 'More from',

    bagTitle: 'Your Bag',
    bagEmpty: 'Your bag is empty.',
    browseAllCta: 'Browse the Edit',
    shipsWithCert: 'Ships in a Saya dust bag with edition card',

    checkoutTitle: 'Checkout',
    addressSectionTitle: 'Delivery Address',
    paymentSectionTitle: 'Payment',
    sizeLabel: 'Your size (help us pick the right size card)',
    sizePlaceholder: 'XS / S / M / L / XL',

    confirmedHeadline: 'On its way to you',
    confirmedBody: (orderNumber, totalLabel) =>
      `Order ${orderNumber} for ${totalLabel} is being hand-packed. Your pieces arrive in a Saya dust bag with the edition card and numbered ribbon intact.`,
    continueBrowsing: 'Continue Browsing',

    atelierEyebrow: 'Our Ateliers',
    atelierHeadline: ['Five rooms.', 'One standard.'],
    atelierBody:
      'Every Saya piece is hand-finished in one of five partner ateliers, each behind a single ongoing collection. We source fabric directly, pay above rate, and sign off on every piece before it ships.',
    atelierHeroPlaceholder: 'Atelier interior — cutting table, silk bolts, soft natural light',
    atelierRowSuffix: 'Eight new designs per edit, never carried forward.',

    footerTagline: 'Made with intention',
  },

  // Color tokens live as CSS custom properties in index.css (:root), not here —
  // components consume them via var(--accent) etc. rather than importing this object.
};
