import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: string[] = [];
  promiseTodos: string[] = [];
  message: string | undefined;

  constructor(private service: TodoService) {}

  ngOnInit() {
    this.service.getTodos().subscribe((t: string[]) => this.todos = t);
    this.service.getTodosPromise().then((t: any) => { this.promiseTodos = t });
  }

  add(): void {
    var newTodo = { title: '... ' };
    this.service.add(newTodo).subscribe(
      (t: string) => this.todos.push(t),
      (err: any) => this.message = err);
  }

  delete(id: number): void {
    if (confirm('Are you sure?'))
      this.service.delete(id).subscribe();
  }
}
