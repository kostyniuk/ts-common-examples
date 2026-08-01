import type { Equal, Expect } from "../helpers/type-utils.js";

/**
 * TYPE-ONLY CHALLENGE: change only these two aliases. EachAsArray distributes
 * over a union, while UnionAsArray deliberately treats the union as one unit.
 */
type EachAsArray<Type> = never;
type UnionAsArray<Type> = never;

type Input = string | number;

type tests = [
  Expect<Equal<EachAsArray<Input>, string[] | number[]>>,
  Expect<Equal<UnionAsArray<Input>, (string | number)[]>>,
];

export {};
