import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class TodoService {
  constructor(private http: HttpClient) {
  }

  add(todo: { title: string; }) {
    return this.http.post('...', todo).pipe(map((r:any) => r));
  }

  getTodos() {
    return this.http.get('...').pipe(map((r:any) => r));
  }

  getTodosPromise() {
    return this.http.get('...').pipe(map((r:any) => r)).toPromise();
  }

  delete(id: number) {
    return this.http.delete('...').pipe(map((r:any) => r));
  }
}
