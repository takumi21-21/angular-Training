import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list-form',
  templateUrl: './todo-list-form.component.html',
  styleUrls: ['./todo-list-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListFormComponent implements OnInit {

  @Output() create = new EventEmitter<Partial<Todo>>();

  public form = this.fb.group({
    text: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {

  }

  onSubmit() {
    const text: string = this.form.get('text').value;
    const todo: Partial<Todo> = {
      text,
    };
    this.create.emit(todo);
    this.form.reset();
  }

}
