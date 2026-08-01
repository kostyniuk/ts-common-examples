import type { Equal, Expect } from "../helpers/type-utils.js";

/**
 * TYPE-ONLY CHALLENGE: type the declaration so keys must exist on the object
 * and the return type is an array of the selected property types. Change only
 * the declaration's generic parameters and type annotations.
 */
export declare function pluck<T, K extends keyof T>(
  object: T,
  keys: readonly K[],
): T[K][];

const user = { id: 42, name: "Ada", active: true };
const identity = pluck(user, ["id", "name"]);
const status = pluck(user, ["active"]);

type tests = [
  Expect<Equal<typeof identity, (number | string)[]>>,
  Expect<Equal<typeof status, boolean[]>>,
];

// @ts-expect-error "missing" is not a key of user
pluck(user, ["id", "missing"]);
