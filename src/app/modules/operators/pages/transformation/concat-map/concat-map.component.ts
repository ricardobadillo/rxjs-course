// Angular.
import { Component } from '@angular/core';

// Modelos.
import { DescriptionCard } from 'src/app/core/models/description-card';



@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent {

  dataCard: DescriptionCard = {
    imageURL: 'assets/images/rxjs.png',
    imageStyle: { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' },
    isList: false,
    showDivider: true,
    styleClass: { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '400px' },
    text: 'Es un operador de aplanamiento que permite concatenar los observables resultantes que pueden fluir a través de ese operador.',
    title: 'concatMap',
  } 

  concat_map_code: string = `
    import { concatMap, fromEvent, interval, pipe, take } from 'rxjs';

    const interval$ = interval(500).pipe(take(3));
    const click$ = fromEvent(document, 'click');

    click$.pipe(
      concatMap(() => interval$)
    ).subscribe(console.log);

    /*
      Resultado:

      Ejecuta un intervalo por cada click.
      El intervalo siguiente inicia una vez que el anterior finaliza.
    /*
  `;

  
  constructor() { }
}