import { Injectable } from '@angular/core';

import { Todo } from '../todo.model';

const exampleData = [
      {title: 'Test item 1', completed: false},
      {title: 'Test item 2', completed: false}
    ];

@Injectable()
export class Store {
  todoItems: Todo[];

  constructor() {
    this.todoItems = exampleData;
  }

  add(title: string) {
    this.todoItems.push(new Todo(title));
  }

  remove(todo: Todo) {
    this.todoItems.splice(this.todoItems.indexOf(todo), 1);
  }
  
  allCompleted() {
    return this.todoItems.length === this.getByCompletedStatus(true).length;
  }

  getRemaining() {
    return this.getByCompletedStatus(false);
  }

  toggleTodoStatus(todo: Todo) {
    todo.completed = !todo.completed;
  }

  toggleAllTodos(completedStatus) {
    this.todoItems.forEach((todo: Todo) => {
      todo.completed = completedStatus;
    });
  }

  private getByCompletedStatus(status: boolean) {
    return this.todoItems.filter((todo: Todo) => todo.completed === status);
  }
}
