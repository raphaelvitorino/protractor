import { by, element } from 'protractor';

export class HomePage {
  getBannerTitle() {
    const banner = element(by.css('.carousel .item.active h3.banner-title'));
    return banner.getText();
  }

  goToNextBanner() {
    const slide = element(by.css('.carousel .carousel-control.right'));
    slide.click();
  }

  getNumberOfSlides() {
    const bullets = element.all(by.css('.carousel-indicators li'));
    return bullets.count();
  }
}
