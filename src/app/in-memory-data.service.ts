import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Injectable } from '@angular/core';
import { Todo } from './todo/models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() {
    const todos: Todo[] = [
      { id: 11, text: 'test1', checked: false, createdAt: 1573279856, updatedAt: 1573279856 },
      { id: 12, text: 'test2', checked: false, createdAt: 1573279856, updatedAt: 1573279856 },
      { id: 13, text: 'test3', checked: false, createdAt: 1573279856, updatedAt: 1573279856 },
      { id: 14, text: 'test4', checked: false, createdAt: 1573279856, updatedAt: 1573279856 },
      { id: 15, text: 'test5', checked: false, createdAt: 1573279856, updatedAt: 1573279856 },
      { id: 16, text: 'test6', checked: false, createdAt: 1573279856, updatedAt: 1573279856 }
    ]
    return { todos };
  }

  constructor() { }
}
