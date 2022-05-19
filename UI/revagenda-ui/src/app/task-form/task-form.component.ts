import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RemoteApiService, Task } from '../remote-api.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  name: string = '';
  description: string = '';

  constructor(private api: RemoteApiService) {
   }

  ngOnInit(): void {
  }

  submitNewTask(): void {
    console.log("submitting new task...")
    let task = new Task(this.name, this.description);
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    this.api.postNewTask("/tasks", task, options).subscribe((data: any) => { console.log("returned data: ", data) });
  }


}



