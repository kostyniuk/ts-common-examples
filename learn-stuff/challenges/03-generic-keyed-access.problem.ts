import type { Equal, Expect } from "../helpers/type-utils.js";

/**
 * TYPE-ONLY CHALLENGE: type the declaration so keys must exist on the object
 * and the return type is an array of the selected property types. Change only
 * the declaration's generic parameters and type annotations.
 */
export function pluck<T, K extends keyof T>(
  object: T,
  keys: readonly K[],
): T[K][];
// Runtime code is complete. Do not change this implementation.
export function pluck(
  object: object,
  keys: readonly PropertyKey[],
): unknown[] {
  return keys.map((key) => Reflect.get(object, key));
}

const user = { id: 42, name: "Ada", active: true };
const identity = pluck(user, ["id", "name"]);
const status = pluck(user, ["active"]);
const product = { sku: "TS-101", price: 49, tags: ["types"] };
const productDetails = pluck(product, ["price", "tags"]);

type tests = [
  Expect<Equal<typeof identity, (number | string)[]>>,
  Expect<Equal<typeof status, boolean[]>>,
  Expect<Equal<typeof productDetails, (number | string[])[]>>,
];

// @ts-expect-error "missing" is not a key of user
pluck(user, ["id", "missing"]);

// @ts-expect-error "discount" is not a key of product
pluck(product, ["sku", "discount"]);
