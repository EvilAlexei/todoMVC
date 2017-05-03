import { TodoMVCPage } from './app.po';

describe('todo-mvc App', () => {
  let page: TodoMVCPage;

  beforeEach(() => {
    page = new TodoMVCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
