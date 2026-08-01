import type { Equal, Expect } from "../helpers/type-utils.js";

type User = {
  readonly id: string;
  name: string;
  email: string;
  role: "admin" | "member";
  createdAt: Date;
};

/**
 * TYPE-ONLY CHALLENGE: change only UpdatePayload. Build a reusable
 * two-parameter utility from built-in utility types. Keys must belong to Type,
 * and only those selected properties are optional.
 */
type UpdatePayload<Type, Keys> = never;

type UserUpdate = UpdatePayload<User, "name" | "email" | "role">;

type tests = [
  Expect<
    Equal<
      UserUpdate,
      { name?: string; email?: string; role?: "admin" | "member" }
    >
  >,
];

const valid: UserUpdate = { role: "admin" };

// @ts-expect-error id is not updateable
const invalid: UserUpdate = { id: "new-id" };

void valid;
void invalid;
