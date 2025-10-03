const { addition, multiplication } = require('../src/calcul');

test('addition de 2 + 3 = 5', () => {
  expect(addition(2, 3)).toBe(5);
});

test("multiplication de 2 * 3 = 6", ()=>{
    expect(multiplication(2, 3)).toBe(6);
});
