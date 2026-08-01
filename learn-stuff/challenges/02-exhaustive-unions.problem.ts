import { assertNever } from "../helpers/type-utils.js";

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; width: number; height: number }
  | { kind: "triangle"; base: number; height: number };

/**
 * Handle rectangle exhaustively, then add and handle:
 * { kind: "triangle"; base: number; height: number }
 *
 * Keep assertNever so a future Shape variant breaks this function.
 */
export function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return Math.PI * shape.width ** 2;
    case "triangle":
      return shape.base + 2
    default:
      return assertNever(shape);
  }
}

const triangle: Shape = { kind: "triangle", base: 6, height: 4 };
void triangle;
