import { Component, OnInit } from '@angular/core';
import { Task } from '../interface/todos.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  public todos: Task [] =[
    {
      task: "Comprar el pan", completed : false
    },
    {
      task: "Comprar mantequilla", completed : false
    },
    {
      task: "Comprar leche", completed : false
    }
  ]

  addTask = (task: Task) => {
    this.todos.push(task)
    this.show()
    
  }

  show(){
    const alert = document.getElementById('alert')
    if (alert) {
      alert.style.display = 'block'
      setTimeout(() => {
        alert.style.display = 'none'
      }, 3000);
    }
  }
}
