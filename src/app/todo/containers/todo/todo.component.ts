import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public todos$: any;

  constructor(
    private todoService: TodoService,
  ) { }

  ngOnInit(): void {
    this.todos$ = this.todoService.loadAll();
  }

  public create(todo: Partial<Todo>) {
    const date = new Date();
    todo.checked = false;
    todo.createdAt = Math.floor(date.getTime() / 1000);
    todo.updatedAt = Math.floor(date.getTime() / 1000);
    this.todoService.create(todo).subscribe(_ => {
      this.todos$ = this.todoService.loadAll();
    })
  }

   public update(todo: Todo) {
    this.todoService.update(todo).subscribe(_ => {
      this.todos$ = this.todoService.loadAll();
    });
  }
  
  public remove(id: number) {
    this.todoService.remove(id).subscribe(_ => {
      this.todos$ = this.todoService.loadAll();
    });
  }

}
