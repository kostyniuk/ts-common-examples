import type { Equal, Expect } from "../helpers/type-utils.js";

/**
 * TYPE-ONLY CHALLENGE: change only Getters. Generate get${CapitalizedKey}
 * methods for every string key. Each method returns its original property's
 * type; the original keys must not remain.
 */
type Getters<Type> = never;

type ModelGetters = Getters<{
  name: string;
  age: number;
  active: boolean;
}>;

type tests = [
  Expect<
    Equal<
      ModelGetters,
      {
        getName: () => string;
        getAge: () => number;
        getActive: () => boolean;
      }
    >
  >,
];

export {};
