import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskFormComponent } from './task-form/task-form.component'
import { TaskListComponent } from './task-list/task-list.component'
import { ContentComponent } from './content/content.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: 'task-list', 
    component: TaskListComponent 
  },
  { 
    path: 'task-form', 
    component: TaskFormComponent 
  },
  { 
    path: 'content', 
    component: ContentComponent 
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
