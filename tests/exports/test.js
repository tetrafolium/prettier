export {
  value1,
  value2 as value2_renamed,
  value3,
  value4 as value4_renamed,
  value5
} from "exports";
export * as ns from "mod";
export a, {b} from "./baz";
export * as foo, {bar} from "./baz";
export {undefinedExport};
