import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  str: string = "test";

  onClick(): void {
    this.str = this.reverseString(this.str);

  }

  reverseString(str: string): string {
    return str.split("").reverse().join("");
  }

  // testFunction(param: any): void {
  //   console.log(param)
  // }


  constructor() { }

  ngOnInit(): void {
  }

}
