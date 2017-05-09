import { Component } from '@angular/core';

import { Store } from './services/store';
import { Todo } from './todo.model';

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoText: string;
  store: Store;

  constructor(store: Store) {
    this.store = store;
  }

  addTodo() {
    if (this.todoText.length > 0) {
      this.store.add(this.todoText);
      this.todoText = '';
    }
  }

  remove(todo: Todo) {
    this.store.remove(todo);
  }

  toggleStatus(todo: Todo) {
    this.store.toggleTodoStatus(todo);
  }

  toggleAllTodos(completedStatus) {
    this.store.toggleAllTodos(completedStatus);
  }
}
