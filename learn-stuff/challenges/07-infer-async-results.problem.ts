import type { Equal, Expect } from "../helpers/type-utils.js";

/**
 * Constrain Function to function types, infer its return type, and recursively
 * unwrap promises. Use infer and one built-in utility; do not use ReturnType.
 */
type AsyncResult<Function> = never;

declare function fetchUser(id: string): Promise<{
  id: string;
  name: string;
}>;

declare function countCachedUsers(): number;

type tests = [
  Expect<Equal<AsyncResult<typeof fetchUser>, { id: string; name: string }>>,
  Expect<Equal<AsyncResult<typeof countCachedUsers>, number>>,
];

// @ts-expect-error AsyncResult only accepts function types
type invalid = AsyncResult<string>;

export {};
