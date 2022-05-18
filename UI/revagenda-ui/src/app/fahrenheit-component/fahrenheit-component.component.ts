import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fahrenheit-component',
  templateUrl: './fahrenheit-component.component.html',
  styleUrls: ['./fahrenheit-component.component.css']
})
export class FahrenheitComponentComponent implements OnInit {



  @Input()
  farenheitTemp: number = 0;

  //(farenheitEmitter)= 'farehneitChange($event)'
  @Output()
  farenheitEmitter: EventEmitter<number> = new EventEmitter<number>();

  emitFarenheitTemp(): void {
    this.farenheitEmitter.emit(this.farenheitTemp);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
