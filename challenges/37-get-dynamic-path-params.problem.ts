
type UserPath = "/users/:id";

type UserOrganisationPath = "/users/:id/organisations/:organisationId";


type ExtractPathParamsUnion<T> = T extends `${string}/:${infer TId}/${string}/:${infer TDepartmentId}` 
  ? {[K in TId | TDepartmentId] : string}
  : T extends `${string}/:${infer TId}` ? {[K in TId] : string}  : never

type ExtractPathParams<T> = ExtractPathParamsUnion<T>

  type A = ExtractPathParams<UserOrganisationPath>

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<
    Equal<
      ExtractPathParams<UserOrganisationPath>,
      { id: string; organisationId: string }
    >
  >,
];
