import { BasePage } from "../../base";

export class HomePage extends BasePage {
  private headerText: string = "//span[@class='oxd-topbar-header-breadcrumb']";

  verifyHeaderTextEqual(text: string) {
    this.getLocator(this.headerText).should("have.text", text);
  }
}
