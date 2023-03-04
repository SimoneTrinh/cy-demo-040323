import { BasePage } from "../../base";

export class LoginPage extends BasePage {
  txbUsername: string = `//input[@name='username']`;
  txbPassword: string = `//input[@name='password']`;
  btnLogin: string = `//button[@type='submit']`;

  gotoLoginPage() {
    this.goto("");
  }

  inputUserName(username: string) {
    this.inputText(this.txbUsername, username);
  }

  inputPass(username: string) {
    this.inputText(this.txbPassword, username);
  }

  clickBtnLogin() {
    this.clickElement(this.btnLogin);
  }
}
