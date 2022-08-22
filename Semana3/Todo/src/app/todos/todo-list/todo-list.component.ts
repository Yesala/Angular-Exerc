import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../interface/todos.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent{

 @Input('data') tareas : Task[] = []

}
