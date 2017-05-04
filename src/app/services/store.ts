import { Todo } from '../todo.model';

export class Store {
  todos: Todo[];

  constructor() {
    this.todos = todos.map( (todo: {title: string, completed: boolean}) => {
      let ret = new TodoItem(todo.title);
      ret.completed = todo.completed;
      return ret;
    });
  }

  private updateStore() {
    localStorage.setItem('angular2-todos', JSON.stringify(this.todos));
  }

  private getWithCompleted(completed: boolean) {
    return this.todos.filter((todo: TodoItem) => todo.completed === completed);
  }

  allCompleted() {
    return this.todos.length === this.getCompleted().length;
  }

  setAllTo(completed: boolean) {
    this.todos.forEach((t: TodoItem) => t.completed = completed);
    this.updateStore();
  }

  removeCompleted() {
    this.todos = this.getWithCompleted(false);
    this.updateStore();
  }

  getRemaining() {
    return this.getWithCompleted(false);
  }

  getCompleted() {
    return this.getWithCompleted(true);
  }

  toggleCompletion(todo: TodoItem) {
    todo.completed = !todo.completed;
    this.updateStore();
  }

  remove(todo: TodoItem) {
    this.todos.splice(this.todos.indexOf(todo), 1);
    this.updateStore();
  }

  add(title: String) {
    this.todos.push(new TodoItem(title));
    this.updateStore();
  }
}
*/
