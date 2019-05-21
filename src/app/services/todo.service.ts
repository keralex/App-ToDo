import { Injectable } from '@angular/core';
import {Task} from './../models/task';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

 tasks: Task[] = [];
  constructor() { }


}
