export class Filter {
  type: string;
  selected: boolean;

  constructor(title: string) {
    this.type = title.trim();
    this.selected = false;
  }
}
