import { Injectable } from '@angular/core';
import { Task } from './../models/task';
import { of, Observable } from 'rxjs';

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


}
