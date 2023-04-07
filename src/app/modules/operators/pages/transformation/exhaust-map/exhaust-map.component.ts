// Angular.
import { Component } from '@angular/core';

// Modelos.
import { DescriptionCard } from 'src/app/core/models/description-card';



@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.scss']
})
export class ExhaustMapComponent {

  listContent: string[] = [
    '❗ El Async Scheduler no crea un observable, sino una suscripción.',
    '💡 Una suscripción es el producto de un subscriber.',
    '🧠 Nos permite hacer un setTimeout o un setInterval integrando una suscripción.',
  ];

  dataCard: DescriptionCard = {
    imageURL: 'assets/images/rxjs.png',
    imageStyle: { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' },
    isList: false,
    showDivider: true,
    styleClass: { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '400px' },
    text: 'Es otro operador de aplanamiento (recibe un observable y maneja la suscripción internamente). Si se ejecuta un nuevo observable, verifica si hay otras suscripciones activas. Este operador solo manteniene una suscripción activa antes de añadir una nueva.',
    title: 'exhaustMap',
  } 

  exhaust_map_code: string = `
    import { exhaustMap, fromEvent, interval, pipe, take } from 'rxjs';

    const interval$ = interval(500).pipe(take(3));
    const click$ = fromEvent(document, 'click');

    click$.pipe(
      exhaustMap(() => interval$)
    ).subscribe(console.log);

    /*
      Resultado:
      Se ejecuta un intervalo al hacer click.
      Si se hace click antes de que el intervalo finalice, no se ejecuta un nuevo intervalo.
    */
  `;

  
  constructor() { }
}