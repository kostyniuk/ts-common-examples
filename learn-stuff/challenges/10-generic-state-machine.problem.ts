import { assertNever } from "../helpers/type-utils.js";

/**
 * Replace the bag of optionals with a generic discriminated union for exactly
 * four states: idle, loading, success with data, and failure with an error.
 */
export type RequestState<Data, Failure> = {
  loading: boolean;
  data?: Data;
  error?: Failure;
};

/**
 * Exhaustively handle all four states. Access data/error without assertions
 * and finish with assertNever for future exhaustiveness.
 */
export function describeState(
  state: RequestState<{ count: number }, Error>,
): string {
  return JSON.stringify(state);
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
void assertNever;
