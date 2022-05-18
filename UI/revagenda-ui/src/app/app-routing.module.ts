import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from './task-form/task-form.component'
import { TaskListComponent } from './task-list/task-list.component'

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'task-list', component: TaskListComponent },
  { path: 'task-form', component: TaskFormComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
