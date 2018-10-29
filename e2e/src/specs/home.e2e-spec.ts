import { HomePage } from '../pages/home.po';

describe('home page', () => {
  let page: HomePage;

  beforeAll(() => {
    page = new HomePage();
    page.navigateTo('/app/lms/home');
    page.login();
  });

  it('banner title should be Lorem Ipsum', () => {
    expect(page.getBannerTitle()).toEqual('Lorem Ipsum');
  });
});
