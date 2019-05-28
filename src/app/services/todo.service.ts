import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from './../models/task';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  id = 0;
  tasks: Task[] = [];
  constructor() { }

  //  add a task to the task list
  addTask(tittle: string) {
    this.id++;
    console.log(this.id);
    const task = new Task(this.id, tittle.toString(), false);
    this.tasks.push(task);
    console.log(this.tasks);

  }
  // get all the tasks

  getTasks(): Observable<Task[]> {
    return of(this.tasks);

  }
  //getAtask
  getTask(id: number) {
    return this.tasks.find(task => task.id === id);
  }
  // delete the taks

  deleteTask(task: Task) {

    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

  checkTask(task: Task) {
    if (task.complete === true) {
      this.tasks.find(todo => todo.id === task.id).complete = false;
      console.log(this.tasks);
    }
    else {
      this.tasks.find(todo => todo.id === task.id).complete = true;
      console.log(this.tasks);
    }
  }

}
