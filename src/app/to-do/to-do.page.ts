import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { TagContentType } from '@angular/compiler';
import { Task } from '../models/task';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.page.html',
  styleUrls: ['./to-do.page.scss'],
  providers: [TodoService]
})
export class ToDoPage implements OnInit {
  tasks: Array<Task> = [];
  text: string;
  constructor(private todoservice: TodoService) {

  }

  ngOnInit() {
    this.getTasks();
  }

  addTask() {
    this.todoservice.addTask(this.text);
    this.text = '';
  }
  getTasks() {
    this.todoservice.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }
  deleteTask(id: number) {
    this.todoservice.deleteTask(this.todoservice.getTask(id));
  }
  checkTask(id: number) {
    this.todoservice.checkTask(this.todoservice.getTask(id));
  }

}
