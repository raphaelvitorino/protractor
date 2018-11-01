import { element, by } from 'protractor';

export class TrainingAndTrackPage {
  searchTraining(name: string) {
    const search = element(by.id('fluig-data-table-input'));
    search.sendKeys(name);
    return search;
  }
  goToTrainingDetails() {
    const details = element(by.css('.table-datatable .table-row a.btn-link=$'));
  }
}
