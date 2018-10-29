import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo(url: string) {
    browser.waitForAngularEnabled(false);
    browser.driver.manage().window().maximize();
    return browser.get('https://lms.fluig.io/portal/p/1' + url);
  }

  login() {
    const login = 'rapha@qafluig.com';
    const password = 'Raphael@123';
    const inputLogin = element(by.id('username'));
    const inputPassword = element(by.id('password'));
    const submitLogin = element(by.id('submitLogin'));
    inputLogin.sendKeys(login);
    inputPassword.sendKeys(password);
    submitLogin.click();
  }

  getBannerTitle() {
    const carousel = element(by.css('.carousel'));
    const carouselTitle = carousel.element(by.css('.carousel-title'));
    const bannerTitle = carouselTitle.element(by.css('.banner-title'));
    return bannerTitle.getText();
  }
}
