import type { Equal, Expect } from "../helpers/type-utils.js";
import { assertNever } from "../helpers/type-utils.js";

/**
 * TYPE-ONLY CHALLENGE: change only RequestState. Replace the bag of optionals
 * with a generic discriminated union for exactly four states: idle, loading,
 * success with data, and failure with an error.
 */
export type RequestState<Data, Failure> = {
  loading: boolean;
  data?: Data;
  error?: Failure;
};

type tests = [
  Expect<Equal<Extract<RequestState<number, Error>, { status: "idle" }>, { status: "idle" }>>,
  Expect<
    Equal<
      Extract<RequestState<number, Error>, { status: "success" }>,
      { status: "success"; data: number }
    >
  >,
  Expect<
    Equal<
      Extract<RequestState<number, Error>, { status: "failure" }>,
      { status: "failure"; error: Error }
    >
  >,
];

// Runtime code is complete. Do not change it.
export function describeState(
  state: RequestState<{ count: number }, Error>,
): string {
  switch (state.status) {
    case "idle":
      return "Idle";
    case "loading":
      return "Loading";
    case "success":
      return `Loaded ${state.data.count}`;
    case "failure":
      return state.error.message;
    default:
      return assertNever(state);
  }
}

const idle: RequestState<number, Error> = { status: "idle" };
const loading: RequestState<number, Error> = { status: "loading" };
const success: RequestState<number, Error> = { status: "success", data: 42 };
const failure: RequestState<number, Error> = {
  status: "failure",
  error: new Error("offline"),
};

// @ts-expect-error success requires data
const missingData: RequestState<number, Error> = { status: "success" };

// @ts-expect-error idle cannot contain stale data
const impossible: RequestState<number, Error> = { status: "idle", data: 42 };

void idle;
void loading;
void success;
void failure;
void missingData;
void impossible;
