// Angular.
import { Component } from '@angular/core';

// Modelos.
import { DescriptionCard } from 'src/app/core/models/description-card';



@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent {

  listContent: string[] = [
    '❗ Permite contar cuantas milésimas de segundos han pasado desde la última emisión',
    '💡 Permite restriguir la cantidad de emisiones de el observable.',
    '🧠 Emite el último valor después de que se cumpla el tiempo establecido.',
  ];

  dataCard: DescriptionCard = {
    imageURL: 'assets/images/rxjs.png',
    imageStyle: { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' },
    isList: false,
    showDivider: true,
    styleClass: { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '400px' },
    text: 'Se utiliza para controlar la frecuencia de emisiones de un observable. Este operador toma como parámetro un valor de tiempo y espera que no se emitan valores durante ese periodo.',
    title: 'Debounce Time',
  };

  debounce_time_code: string = `
    import { distinct, fromEvent, pipe } from 'rxjs';
    
    const clicks$ = fromEvent(document, 'click');

    clicks$.pipe(
      debounceTime(1000)
    ).subscribe(console.log);

    // Resultado: Se emite el primer click y luego se espera 1 segundo para emitir. 
  `;
}