import { Injectable } from '@angular/core';

import { Todo } from '../models/todo.model';

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

  allCompleted() {
    if (this.todoItems.length > 0) {
      return this.todoItems.length === this.getByCompletedStatus(true).length;
    }

    return false;
  }

  getRemaining() {
    return this.getByCompletedStatus(false);
  }

  toggleTodoStatus(todo: Todo) {
    todo.completed = !todo.completed;
  }

  toggleAllTodos(completedStatus) {
    this.todoItems.forEach((todo: Todo) => {
      todo.completed = !!completedStatus;
    });
  }

  todosFilter(filter) {
    switch (filter) {
      case 'Completed':
        return this.todoItems.filter((todo: Todo) => todo.completed ? todo : false);
      case 'Active':
        return this.todoItems.filter((todo: Todo) => todo.completed ? false : todo);
      case 'All':
      default:
        return this.todoItems;
    }
  }

  private getByCompletedStatus(status: boolean) {
    return this.todoItems.filter((todo: Todo) => todo.completed === status);
  }
}
