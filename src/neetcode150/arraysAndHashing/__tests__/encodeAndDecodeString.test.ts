import { assertEquals } from "../../../testingUtils/assertions.ts";

import Encoder from "../encodeAndDecodeString.ts";

Deno.test("Encode and Decode String", () => {
  const encoder = new Encoder();

  assertEquals(encoder.encode(["jaime", "abbariao"]), "5/jaime8/abbariao");
  assertEquals(encoder.decode("5/jaime8/abbariao"), ["jaime", "abbariao"]);
});
