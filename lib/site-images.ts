/**
 * All photos in `public/images/` used as decorative accents across the site.
 * Filenames with spaces are URL-encoded for safe use in `next/image` `src`.
 */
const raw = [
  "03a4f84fb3571b743f65b0c9fec4e4f8.jpg",
  "059445e7a5986e4255884d8efa80fae7.jpg",
  "20260322_152453.jpg",
  "2df9fbb0d2e2ee1edda26877a86e5d5f.jpg",
  "2ec1d06f4a59655b3d412629bfb945b0.jpg",
  "4463d8e8f705a445f4b18ee3bfd6c3f7.jpg",
  "4463d8e8f705a445f4b18ee3bfd6c3f7 (1).jpg",
  "5bb680ce3b304701fb2c1261ebf35a0a.jpg",
  "5e588beac7e71ad0d431fdd24e32a667.jpg",
  "71aa1c30d229477e2a529e3c2b5fe023.jpg",
  "804b68e66a21949a4b15bfb11aa106cd.jpg",
  "8872a04b4ce2c22dfdb4419b4ce4c861.jpg",
  "8e78e88c1e1c98fc710f284b8ddf2def.jpg",
  "97e766e35a65e67728d80946856429f9.jpg",
  "c30e4bc28eba106886b227823f27ecd4.jpg",
  "c393e139b494cbf557e1e6feb10c2304.jpg",
  "cc952a0b0dda0f2cfa4c36df133ea816.jpg",
  "d5815263f722cbcf87bcd9ae6d96858c.jpg",
  "f085f4b786c491d6b8de2502d9d50984.jpg",
] as const

export const SITE_DECOR_IMAGES: readonly string[] = raw.map(
  (name) => `/images/${encodeURIComponent(name)}`
)

/** Shown on slideshow slides (cycles if there are more photos than lines). */
const PROMO_TAGLINES = [
  "Premium gold & precious metals",
  "Certified investment-grade products",
  "Trade with transparent pricing",
  "Secure storage you can trust",
  "Same-day quotes & settlement",
  "Expert guidance for your portfolio",
  "Join thousands of satisfied clients",
  "Get your personal quote today",
] as const

export function getPromoTagline(index: number): string {
  return PROMO_TAGLINES[index % PROMO_TAGLINES.length]!
}

/** Full gallery list for `/gallery` and homepage preview (caption cycles with promos). */
export const GALLERY_ITEMS = SITE_DECOR_IMAGES.map((src, i) => ({
  src,
  caption: getPromoTagline(i),
}))

/** E.164 for tel: links (matches contact section placeholder). */
export const SITE_PHONE_TEL = "+1234567890"

export const SITE_PHONE_DISPLAY = "+1 (234) 567-890"
