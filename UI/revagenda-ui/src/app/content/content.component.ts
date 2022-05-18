import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  str: string = "test";
  celsiusTemp: number = 0;
  farenheitTemp: number = 32;

//(farenheitEmitter)= 'farehneitChanged($event)'
//(celsiusEmitter)= 'celsiusChanged($event)'

//This stuff is no longer in use, we moved it to the temperature service
  // farenheitChanged(f: number): void {
  //   //F = C*(9/5) + 32
  //   this.celsiusTemp = (f - 32) * (5/9);
  // }

  // celsiusChanged(c: number): void {
  //   this.farenheitTemp = c * (9/5) + 32
  // }


  onClick(): void {
    this.str = this.reverseString(this.str);

  }

  reverseString(str: string): string {
    return str.split("").reverse().join("");
  }



  constructor() { }

  ngOnInit(): void {
  }

}
