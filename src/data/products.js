import { brand } from '../brand';
import { asset } from '../lib/asset';

export const EDIT_START = brand.editStart;
export const EDIT_END = new Date(EDIT_START.getTime() + brand.editWindowDays * 86400000);

export const COLLECTIONS = [
  {
    name: 'Bare Silk',
    tagline: 'Pure mulberry silk chemises, body-skimming, minimal',
    material: 'Mulberry Silk',
    finish: 'Hand-rolled hem',
    silhouette: 'Slip / chemise',
    atelier: 'Lyon',
    loomImg: asset('/images/loom-bare-silk.jpg'),
    names: ['Aurore', 'Céleste', 'Ines', 'Lune', 'Maeva', 'Noémi', 'Ondine', 'Séraphine'],
  },
  {
    name: 'Lace Noir',
    tagline: 'French Calais lace camisoles, dramatic, sheer at the edges',
    material: 'French Lace & Silk',
    finish: 'Lace trim, satin binding',
    silhouette: 'Camisole, thigh-length',
    atelier: 'Paris',
    loomImg: asset('/images/loom-lace-noir.jpg'),
    names: ['Mireille', 'Fleur', 'Gisèle', 'Hélène', 'Isabeau', 'Jolie', 'Képha', 'Lisette'],
  },
  {
    name: 'Whisper Satin',
    tagline: 'Charmeuse satin sleep shirts, draped, effortlessly fluid',
    material: 'Charmeuse Satin',
    finish: 'Contrast piping, shell buttons',
    silhouette: 'Oversized sleep shirt',
    atelier: 'Mumbai',
    loomImg: asset('/images/loom-whisper-satin.jpg'),
    names: ['Ananya', 'Diya', 'Ishaan', 'Keya', 'Mira', 'Priya', 'Rhea', 'Sia'],
  },
  {
    name: 'Boudoir Bloom',
    tagline: 'Cotton voile with hand-block florals, playful and light',
    material: 'Cotton Voile',
    finish: 'Hand-block print, pintuck placket',
    silhouette: 'Smock top / short kurta',
    atelier: 'Jaipur',
    loomImg: asset('/images/loom-boudoir-bloom.jpg'),
    names: ['Champa', 'Gulab', 'Jasmine', 'Kamala', 'Lotika', 'Mallika', 'Nandini', 'Parul'],
  },
  {
    name: 'Velvet Dusk',
    tagline: 'Velvet-trim modal, moody texture, rich at nightfall',
    material: 'Modal & Velvet trim',
    finish: 'Velvet collar & cuffs, satin label',
    silhouette: 'Longline sleep shirt',
    atelier: 'Benares',
    loomImg: asset('/images/loom-velvet-dusk.jpg'),
    names: ['Advaita', 'Bhavna', 'Chandrika', 'Devika', 'Eisha', 'Falak', 'Geetika', 'Hira'],
  },
];

const COLORWAYS = ['Blush Petal', 'Ivory Cream', 'Midnight Black', 'Dusty Rose', 'Champagne', 'Deep Plum', 'Ash Mauve', 'Pearl White', 'Noir Stripe', 'Antique Ivory'];
const COLORWAY_SLUGS = {
  'Blush Petal': 'ivory-rose',
  'Ivory Cream': 'antique-gold',
  'Midnight Black': 'deep-maroon',
  'Dusty Rose': 'ivory-rose',
  Champagne: 'antique-gold',
  'Deep Plum': 'deep-maroon',
  'Ash Mauve': 'sandalwood',
  'Pearl White': 'antique-gold',
  'Noir Stripe': 'deep-maroon',
  'Antique Ivory': 'sandalwood',
};

function buildProducts() {
  const list = [];
  let i = 0;
  COLLECTIONS.forEach((coll, cIdx) => {
    for (let j = 1; j <= 8; j++) {
      i++;
      const colorway = COLORWAYS[i % COLORWAYS.length];
      const nameBase = coll.names[j - 1];
      const price = brand.basePrice + (i % 9) * brand.priceStep;
      const stock = 10 - ((i * 3 + 5) % 10); // 1-10, out of 10 pieces total
      list.push({
        id: i,
        number: i,
        collectionId: cIdx,
        collectionName: coll.name,
        collectionTagline: coll.tagline,
        numberInCollection: j,
        totalInCollection: 8,
        totalPieces: 10,
        name: nameBase,
        material: coll.material,
        finish: coll.finish,
        silhouette: coll.silhouette,
        colorway,
        atelier: coll.atelier,
        price,
        priceLabel: '₹' + price.toLocaleString('en-IN'),
        stock,
        lowStock: stock <= 3,
        imgSrc: asset(`/images/${COLORWAY_SLUGS[colorway]}.jpg`),
        description: `Hand-finished in ${coll.atelier}, this ${coll.material.toLowerCase()} piece is numbered ${j} of 8 in the ${coll.name} line. ${coll.finish} — made once, in ${colorway.toLowerCase()}, never remade in this colorway once the edition closes.`,
        makerStory: `Every piece in ${coll.name} is hand-finished by a single maker in our ${coll.atelier} atelier. The ${coll.finish.toLowerCase()} is done at the very end, by hand, before the numbered ribbon is attached and the piece is sealed in its dust bag.`,
        specs: [
          { label: 'Material', value: coll.material },
          { label: 'Finish', value: coll.finish },
          { label: 'Silhouette', value: coll.silhouette },
          { label: 'Edition size', value: '10 pieces' },
          { label: 'Sizing', value: 'XS – XL (size guide enclosed)' },
          { label: 'Includes', value: 'Numbered ribbon, edition card, dust bag' },
          { label: 'Care', value: 'Hand wash cold, lay flat to dry' },
        ],
      });
    }
  });
  return list;
}

export const PRODUCTS = buildProducts();

export function getProduct(id) {
  return PRODUCTS.find((p) => p.id === Number(id));
}

export function getCollectionsGrouped() {
  return COLLECTIONS.map((coll, cIdx) => ({
    ...coll,
    items: PRODUCTS.filter((p) => p.collectionId === cIdx),
  }));
}

export function getRelatedProducts(product, count = 3) {
  return PRODUCTS.filter((p) => p.collectionId === product.collectionId && p.id !== product.id).slice(0, count);
}

export function getFeatured() {
  return [0, 8, 16, 24, 32].map((idx) => PRODUCTS[idx]);
}
