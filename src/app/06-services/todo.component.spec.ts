import { TodoComponent } from "./todo.component";
import { TodoService } from './todo.service';
import { from, of } from "rxjs";
import { todo } from "./todo.interface";

describe('TodoComponent', () => {
  let component: TodoComponent;
  let service: TodoService;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', { post: of({}), get: of({}) });

    service = new TodoService(spy);
    component = new TodoComponent(service);
  })

  it('should set todos property with the items returned from the server', () => {
    let todos: todo[] = [{ id: 1, title: '...'}];

    spyOn(service, 'getTodos').and.callFake(() => {
      return from([ todos ]);
    });

    component.ngOnInit();
    expect(component.todos).toBe(todos);
  })

  it('should set todo when returned from the server', () => {
    let todos: todo[] = [{ id: 1, title: '...'}];

    spyOn(service, 'getTodos').and.callFake(() => {
      return from([ todos ]);
    });

    component.ngOnInit();
    expect(component.todos).toBe(todos);
  })

  it('should call the server to save the changes when a new item is saved', () => {
    let observable = jasmine.createSpyObj('Observable', ['subscribe']);
    let spy = spyOn(service, 'add').and.returnValue(observable);

    component.add();
    expect(spy).toHaveBeenCalled();
  })
})

