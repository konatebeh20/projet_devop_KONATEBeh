const { estPair } = require("../src/utils");

test("4 est pair", () => {
    expect(estPair(4)).toBe(true);
});

test("5 n'est pas Pair", () => {
    expect(estPair(5)).toBe(false);
});