export class BasePage {
  goto(path: string = "") {
    cy.visit(Cypress.env("baseURL") + path);
  }
  getLocator(selector: string) {
    // return cy.get(selector);
    return cy.xpath(selector);
  }
  clickElement(xpathSelector: string) {
    this.getLocator(xpathSelector).click({ force: true });
  }
  inputText(xpathSelector: string, text: string) {
    this.getLocator(xpathSelector).type(text);
  }
  waitForElementVisible(selector: string) {
    return cy.xpath(selector).should("be.visible");
  }
}
