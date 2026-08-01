import type { Equal, Expect } from "../helpers/type-utils.js";

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; width: number; height: number }
  | { kind: "triangle"; base: number; height: number };

/**
 * TYPE-ONLY CHALLENGE: model Shape as a discriminated union containing exactly
 * circle, rectangle, and triangle. Change only the Shape type.
 */
type tests = [
  Expect<Equal<Extract<Shape, { kind: "circle" }>, { kind: "circle"; radius: number }>>,
  Expect<
    Equal<
      Extract<Shape, { kind: "rectangle" }>,
      { kind: "rectangle"; width: number; height: number }
    >
  >,
  Expect<
    Equal<
      Extract<Shape, { kind: "triangle" }>,
      { kind: "triangle"; base: number; height: number }
    >
  >,
  Expect<Equal<Shape["kind"], "circle" | "rectangle" | "triangle">>,
];

export {};
