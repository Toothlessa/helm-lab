export const site = {
  name: 'HELM LAB',
  tagline: 'Washed in Shadow',
  description: 'Premium small-batch coffee, roasted dark and delivered fresh.',
  whatsapp: '15551234567',
  whatsappMessage: 'Hello NOIR, I would like to order coffee.',
  email: 'hello@noircoffee.co',
  instagram: '@noircoffee',
  year: 2026,
};

export function waLink(message?: string): string {
  const text = encodeURIComponent(message ?? site.whatsappMessage);
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/products' },
  //{ label: 'Categories', href: '/products#categories' },
  { label: 'Our Story', href: '/about' },
];

export const categories = [
  { slug: 'dark-roast', name: 'Dark Roast', blurb: 'Bold, smoky, unapologetic' },
  { slug: 'medium-roast', name: 'Medium Roast', blurb: 'Balanced with a smooth finish' },
  { slug: 'light-roast', name: 'Light Roast', blurb: 'Bright, floral, vibrant' },
  { slug: 'espresso', name: 'Espresso', blurb: 'Punchy and rich' },
  { slug: 'decaf', name: 'Decaf', blurb: 'All the flavor, none of the buzz' },
  { slug: 'cold-brew', name: 'Cold Brew', blurb: 'Smooth, slow-steeped' },
];

export type Product = {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  price: number;
  origin: string;
  roastLevel: string;
  notes: string[];
  weight: string;
  category: string;
  badge?: string;
  image: string;
};

export const products: Product[] = [
  {
    slug: 'midnight-blend',
    name: 'Midnight Blend',
    subtitle: 'Forged in the Deep Roast',
    description: 'Our signature dark roast. A bold fusion of Sumatran and Colombian beans roasted past the second crack for a heavy body, low acidity, and notes of dark chocolate, toasted walnut, and molasses. Built for those who take their coffee like the night — unbroken.',
    price: 24,
    origin: 'Sumatra / Colombia',
    roastLevel: 'Dark',
    notes: ['Dark Chocolate', 'Toasted Walnut', 'Molasses'],
    weight: '340g',
    category: 'dark-roast',
    badge: 'Best Seller',
    image: 'https://images.pexels.com/photos/9334456/pexels-photo-9334456.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'obsidian-espresso',
    name: 'Obsidian Espresso',
    subtitle: 'The Dark Engine',
    description: 'A precision espresso blend engineered for crema and intensity. Brazilian and Ethiopian beans combine for a syrupy shot with notes of cocoa, brown sugar, and dried cherry. Pulls thick, finishes clean.',
    price: 22,
    origin: 'Brazil / Ethiopia',
    roastLevel: 'Dark',
    notes: ['Cocoa', 'Brown Sugar', 'Dried Cherry'],
    weight: '340g',
    category: 'espresso',
    badge: 'New',
    image: 'https://images.pexels.com/photos/13787586/pexels-photo-13787586.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'grey-veil',
    name: 'Grey Veil',
    subtitle: 'The Fog Lifts Slow',
    description: 'A medium roast that walks the line between comfort and complexity. Honduran beans deliver a creamy body with notes of milk chocolate, caramel, and orange peel. Versatile across brew methods.',
    price: 20,
    origin: 'Honduras',
    roastLevel: 'Medium',
    notes: ['Milk Chocolate', 'Caramel', 'Orange Peel'],
    weight: '340g',
    category: 'medium-roast',
    image: 'https://images.pexels.com/photos/37540287/pexels-photo-37540287.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'pale-ash',
    name: 'Pale Ash',
    subtitle: 'Light Before the Dawn',
    description: 'Our lightest roast. Ethiopian Yirgacheffe beans flash-roasted to preserve delicate florals, jasmine, and bright bergamot. Tea-like body with a sparkling finish. For the early risers and the curious.',
    price: 26,
    origin: 'Ethiopia, Yirgacheffe',
    roastLevel: 'Light',
    notes: ['Jasmine', 'Bergamot', 'Stone Fruit'],
    weight: '340g',
    category: 'light-roast',
    badge: 'Limited',
    image: 'https://images.pexels.com/photos/28441960/pexels-photo-28441960.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'shadow-decaf',
    name: 'Shadow Decaf',
    subtitle: 'Night Without End',
    description: 'Swiss Water processed Colombian decaf that actually tastes like coffee. Notes of hazelnut, cocoa, and brown sugar with none of the caffeine. Drink it at midnight — we won\'t tell.',
    price: 21,
    origin: 'Colombia',
    roastLevel: 'Medium-Dark',
    notes: ['Hazelnut', 'Cocoa', 'Brown Sugar'],
    weight: '340g',
    category: 'decaf',
    image: 'https://images.pexels.com/photos/14745651/pexels-photo-14745651.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'deep-current',
    name: 'Deep Current',
    subtitle: 'Slow Steeped, Long Memory',
    description: 'A coarse-ground blend designed for cold brewing. 18-hour steep yields a naturally sweet, low-acid cup with notes of dark chocolate, vanilla, and caramel. Smooth enough to drink black.',
    price: 23,
    origin: 'Guatemala / Brazil',
    roastLevel: 'Medium-Dark',
    notes: ['Dark Chocolate', 'Vanilla', 'Caramel'],
    weight: '340g',
    category: 'cold-brew',
    image: 'https://images.pexels.com/photos/3082789/pexels-photo-3082789.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'ironwood',
    name: 'Ironwood',
    subtitle: 'Rooted and Resolute',
    description: 'A single-origin dark roast from the highlands of Guatemala. Heavy body, smoky undertone, and a long finish of dark chocolate and spice. For the ones who don\'t waver.',
    price: 25,
    origin: 'Guatemala, Huehuetenango',
    roastLevel: 'Dark',
    notes: ['Dark Chocolate', 'Smoky', 'Allspice'],
    weight: '340g',
    category: 'dark-roast',
    image: 'https://images.pexels.com/photos/6729522/pexels-photo-6729522.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    slug: 'emberglow',
    name: 'Emberglow',
    subtitle: 'Warmth in the Dark',
    description: 'A medium-dark espresso blend with a warm, rounded profile. Notes of roasted almond, toffee, and dark cherry. Excellent as a latte or a straight shot. Forgiving and consistent.',
    price: 22,
    origin: 'Colombia / Guatemala',
    roastLevel: 'Medium-Dark',
    notes: ['Roasted Almond', 'Toffee', 'Dark Cherry'],
    weight: '340g',
    category: 'espresso',
    image: 'https://images.pexels.com/photos/15312642/pexels-photo-15312642.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];
