describe("Example test", () => {
  const a = "a1";
  const b = "a";
  const c = "a";
  const d = "b";

  it("compares values using should()", () => {
    cy.wrap(a).should("eq", b, d);
  });
  //should("eq", b, c); => test passed
  //should("eq", b, d); => test passed (expect: failed)
});
