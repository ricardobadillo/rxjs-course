// Angular.
import { Component } from '@angular/core';

// Modelos.
import { DescriptionCard } from 'src/app/core/models/description-card';



@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.scss']
})
export class TakeUntilComponent {

  dataCard: DescriptionCard = {
    imageURL: 'assets/images/rxjs.png',
    imageStyle: { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' },
    isList: false,
    showDivider: true,
    styleClass: { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '400px' },
    text: 'Recibe como argumento otro observable. Sigue recibiendo los valores y sigue emitiendo, hasta que el segundo observable emita su primer valor.',
    title: 'Take Until',
  };

  take_until_code: string = `
    import { fromEvent, interval, pipe, takeUntil } from 'rxjs';

    const button = document.createElement('button');
    button.innerHTML = 'Stop timer';

    document.querySelector('body').appendChild(button);

    const counter$ = interval(1000);
    const clickButton$ = fromEvent(button, 'click');

    counter$.pipe(
      takeUntil(clickButton$))
      .subscribe(console.log);

      // Resultado: Emite los valores del observable counter$ hasta que el observable clickButton$ emita su primer valor.
  `;
}