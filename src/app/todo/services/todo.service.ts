import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/todo.model';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private http: HttpClient
  ) { }

  private todosUrl = 'api/todos'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Todoを取得するAPI
  public loadAll() {
    return this.http.get<Todo[]>(this.todosUrl, this.httpOptions).pipe(tap(res => console.log('load all todo', res)));
  }

  public load(id: number) {
    const url = `${this.todosUrl}/${id}`;
    return this.http.get<Todo>(url, this.httpOptions)
  }

  public create(todo: Partial<Todo>) {
    return this.http.post<Todo>(this.todosUrl, todo, this.httpOptions);
  }

  public update(todo: Todo) {
    return this.http.put(this.todosUrl, todo, this.httpOptions);
  }

  public remove(id: number) {
    const url = `${this.todosUrl}/${id}`;
    return this.http.delete<Todo>(url, this.httpOptions).pipe(tap(res => {
      console.log(`delete todo id=${id}`)
    }));
  }
}
