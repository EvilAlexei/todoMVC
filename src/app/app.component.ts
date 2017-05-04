import { Component } from '@angular/core';

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoText: string;
  store: string[];

  constructor() {
    this.store = [];
  }

  addTodo() {
    if (this.todoText.length > 0) {
      this.store.push(this.todoText);
      this.todoText = '';
    }
  }
}
