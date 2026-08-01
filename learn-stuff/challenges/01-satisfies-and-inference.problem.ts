import type { Equal, Expect } from "../helpers/type-utils.js";

type Color = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];

/**
 * Fix the misspelled key and change how `palette` is checked so that:
 * - every Color key is required;
 * - values must be a string or RGB tuple;
 * - red keeps its tuple type and green keeps its string type.
 *
 * Do not use a cast.
 */
const palette = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 255],
} satisfies Record<Color, string | RGB>;

palette.red.at(0);
palette.green.toUpperCase();

type tests = [
  Expect<Equal<typeof palette.red, RGB>>,
  Expect<Equal<typeof palette.green, string>>,
];

export {};

/**: Type says “treat this value as Type.”
satisfies Type says “verify this value is compatible with Type, but retain its inferred structure.” */

