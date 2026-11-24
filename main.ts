// One Line, One Minute: The Vending Machine Pickup Line Contest
// Entry: a vending machine flirting with a passing human.
//
// The joke's setup/turn, in my own words: the machine starts by stating its
// boring day job (dispensing snacks), then flips the human idiom "you pressed
// all my buttons" — literal for a machine covered in buttons — into a
// compliment, and lands on "exact change", the machine's eternal complaint,
// by saying this one human is worth more than the coins it usually demands.
// Charming because the machine is the one being won over, not the other way round.
import * as fs from "node:fs";

const ENTRY =
  "I dispense snacks all day, but you just pressed all my buttons — and for once, I don't need exact change to feel lucky.";

if (ENTRY.length === 0) {
  throw new Error("Entry must not be empty");
}
if (ENTRY.length > 200) {
  throw new Error(`Entry is ${ENTRY.length} characters, over the 200 limit`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("Entry must be a single line");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");

const readBack = fs.readFileSync("/output/entry.txt", "utf8");
if (readBack !== ENTRY + "\n") {
  throw new Error("Read-back mismatch: /output/entry.txt does not match the entry");
}

console.log(`Entry written (${ENTRY.length} characters): ${ENTRY}`);
