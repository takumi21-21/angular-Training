import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './containers/todo/todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { TodoListFormComponent } from './components/todo-list-form/todo-list-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TodoComponent, TodoListComponent, TodoListItemComponent, TodoListFormComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    ReactiveFormsModule
  ],
  exports: [TodoComponent]
})
export class TodoModule { }
