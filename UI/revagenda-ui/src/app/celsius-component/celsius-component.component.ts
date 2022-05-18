import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-celsius-component',
  templateUrl: './celsius-component.component.html',
  styleUrls: ['./celsius-component.component.css']
})
export class CelsiusComponentComponent implements OnInit {

  @Input()
  celsiusTemp: number = 0;

  //(celsiusEmitter)= 'celsiusChange($event)'
  @Output()
  celsiusEmitter: EventEmitter<number> = new EventEmitter<number>();

  emitCelsiusTemp(): void {
    this.celsiusEmitter.emit(this.celsiusTemp);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
