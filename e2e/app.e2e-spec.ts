import { ProjectSrcPage } from './app.po';

describe('project-src App', () => {
  let page: ProjectSrcPage;

  beforeEach(() => {
    page = new ProjectSrcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
