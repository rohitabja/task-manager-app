import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTaskComponent } from 'src/app/add-task/add-task.component';
import { ViewTaskComponent } from 'src/app/view-task/view-task.component';

const routes: Routes = [
  {path: 'addTask', component: AddTaskComponent},
  {path: 'viewTask', component: ViewTaskComponent},
  {path: '', redirectTo: '/viewTask', pathMatch: 'full'},
  {path: 'updateTask/:id', component: AddTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
