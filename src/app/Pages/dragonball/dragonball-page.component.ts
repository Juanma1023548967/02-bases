
import { Component, signal } from "@angular/core";


interface Characters{
    id: number;
    name: string;
    power: number;
}

@Component({

    templateUrl: './dragonball-page.component.html',
   
})
export class dragonballPageComponent{

characters = signal < Characters[]>([
 {id: 1, name: 'Goku', power: 10012},
 {id: 2, name: 'El chavo', power: 9002},
  {id: 3, name: 'Vegeta', power: 9023},
]);


}

