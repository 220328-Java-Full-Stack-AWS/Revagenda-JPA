import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RemoteApiService } from './../remote-api.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  constructor(private api: RemoteApiService) { }

  test() {
    //this.api.test().subscribe((data: any) => {console.log("returned data: ", data)})
    this.api.testTaskGet().subscribe((data: any) => { console.log("returned data: ", data) });
  }





  ngOnInit(): void {
    this.api.testTaskGet().subscribe((data: any) => {console.log("returned data: ", data)})

  }


}

