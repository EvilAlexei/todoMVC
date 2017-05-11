import { Component, OnInit } from '@angular/core';

import { Store } from './services/store';
import { Todo } from './models/todo.model';
import { Filter } from './models/filter.model';

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  store: Store;
  storeItems: Todo[];
  todoText: string;
  filterType: string;
  filters: Filter[];

  constructor(store: Store) {
    this.store = store;
    this.storeItems = [];
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
    if (filter.type !== this.filterType) {
      this.filters.forEach((el: Filter) => {
        (el.type === filter.type) ? el.selected = true : el.selected = false;
      });
      this.filterType = filter.type;
      this.storeItems = this.store.todosFilter(this.filterType);
    }
  }

  updateStore() {
    const exampleData = [
      {title: 'Test item 1', completed: false},
      {title: 'Test item 2', completed: true},
      {title: 'Test item 3', completed: false}
    ];
    this.store.todoItems = exampleData;
    this.storeItems = this.store.todoItems;
  }

  ngOnInit() {
    this.updateStore();
  }
}
