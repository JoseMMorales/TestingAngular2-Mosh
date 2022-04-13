import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { todo } from './todo.interface';
import { TodoService } from './todo.service';

@Component({
  template: ''
})
export class TodoComponent implements OnInit {
  todos: todo[] = [];
  message!: string;

  constructor(private service: TodoService) { }

  ngOnInit() {
    this.service.getTodos().subscribe((t: todo[]) => this.todos = t);
  }

  add(): void {
    let newTodo: todo = { title: '...' };

    this.service.add(newTodo).subscribe(
      () => console.log('Todo Added on!'),
      error => this.message = error);
  }

  delete(id: number): void {
    if (confirm('Are you sure?'))
      this.service.delete(id).subscribe(
        () => console.log('Todo Deleted!')
      );
  }
}
