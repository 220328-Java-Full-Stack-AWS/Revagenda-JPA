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
  
  //publish a callback function that allows another component to mutate this variable via service
  testData: String = '';
  testData2: String = '';
  test() {
    console.log("publishing function...")
    this.temperatureService.orderFunction = ((data: string) => {
      this.testData = data
      console.log("sending data...")
    })
  }

  test2() {
    this.testData2 = this.temperatureService.testData;
  }

  publish() {
    this.temperatureService.publish("celsius", this.celsiusTemp);
  }

  ngOnInit(): void {
  }

}
