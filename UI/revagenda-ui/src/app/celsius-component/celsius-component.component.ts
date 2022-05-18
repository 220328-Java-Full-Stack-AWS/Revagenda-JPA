import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TempretureService } from './../tempreture.service';

@Component({
  selector: 'app-celsius-component',
  templateUrl: './celsius-component.component.html',
  styleUrls: ['./celsius-component.component.css']
})
export class CelsiusComponentComponent implements OnInit {

  constructor(_temperatureService: TempretureService) { 
    this.temperatureService = _temperatureService;
    this.temperatureService.register("celsius", (temperature: number) => {this.celsiusTemp = temperature});
  }

  temperatureService: TempretureService;
  celsiusTemp: number = 0;

  publish() {
    this.temperatureService.publish("celsius", this.celsiusTemp);
  }

  ngOnInit(): void {
  }

}
