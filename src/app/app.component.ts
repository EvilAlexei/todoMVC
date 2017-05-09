import { Component } from '@angular/core';

import { Store } from './services/store';
import { Todo } from './models/todo.model';
import { Filter } from './models/filter.model';

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  store: Store;
  storeItems: Todo[];
  todoText: string;
  filters: Filter[];

  constructor(store: Store) {
    this.store = store;
    this.storeItems = store.todoItems;
    this.filters = [
      {type: 'All', selected: true},
      {type: 'Active', selected: false},
      {type: 'Completed', selected: false}
    ];
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

  todosFilter(filter) {
    this.filters.forEach((filter: Filter) => filter.selected = false);
    filter.selected = true;
    this.storeItems = this.store.todosFilter(filter.type);;
  }
}
