import type { Equal, Expect } from "../helpers/type-utils.js";

/**
 * TYPE-ONLY CHALLENGE: change only Getters. Generate get${CapitalizedKey}
 * methods for every string key. Each method returns its original property's
 * type; the original keys must not remain.
 */
type Getters<Type> = never;

type Model = {
  name: string;
  age: number;
  active: boolean;
};

type ModelGetters = Getters<Model>;

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

// Runtime code is complete. Do not change it.
const model: Model = { name: "Ada", age: 37, active: true };
const getters: ModelGetters = {
  getName: () => model.name,
  getAge: () => model.age,
  getActive: () => model.active,
};

void getters;

export {};
