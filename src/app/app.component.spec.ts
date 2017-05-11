import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StoreMock } from './mocks/store.mock';
import { Store } from './services/store';

fdescribe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [FormsModule],
      providers: [
        { provide: Store, useClass: StoreMock }
      ]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  it('should create the app', () => {
    expect(component).toBeDefined();
  });

  it('should add new item', () => {
    component.todoText = 'Test';
    component.addTodo();

    expect(component.todoText).toEqual('');
  });

  it('should do nothing on new item with empty text', () => {
    component.todoText = '';
    component.addTodo();
  });

  it('should remove specific item', () => {
    component.updateStore();
    const todo = component.store.todoItems[0];

    component.remove(todo);
  });

  it('should toggleStatus todo status', () => {
    component.updateStore();
    const todo = component.store.todoItems[0];

    component.toggleStatus(todo);
  });

  it('should toggle all items', () => {
    const status = true;

    component.toggleAllTodos(status);
  });

  it('should filter items', () => {
    const filter = {type: 'Completed', selected: false};

    component.todosFilter(filter);
  });

  it('should do nothing on filter type', () => {
    const filter = {type: component.filterType, selected: false};

    component.todosFilter(filter);
  });

  it('should update store', () => {
    component.updateStore();
  });

  it('should update store on init', () => {
    component.ngOnInit();
  });
});
