import { TrainingAndTrackPage } from '../pages/trainingandtrack.po';
import { PageUtils } from '../pages/page-utils.po';

describe('training and track', () => {
  let pageUtils: PageUtils;
  let trainingAndTrack: TrainingAndTrackPage;

  beforeAll(() => {
    pageUtils = new PageUtils();
    trainingAndTrack = new TrainingAndTrackPage();
    pageUtils.navigateTo('/trainingandtrack');
  });

  it('should search for training', () => {
    trainingAndTrack.searchTraining('Treinamento Raphael - conteúdos');
  });
});
