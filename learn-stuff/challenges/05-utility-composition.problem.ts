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
type Preferences = {
  theme: "light" | "dark";
  pageSize: number;
  locked: boolean;
};
type PreferencesUpdate = UpdatePayload<Preferences, "theme" | "pageSize">;

type tests = [
  Expect<
    Equal<
      UserUpdate,
      { name?: string; email?: string; role?: "admin" | "member" }
    >
  >,
  Expect<
    Equal<
      PreferencesUpdate,
      { theme?: "light" | "dark"; pageSize?: number }
    >
  >,
];

// @ts-expect-error selected keys must exist on the source type
type invalidKey = UpdatePayload<User, "missing">;

const valid: UserUpdate = { role: "admin" };

// @ts-expect-error id is not updateable
const invalid: UserUpdate = { id: "new-id" };

void valid;
void invalid;
