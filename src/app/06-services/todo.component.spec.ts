import { TodoComponent } from "./todo.component";
import { TodoService } from './todo.service';
import { from, Observable, of } from "rxjs";
import { todo } from "./todo.interface";

describe('TodoComponent', () => {
  let component: TodoComponent;
  let service: TodoService;
  let observable: Observable<any>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', { post: of({}), get: of({}) });

    service = new TodoService(spy);
    component = new TodoComponent(service);

    observable = jasmine.createSpyObj('Observable', ['subscribe']);
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
    let spy = spyOn(service, 'add').and.returnValue(observable);

    component.add();
    expect(spy).toHaveBeenCalled();
  })

  it('should call the server to delete a todo item if the user confirms', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    let spy = spyOn(service, 'delete').and.returnValue(observable);

    component.delete(1);
    expect(spy).toHaveBeenCalledWith(1);
  })

  it('should NOT call the server to delete a todo item if the user cancels', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    let spy = spyOn(service, 'delete').and.returnValue(observable);

    component.delete(1);

    expect(spy).not.toHaveBeenCalled();
  })

})

