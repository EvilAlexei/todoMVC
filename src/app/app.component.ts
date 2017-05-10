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
  filterType: string;
  filters: Filter[];

  constructor(store: Store) {
    this.store = store;
    this.storeItems = store.todoItems;
    this.filters = [
      {type: 'All', selected: true},
      {type: 'Active', selected: false},
      {type: 'Completed', selected: false}
    ];
    this.filterType = 'All';
  }

  addTodo() {
    if (this.todoText.length > 0) {
      this.store.add(this.todoText);
      this.todoText = '';
      this.storeItems = this.store.todosFilter(this.filterType);
    }
  }

  remove(todo: Todo) {
    this.store.remove(todo);
    this.storeItems = this.store.todosFilter(this.filterType);
  }

  toggleStatus(todo: Todo) {
    this.store.toggleTodoStatus(todo);
    this.storeItems = this.store.todosFilter(this.filterType);
  }

  toggleAllTodos(completedStatus) {
    this.store.toggleAllTodos(completedStatus);
    this.storeItems = this.store.todosFilter(this.filterType);
  }

  todosFilter(filter) {
    this.filters.forEach((el: Filter) => {
      (el.type === filter.type) ? el.selected = true : el.selected = false;
    });
    if (filter.type !== this.filterType) {
      this.filterType = filter.type;
      this.storeItems = this.store.todosFilter(this.filterType);
    }
  }
}
