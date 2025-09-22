# PipeTS

Left-to-right function composition in TypeScript.

## Installation

```sh
npm install @arthurgubaidullin/pipe-ts --save
```

## Usage

```ts
import { pipe } from "@arthurgubaidullin/pipe-ts";

// Example: simple numeric transformation
const result = pipe(
  2,
  (x) => x + 2,
  (x) => x * 3
);
// result: 12

// Example: processing a string
const output = pipe(
  "hi",
  (str) => str + " JS",
  (str) => str.toUpperCase(),
  (str) => str.split(""),
  (arr) => arr.reverse().join("")
);
// output: "SJ IH"
```

## License

Copyright (c) Artur Gubaidullin. All rights reserved.

Licensed under the [MIT](LICENSE) license.
