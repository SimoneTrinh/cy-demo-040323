import { HomePage } from "../../pages/modules/home/home";
import { LoginPage } from "../../pages/modules/login/login";

let loginPage: LoginPage;
let homePage: HomePage;

describe("Demo test", () => {
  it("Go to login page", () => {
    loginPage = new LoginPage();
    homePage = new HomePage();

    loginPage.goto();
    // loginPage

    loginPage.getLocator(loginPage.txbUsername).should("be.visible");
    // loginPage.getLocator(loginPage.txbUsername).should("");

    loginPage.inputUserName("Admin");
    loginPage.inputPass("admin123");

    loginPage.clickBtnLogin();
    homePage.verifyHeaderTextEqual("Dashboard");
  });
});
