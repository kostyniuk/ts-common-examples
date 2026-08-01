import type { Equal, Expect } from "../helpers/type-utils.js";

/**
 * TYPE-ONLY CHALLENGE: change only the on() declaration so it accepts only
 * `${propertyName}Changed` events and infers the matching property type for
 * the callback. Do not overload per property or use any.
 */
function on(
  object: object,
  event: string,
  callback: (value: unknown) => void,
): void;
// Runtime code is complete. Do not change this implementation.
function on(object: object, event: string, callback: Function): void {
  const property = event.replace(/Changed$/, "");
  callback(Reflect.get(object, property));
}

const person = { name: "Ada", age: 37, active: true };

on(person, "ageChanged", (value) => {
  type test = Expect<Equal<typeof value, number>>;
});

on(person, "nameChanged", (value) => {
  type test = Expect<Equal<typeof value, string>>;
});

on(person, "activeChanged", (value) => {
  type test = Expect<Equal<typeof value, boolean>>;
});

const settings = { theme: "dark", retries: 3 };
on(settings, "retriesChanged", (value) => {
  type test = Expect<Equal<typeof value, number>>;
});

// @ts-expect-error activeChanged supplies a boolean, not a string
on(person, "activeChanged", (value: string) => {});

// @ts-expect-error no such property
on(person, "emailChanged", () => {});

// @ts-expect-error event names must end in Changed
on(person, "active", () => {});

export {};
