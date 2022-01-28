import { Component, OnInit }  from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
todos:Todo[];
inputTodo:string = '';
todo: string;
newContent: string = '';

constructor () {}

ngOnInit(): void {
this.todos = [
    {
      id: 0,
      content: 'First Todo',
      completed: false,
    },
    {
      id: 1,
      content: 'Second Todo',
      completed: false
    }
  ]
}

toggleDone (id:number) {
this.todos.map((v, i) => {
  if(i == id) v.completed = !v.completed;
  return v;
})
}

deleteTodo (id:number) {
  this.todos = this.todos.filter((v, i) => i !== id);
}

addTodo () {
this.todos.push({
  id: 0,
  content: this.inputTodo,
  completed: false,
});
this.inputTodo = '';
}

onEdit (todo) {
  if(this.todos){
    console.log('todo clicked!', todo.content);
    todo.content = this.newContent;
    console.log('new content', this.newContent)
  }
}

}