import { ChangeDetectionStrategy, Component } from "@angular/core";
import {signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styles: `
  button {
  padding: 5px;
  margin: 5px 10 px;
  widh: 75px;
  }
  `
})



export class CounterPageComponent {

  counter = 0;
  counterSignal = signal(10);

  increaseBy(value: number){
    this.counter = this.counter + value;  
    this.counterSignal.set(this.counterSignal() + value);
  }

  resetCounter(){
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
