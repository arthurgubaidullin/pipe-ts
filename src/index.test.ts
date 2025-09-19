import { pipe } from "./index.js";

const add = (x: number) => (y: number) => x + y;

it("pipe", () => {
  const result = pipe(
    1,
    add(1),
    add(1),
    add(1),
    add(1),
    add(1),
    add(1),
    add(1),
    add(1),
    add(1),
    add(1),
    add(1),
    add(1),
    add(1),
    add(1),
    add(1),
    add(1),
    add(1),
    add(1),
    add(1)
  );

  expect(result).toStrictEqual(20);
});
