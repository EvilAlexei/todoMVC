import { Store } from './store';

import {
  TestBed,
  inject
} from '@angular/core/testing';

describe('Store service', () => {
  let testDada;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Store
      ]
    });

    testDada = [
      {title: 'Test item 1', completed: false},
      {title: 'Test item 2', completed: true},
      {title: 'Test item 3', completed: false},
      {title: 'Test item 4', completed: true},
      {title: 'Test item 5', completed: false}
    ];
  });

  it('should create instance', inject([Store], store => {
    expect(store).toBeDefined();
  }));

  it('should add new item', inject([Store], store => {
    const todoTitle = 'Test item';
    const todosLength = store.todoItems.length;

    store.add(todoTitle);

    expect(store.todoItems.length).toEqual(todosLength + 1);
    expect(store.todoItems[todosLength].title).toEqual(todoTitle);
  }));

  it('should remove specific item', inject([Store], store => {
    store.todoItems = testDada;
    const todosLength = store.todoItems.length;
    const todo = store.todoItems[0];

    store.remove(todo);

    expect(store.todoItems.length).toEqual(todosLength - 1);
    expect(store.todoItems).not.toContain(todo);
  }));

  describe('should return true when all items completed, otherwise false', () => {
    it('should return false', inject([Store], store => {
      store.todoItems = testDada;

      expect(store.allCompleted()).toBeFalsy();
    }));

    it('should return true', inject([Store], store => {
      store.todoItems = testDada;
      store.todoItems.forEach(el => el.completed = true);

      expect(store.allCompleted()).toBeTruthy();
    }));

    it('should return false', inject([Store], store => {
      store.todoItems = [];

      expect(store.allCompleted()).toBeFalsy();
    }));
  });

  it('should toggle item completion status', inject([Store], store => {
    store.todoItems = testDada;
    const todo = store.todoItems[0];
    const originalItemStatus = todo.completed;
    const toggledItemStatus = store.toggleTodoStatus(todo);

    expect(toggledItemStatus).not.toEqual(originalItemStatus);
  }));

  it('should return active items', inject([Store], store => {
    store.todoItems = testDada;
    const itemsWithFalse = store.todoItems.filter(el => el.completed === false ? el : false);
    const itemsActive = store.getRemaining();

    expect(itemsActive).toEqual(itemsWithFalse);
  }));

  describe('should toggle all items to specific status', () => {
    it('should toggle all items to completed status', inject([Store], store => {
      store.todoItems = testDada;

      store.toggleAllTodos(true);

      expect(store.getByCompletedStatus(true)).toEqual(store.todoItems);
    }));

    it('should toggle all items to active status', inject([Store], store => {
      store.todoItems = testDada;

      store.toggleAllTodos(false);

      expect(store.getByCompletedStatus(false)).toEqual(store.todoItems);
    }));
  });

  describe('should filter items by specific parameter', () => {
    it('should return all items', inject([Store], store => {
      store.todoItems = testDada;
      const filteredItems = store.todosFilter('All');

      expect(filteredItems).toEqual(store.todoItems);
    }));

    it('should return active items', inject([Store], store => {
      store.todoItems = testDada;
      const filteredItems = store.todosFilter('Active');
      const activeItems = store.todoItems.filter(todo => todo.completed ? false : todo);

      expect(filteredItems).toEqual(activeItems);
    }));

    it('should return completed items', inject([Store], store => {
      store.todoItems = testDada;
      const filteredItems = store.todosFilter('Completed');
      const completedItems = store.todoItems.filter(todo => todo.completed ? todo : false);

      expect(filteredItems).toEqual(completedItems);
    }));
  });

  it('should return items with specific completion status', inject([Store], store => {
    store.todoItems = testDada;
    const itemsWithFalse = store.todoItems.filter(el => el.completed === false ? el : false);
    const itemsWithTrue = store.todoItems.filter(el => el.completed === true ? el : false);

    expect(store.getByCompletedStatus(false).length).toEqual(itemsWithFalse.length);
    expect(store.getByCompletedStatus(true).length).toEqual(itemsWithTrue.length);
  }));
});
