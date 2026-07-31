import type { Equal, Expect } from "../helpers/type-utils.js";

/**
 * Implement an immutable setField. The key must belong to the object and the
 * value must match that particular key. Preserve the input object's type and
 * do not use casts or any.
 */
export function setField(...args: unknown[]): unknown {
  throw new Error(`Not implemented: ${args.length} arguments received`);
}

type Account = { id: number; email: string; verified: boolean };
const account: Account = { id: 1, email: "a@example.com", verified: false };
const updated = setField(account, "verified", true);

type test = Expect<Equal<typeof updated, Account>>;

// @ts-expect-error email requires a string
setField(account, "email", false);

// @ts-expect-error unknown key
setField(account, "role", "admin");
