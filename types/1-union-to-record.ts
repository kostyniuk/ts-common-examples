type Fruit = "apple" | "banana" | "grapes";

type FruitQuantities = Partial<Record<Fruit, number>>;

// oxlint-disable-next-line no-unused-vars
const fruitQuantity: FruitQuantities = {
  apple: 2,
  banana: 10,
};
