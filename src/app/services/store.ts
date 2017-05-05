import { Injectable } from '@angular/core';

import { Todo } from '../todo.model';

@Injectable()
export class Store {
  todoItems: Todo[];

  constructor() {
    this.todoItems = [];
  }

  add(title: string) {
    this.todoItems.push(new Todo(title));
  }

  remove(todo: Todo) {
    this.todoItems.splice(this.todoItems.indexOf(todo), 1);
  }

  getRemaining() {
    return this.getByCompletedStatus(false);
  }

  private getByCompletedStatus(status: boolean) {
    return this.todoItems.filter((todo: Todo) => todo.completed === status);
  }
}
