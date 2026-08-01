import type { Equal, Expect } from "../helpers/type-utils.js";

/**
 * Rewrite pluck so keys must exist on the object and its return type is an
 * array of the selected property types. Use ordinary indexed access with no
 * casts or any.
 */
export function pluck<T, K extends keyof T>(object: T, keys: readonly K[]): T[K][] {
  return keys.map((key) => object[key]);
}

const user = { id: 42, name: "Ada", active: true };
const identity = pluck(user, ["id", "name"]);
const status = pluck(user, ["active"]);

type tests = [
  Expect<Equal<typeof identity, (number | string)[]>>,
  Expect<Equal<typeof status, boolean[]>>,
];

// @ts-expect-error "missing" is not a key of user
pluck(user, ["id", "missing"]);
