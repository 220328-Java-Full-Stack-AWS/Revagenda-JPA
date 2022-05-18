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

  temperatureKelvin: number = 0;
  temperatureCelsius: number = 0;
  temperatureFarenheit: number = 0;

  handlers: Handler[] = [];

  convertKtoC(temperature: number): void {
    console.log("convertKtoC");
    this.temperatureCelsius = temperature - 273.15;
  }

  convertKtoF(temperature: number): void {
    console.log("convertKtoF");
    this.convertKtoC(temperature);
    this.temperatureFarenheit = this.temperatureCelsius * (9 / 5) + 32;
  }

  convertCtoK(temperature: number): void {
    console.log("convertCtoK");
    this.temperatureKelvin = temperature + 273.15;
  }

  convertFtoK(temperature: number): void {
    console.log("convertFtoK");
    this.temperatureKelvin = ((temperature - 32) * (5 / 9)) + 273.15;
  }

  publish(units: string, temperature: number): void {
    console.log("service is publishing...")
    switch (units) {
      case 'kelvin': {
        this.temperatureKelvin = temperature;
        this.convertKtoC(temperature);
        this.convertKtoF(temperature);
        break;
      }
      case 'celsius': {
        this.temperatureCelsius = temperature;
        this.convertCtoK(temperature);
        this.convertKtoF(this.temperatureKelvin);
        break;
      }
      case 'farenheit': {
        this.temperatureFarenheit = temperature;
        this.convertFtoK(temperature);
        this.convertKtoC(this.temperatureKelvin);
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
      if (handler.units == "farenheit") {
        handler.callback(this.temperatureFarenheit);
      } else if (handler.units == "celsius") {
        handler.callback(this.temperatureCelsius);
      } else if (handler.units == "kelvin") {
        handler.callback(this.temperatureKelvin);
      }
    })
  }


}
