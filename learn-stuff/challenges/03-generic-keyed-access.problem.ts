import type { Equal, Expect } from "../helpers/type-utils.js";

/**
 * Rewrite pluck so keys must exist on the object and its return type is an
 * array of the selected property types. Use ordinary indexed access with no
 * casts or any.
 */
export function pluck(object: object, keys: readonly PropertyKey[]): unknown[] {
  return keys.map((key) => Reflect.get(object, key));
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
