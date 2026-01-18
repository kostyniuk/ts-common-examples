/**
 * MODULE 04: CONDITIONAL TYPES AND INFER - Quick Reference
 */

// 1. Basic conditional: T extends U ? TrueType : FalseType
type IsString<T> = T extends string ? true : false;

// 2. Return `never` for invalid cases
type OnlyStrings<T> = T extends string ? T : never;

// 3. Infer keyword - extract types from structures
type GetData<T> = T extends { data: infer D } ? D : never;
type GetReturn<T> = T extends () => infer R ? R : never;
type GetArrayItem<T> = T extends (infer U)[] ? U : never;

// 4. Infer with generics - use `any` for params you don't need
type GetSecond<T> = T extends Map<any, infer V> ? V : never;

// 5. Template literal extraction
type GetSurname<T> = T extends `${infer F} ${infer L}` ? L : never;

// 6. Async function result extraction
type GetAsyncProps<T> = T extends () => Promise<{ props: infer P }> ? P : never;

// 7. Pattern matching - chain conditionals for multiple shapes
type GetParserResult<T> = T extends
  | {
      parse: () => infer TResult;
    }
  | {
      extract: () => infer TResult;
    }
  | (() => infer TResult)
  ? TResult
  : never;


// 8. Distributive conditional types - unions distribute automatically
type Fruit = "apple" | "banana" | "orange";
type FilterFruit<T> = T extends "apple" | "banana" ? T : never;
type AppleOrBanana = FilterFruit<Fruit>; // "apple" | "banana"

/**
 * KEY POINTS:
 * - `infer` only works inside `extends` clause
 * - `never` disappears from unions (useful for filtering)
 * - Conditionals distribute over union type parameters
 */

export {};
