describe("My Adding of Numbers Test", () => {
  it("Visits the page, fill the input fields, click the result button and check if result is as expected", () => {
    cy.visit("/");
    cy.get('input[name="firstNumber"]').type("4");
    cy.get('input[name="secondNumber"]').type("5");
    cy.get('button[name="addNumbers"]').click();
    cy.contains("p", 9);
  });
});
