export const AppleProductsPrice = {
  Iphone: 1499,
  Macbook: 1999,
} as const;

// oxlint-disable-next-line no-unused-vars
type AppleProducts = keyof typeof AppleProductsPrice;
