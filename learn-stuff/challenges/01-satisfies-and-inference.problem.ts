import type { Equal, Expect } from "../helpers/type-utils.js";

type Color = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];

/**
 * TYPE-ONLY CHALLENGE: change only the typing of `palette`, never its values.
 * Check `palette` so that:
 * - every Color key is required;
 * - values must be a string or RGB tuple;
 * - red keeps its tuple type and green keeps its string type.
 *
 * Do not use a cast or modify the object data.
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
