import { browser, element, by } from 'protractor';

export class PageUtils {
  navigateTo(url: string) {
    browser.waitForAngularEnabled(false);
    browser.driver
      .manage()
      .window()
      .maximize();
    return browser.get('https://lms.fluig.io/portal/p/1' + url);
  }

  loginExecute() {
    const login = 'rapha@qafluig.com';
    const password = 'Raphael@123';
    const inputLogin = element(by.id('username'));
    const inputPassword = element(by.id('password'));
    const submitLogin = element(by.id('submitLogin'));
    inputLogin.sendKeys(login);
    inputPassword.sendKeys(password);
    submitLogin.click();
  }
}
