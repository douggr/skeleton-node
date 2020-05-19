import unaccent from "../../src/string/unaccent";

function* dataProvider(): Generator<[string, string]> {
  yield ["àáâãäçýÿ\nÀÁÂÃÄÇÝ", "aaaaacyy\nAAAAACY"];
  yield ["Crème Brulée", "Creme Brulee"];
  yield ["CRÈME BRULÉE", "CREME BRULEE"];
  yield ["Mon\tcafé est plein de\nCAFÉÏNE!", "Mon\tcafe est plein de\nCAFEINE!"];
}

test("unaccent", () => {
  for (const [input, expected] of dataProvider()) {
    const out = unaccent(input);

    expect(out).toEqual(expected);
  }
});
