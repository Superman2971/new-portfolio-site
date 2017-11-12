import { NewPortfolioSitePage } from './app.po';

describe('new-portfolio-site App', function() {
  let page: NewPortfolioSitePage;

  beforeEach(() => {
    page = new NewPortfolioSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
