import type { Equal, Expect } from "../helpers/type-utils.js";

/**
 * TYPE-ONLY CHALLENGE: change only this declaration's generic parameters and
 * annotations. The key must belong to the object, the value must match that
 * particular key, and the return type must preserve the object type.
 */
export declare function setField(
  object: object,
  key: PropertyKey,
  value: unknown,
): unknown;

type Account = { id: number; email: string; verified: boolean };
const account: Account = { id: 1, email: "a@example.com", verified: false };
const updated = setField(account, "verified", true);

type test = Expect<Equal<typeof updated, Account>>;

// @ts-expect-error email requires a string
setField(account, "email", false);

// @ts-expect-error unknown key
setField(account, "role", "admin");
