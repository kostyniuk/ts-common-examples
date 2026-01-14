type GetNameValue<T> = T extends { name: infer TInferredName } ? TInferredName : never;

type Example1 = GetNameValue<{ name: 'Alex' }>;
// Result: "Alex"

type Example2 = GetNameValue<{ name: { firstName: 'Alex' } }>;
// Result: { firstName: "Alex" }

type Example3 = GetNameValue<string>;
// Result: never
