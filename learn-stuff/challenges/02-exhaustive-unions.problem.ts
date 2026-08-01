import type { Equal, Expect } from "../helpers/type-utils.js";
import { assertNever } from "../helpers/type-utils.js";

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

// Runtime code is complete. Do not change it.
export function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.width * shape.height;
    case "triangle":
      return (shape.base * shape.height) / 2;
    default:
      return assertNever(shape);
  }
}

export {};
