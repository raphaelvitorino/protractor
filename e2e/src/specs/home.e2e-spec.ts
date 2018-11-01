import { HomePage } from '../pages/home.po';
import { LoginPage } from '../pages/login.po';

describe('home page', () => {
  let login: LoginPage;
  let home: HomePage;

  beforeAll(() => {
    home = new HomePage();
    login = new LoginPage();
    login.navigateTo('/app/lms/home');
    login.loginExecute();
  });

  it('banner title should be Lorem Ipsum', () => {
    expect(home.getBannerTitle()).toEqual('Lorem Ipsum');
  });

  it('should go to the next banner', done => {
    home.goToNextBanner();
    expect(home.getBannerTitle()).toEqual('Agendado0001');
    setTimeout(() => {
      done();
    }, 800);
  });

  it('should have the same amount of bullets and slides', () => {
    expect(home.getNumberOfSlides()).toEqual(5);
  });
});
