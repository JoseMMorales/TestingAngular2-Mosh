/* tslint:disable:no-unused-variable */
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync
} from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ TodosComponent ],
      providers: [ TodoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load todos from the server', () => {
    let service = TestBed.inject(TodoService);
    spyOn(service, 'getTodos').and.returnValue(of([1, 2, 3]));

    fixture.detectChanges();
    expect(component.todos.length).toBe(3);
  });

  // Deal with Asynchronous Operations
  // One Way

  // it('should load promiseTodos in Promise from the server', waitForAsync(() => {
  //   let service = TestBed.inject(TodoService);
  //   spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3]));

  //   fixture.detectChanges();

  //   fixture.whenStable().then(() => {
  //     expect(component.todos.length).toBe(3);
  //   });
  // }));

  //Another Way
  it('should load promiseTodos in Promise from the server', fakeAsync(() => {
    let service = TestBed.inject(TodoService);
    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([1, 2, 3]));

    fixture.detectChanges();

    tick();
    expect(component.todos.length).toBe(3);
  }));

});
