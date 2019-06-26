import { Component, OnInit } from '@angular/core';
import { Task } from '../model/Task';
import { TaskService } from 'src/app/task.service';
import * as moment from 'moment';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  tasks: Task[];
  message: string;
  errorMessage: string;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.message = null;
    this.errorMessage = null;
    this.loadTasks();
  }

  editTask(task) {

  }

  endTask(task: Task) {
    var updatedTask = {...task, completed: true};
    this.taskService.endTask(updatedTask).subscribe(
      resp => {
        this.message = 'Task ' + resp.name + ' ended successfully';
        this.loadTasks();
      },
      err => {
        this.errorMessage = err.error.message;
      });
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

}
