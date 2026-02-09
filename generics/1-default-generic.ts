import { Equal, Expect } from "../helpers/type-utils";

export const createSet = <T = string>() => {
  return new Set<T>();
};

const numberSet = createSet<number>();
const stringSet = createSet<string>();
const otherStringSet = createSet();

type tests = [
  Expect<Equal<typeof numberSet, Set<number>>>,
  Expect<Equal<typeof stringSet, Set<string>>>,
  Expect<Equal<typeof otherStringSet, Set<string>>>
];


// Without default: T must always be specified
function createStore<T>(initial: T[]) { return initial; }

// With default: T resolves to string when omitted
function createRegistry<T = string>() {
  const items: T[] = [];
  return {
    add: (item: T) => items.push(item),
    getAll: (): T[] => [...items],
  };
}

// T = number (explicitly provided)
const ids = createRegistry<number>();
ids.add(1);
ids.add(2);
// ids.getAll() → number[]

// T = string (default kicks in)
const tags = createStore('a');
tags.add("draft");
tags.add("published");
// tags.getAll() → string[]