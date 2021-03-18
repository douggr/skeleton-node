function* dataProvider(): Generator<[number, number]> {
  yield [1, 2];
  yield [2, 3];
  yield [3, 4];
  yield [4, 5];
  yield [5, 6];
}

const data = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
];

test("foo", () => {
  for (const [input, expected] of dataProvider()) {
    expect(input + 1).toEqual(expected);
  }
});

describe("foo", () => {
  test.each(data)("%i + 1 === %i", (input: number, expected: number) => {
    expect(input + 1).toEqual(expected);
  })
})
