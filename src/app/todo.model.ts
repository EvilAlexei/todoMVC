export class Todo {
  title: string;
  completed: boolean;

  constructor(title: string) {
    this.completed = false;
    this.title = title.trim();
  }
}
