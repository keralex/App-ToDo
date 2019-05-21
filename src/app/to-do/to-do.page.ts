import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { TagContentType } from '@angular/compiler';
import { Task } from '../models/task';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.page.html',
  styleUrls: ['./to-do.page.scss'],
  providers:[TodoService]
})
export class ToDoPage implements OnInit {
  tasks: Array<Task>;
  text: string;
  constructor(private todoservice: TodoService) {

  }

  ngOnInit() {
    this.tasks=[{"id":0,"tittle":"task1","complete":false},
               {"id":1,"tittle":"task2","complete":false}]; 
    }

    addTask(){
      let newTask={"id":4,"tittle":this.text.toString(),"complete":false};
      this.tasks.push(newTask);
      this.text="";
      console.log(this.tasks);
        }

}
