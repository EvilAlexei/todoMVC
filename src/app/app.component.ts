import { Component } from '@angular/core';

@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoText: string;

  addTodo() {
    console.log(this.todoText);
  }
}
