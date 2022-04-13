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
})
