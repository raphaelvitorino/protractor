import { element, by } from 'protractor';

export class TrainingAndTrackPage {
  searchTraining() {
    const search = element(by.id('fluig-data-table-input'));
  }
}
