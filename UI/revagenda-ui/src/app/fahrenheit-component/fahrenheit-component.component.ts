import { TemplateLiteralElement } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { TempretureService } from './../tempreture.service';


@Component({
  selector: 'app-fahrenheit-component',
  templateUrl: './fahrenheit-component.component.html',
  styleUrls: ['./fahrenheit-component.component.css']
})
export class FahrenheitComponentComponent implements OnInit {

  //This is basically the same thing as autowiring in spring. Angular is grabbing the singleton
  //of this service class and dependency injecting it by type for us.
  constructor(_temperatureService: TempretureService) {
    this.temperatureService = _temperatureService
    this.temperatureService.register("farenheit", (temperature: number) => {this.farenheitTemp = temperature});
  }

  temperatureService: TempretureService;
  farenheitTemp: number = 0;

  publish() {
    this.temperatureService.publish("farenheit", this.farenheitTemp);
  }

  ngOnInit(): void {
  }

}
