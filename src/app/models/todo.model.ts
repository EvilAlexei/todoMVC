export class Todo {
  title: string;
  completed: boolean;

  constructor(title: string) {
    this.title = title.trim();
    this.completed = false;
  }
}
