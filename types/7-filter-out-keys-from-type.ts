import { Equal, Expect } from '../helpers/type-utils';

interface Example {
  name: string;
  age: number;
  id: string;
  organisationId: string;
  groupId: string;
}

type IdScenarios = `${string}${'id' | 'Id'}`;

type OnlyIdKeys<T> = {
  [IdKey in keyof T as IdKey extends IdScenarios ? IdKey : never]: T[IdKey];
};

// oxlint-disable-next-line no-unused-vars
type tests = [
  Expect<
    Equal<
      OnlyIdKeys<Example>,
      {
        id: string;
        organisationId: string;
        groupId: string;
      }
    >
  >,
  Expect<Equal<OnlyIdKeys<{}>, {}>>,
];
