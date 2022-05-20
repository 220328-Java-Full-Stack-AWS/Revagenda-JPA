import { Injectable } from '@angular/core';


class Handler {
  units: string;
  callback: Function;

  constructor(_units: string, _callback: Function) {
    this.units = _units;
    this.callback = _callback;
  }
}

@Injectable({
  providedIn: 'root'
})
export class TempretureService {

  constructor() { }

  //temperatureKelvin: number = 0;
  temperatureCelsius: number = 0;
  temperatureFarenheit: number = 0;

  handlers: Handler[] = [];


  //This is another method where instead of a full pub/sub sort of pattern, we just pass a "mutator" or a "setter"
  //orderFunction will hold the function, and these other function can be used to set it, get it, or invoke it.
  orderFunction!: Function;
  //or we can just store the data here and get/set it
  testData: String = '';


  convertFtoC(temperature: number): void {
    console.log("convertKtoC");
    this.temperatureCelsius = (temperature - 32) * (5 / 9);
  }

  convertCtoF(temperature: number): void {
    console.log("convertKtoF");
    this.temperatureFarenheit = temperature * (9 / 5) + 32;
  }



  publish(units: string, temperature: number): void {
    console.log("service is publishing...")
    switch (units) {
      case 'celsius': {
        this.temperatureCelsius = temperature;
        this.convertCtoF(temperature);
        break;
      }
      case 'farenheit': {
        this.temperatureFarenheit = temperature;
        this.convertFtoC(temperature)
        break;
      }
      default: {
        console.log("default case.");
      }
    }
    this.broadcast();
  }

  register(_units: string, callbackFunc: Function): void {
    console.log("service has been registered")
    this.handlers.push({
      units: _units,
      callback: callbackFunc
    });
  }



  broadcast(): void {
    console.log("service is broadcasting...")
    this.handlers.forEach(handler => {
      if (handler.units === "farenheit") {
        handler.callback(this.temperatureFarenheit);
      } else if (handler.units === "celsius") {
        handler.callback(this.temperatureCelsius);
      }
    })
  }


}
