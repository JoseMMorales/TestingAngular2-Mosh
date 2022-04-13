import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { todo } from './todo.interface';


@Injectable({
  providedIn: 'root',
})
export class TodoService {

  constructor(private http: HttpClient) { }

  add(todo: todo): Observable<void> {
    return this.http.post<void>('...', todo);
  }

  getTodos(): Observable<todo[]> {
    let endpoint = `todo/get`;

    return this.http.get<todo[]>(endpoint).pipe(
      map((r: todo[]) => r)
    );
  }

  delete(id: number): Observable<void> {
    let endpoint = `todo/delete/${id}`;

    return this.http.delete<void>(endpoint);
  }

}
