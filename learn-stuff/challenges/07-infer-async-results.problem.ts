import type { Equal, Expect } from "../helpers/type-utils.js";

/**
 * TYPE-ONLY CHALLENGE: change only AsyncResult. Constrain Function to function
 * types, infer its return type, and recursively unwrap promises. Use infer and
 * one built-in utility; do not use ReturnType.
 */
type AsyncResult<Function> = never;

// Runtime code is complete. Do not change these functions.
async function fetchUser(id: string): Promise<{
  id: string;
  name: string;
}> {
  return { id, name: "Ada" };
}

function countCachedUsers(): number {
  return 3;
}

type tests = [
  Expect<Equal<AsyncResult<typeof fetchUser>, { id: string; name: string }>>,
  Expect<Equal<AsyncResult<typeof countCachedUsers>, number>>,
];

// @ts-expect-error AsyncResult only accepts function types
type invalid = AsyncResult<string>;

export {};
