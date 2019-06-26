import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/Task';
import { JsonPipe } from '@angular/common/src/pipes/json_pipe';
import * as moment from 'moment';
import { TaskService } from 'src/app/task.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task: Task = {
    id: null,
    name: null,
    priority: 0,
    parentTask: null,
    completed: false,
    startDate: null,
    endDate: null
  };

  message: string;
  errorMessage: string;

  tasks: Task[];

  isMainTaskAlreadyExists(): boolean {
    if(this.tasks && this.tasks.length) {
      for(let task of this.tasks) {
        if(task.name === this.task.name.trim()) {
          return true;
        }
      }
    }

    return false;
  }

  isParentTaskSelectedValid(): boolean {
    if(!this.task.parentTask) {
      return true;
    }

    if(this.tasks && this.tasks.length) {
      for(let task of this.tasks) {
        if(this.task.parentTask.trim() === task.name.trim()) {
          return true;
        }
      }
    }

    return false;
  }

  onSubmit(taskForm: NgForm) {
    this.taskService.addTask(this.task).subscribe(
      resp => {
        this.message = 'Task ' + resp.name + ' saved successfully!!!';
        taskForm.reset();  
      },
      err => {
        this.errorMessage = 'Error occurred while saving task, reason: ' + err.error.message;
      });
  }

  // onUpdate() {
  //   this.taskService.updateTask(this.task).subscribe(task => {
  //     this.message = 'Task ' + this.task.name + ' updated successfully!!!';
  //   })
  // }

  constructor(private taskService: TaskService, public route: ActivatedRoute) { }

  ngOnInit() {
    this.message = null;
    this.errorMessage = null;
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
    this.getTask();
  }

  getTask(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.taskService.getTask(+id).subscribe(task => {
        task = {...task, startDate: moment(task.startDate, 'DD-MM-YYYY'), endDate: moment(task.endDate, 'DD-MM-YYYY')}
        this.task = task
      });
    }
  }

}
