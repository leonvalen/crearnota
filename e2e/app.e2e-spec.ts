import { CrearnotaPage } from './app.po';

describe('crearnota App', () => {
  let page: CrearnotaPage;

  beforeEach(() => {
    page = new CrearnotaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
