import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-conversion-forms",
  templateUrl: "./conversion-forms.component.html",
  styleUrls: ["./conversion-forms.component.css"]
})
export class ConversionFormsComponent implements OnInit {
  //constants
  LITERS_PER_GALLON: number = 3.785;
  POUNDS_PER_KILOGRAM: number = 0.454;
  FEET_PER_METER: number = 3.281;
  INCHES_PER_METER: number = 39.372;
  KILOMETERS_PER_MILE: number = 1.609;
  FAHRENHEIT_CONVERT_CELSIUS: string = "(fahrenheit - 32) / 1.8";
  CELSIUS_CONVERT_FAHRENHEIT: string = "(celsius * 1.8) + 32";
  //variables
  public gallons: number;
  public liters: number;
  public pounds: number;
  public kilograms: number;
  public meters: number;
  public feet: number;
  public inches: number;
  public metersToInches: number;
  public miles: number;
  public kilometers: number;
  public fahrenheits: number;
  public celsius: number;

  constructor() {}
  //functions to claculate and return values
  calculateLiters(gallons) {
    return gallons * this.LITERS_PER_GALLON;
  }
  calculateGallons(liters) {
    return liters / this.LITERS_PER_GALLON;
  }
  calculateKilograms(pounds) {
    return pounds * this.POUNDS_PER_KILOGRAM;
  }
  calculatePounds(kilograms) {
    return kilograms / this.POUNDS_PER_KILOGRAM;
  }
  calculateFeet(meters) {
    return meters * this.FEET_PER_METER;
  }
  calculateMeters(feet) {
    return feet / this.FEET_PER_METER;
  }
  calculateMetersInches(inches) {
    return inches / this.INCHES_PER_METER;
  }
  calculateInches(metersToInches) {
    return (metersToInches * this.INCHES_PER_METER);
  }
  calculateKilometers(miles) {
    return miles * this.KILOMETERS_PER_MILE;
  }
  calculateMiles(kilometers) {
    return kilometers / this.KILOMETERS_PER_MILE;
  }
  calculateCelsius(fahrenheits) {
    return (fahrenheits - 32) / 1.8;
  }
  calculateFahrenheits(celsius) {
    return celsius * 1.8 + 32;
  }
  ngOnInit() {}
}
