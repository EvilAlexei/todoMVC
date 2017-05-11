export class Filter {
  type: string;
  selected: boolean;

  constructor(type: string) {
    this.type = type.trim();
    this.selected = false;
  }
}
