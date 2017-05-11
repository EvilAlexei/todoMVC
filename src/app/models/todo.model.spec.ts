import { Todo } from './todo.model';

describe('Todo model', () => {
  describe('constructor()', () => {

    let todo;

    it('should init with correct values.', () => {
      todo = new Todo('Test');

      expect(todo.title).toEqual('Test');
      expect(todo.completed).toBeFalsy();
    });

    it('should trim title.', () => {
      todo = new Todo(' Test ');

      expect(todo.title).toEqual('Test');
    });
  });
});
