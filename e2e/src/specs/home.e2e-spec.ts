import { HomePage } from '../pages/home.po';
import { PageUtils } from '../pages/page-utils.po';

describe('home page', () => {
  let login: PageUtils;
  let home: HomePage;

  beforeAll(() => {
    home = new HomePage();
    login = new PageUtils();
    login.navigateTo('/app/lms/home');
    login.loginExecute();
  });

  it('should be the correct name of the initial banner title', () => {
    expect(home.getBannerTitle()).toEqual('Lorem Ipsum');
  });

  it('should go to the next banner', done => {
    home.goToNextBanner();
    expect(home.getBannerTitle()).toEqual('Agendado0001');
    setTimeout(() => {
      done();
    }, 800);
  });

  it('should have the same number of bullets and slides', () => {
    expect(home.getSlides()).toEqual(5);
  });
});
