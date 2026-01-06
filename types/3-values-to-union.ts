export const AppleProductsPrice = {
  Iphone: 1499,
  Macbook: 1999,
} as const;

type AppleProductsKeys = keyof typeof AppleProductsPrice;
// oxlint-disable-next-line no-unused-vars
type AppleProductValues = (typeof AppleProductsPrice)[AppleProductsKeys];
