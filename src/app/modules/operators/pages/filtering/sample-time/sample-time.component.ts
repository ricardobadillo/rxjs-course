// Angular.
import { Component } from '@angular/core';

// Modelos.
import { DescriptionCard } from 'src/app/core/models/description-card';



@Component({
  selector: 'app-sample-time',
  templateUrl: './sample-time.component.html',
  styleUrls: ['./sample-time.component.scss']
})
export class SampleTimeComponent {
  
  listContent: string[] = [
    '❗ Permite tener una suscripción que está pendiente de cada una de sus emisiones en periodos de tiempo.',
    '💡 Es mejor usarlo de primero antes que otros operadores de transformación de los datos.',
  ];

  dataCard: DescriptionCard = {
    imageURL: 'assets/images/rxjs.png',
    imageStyle: { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' },
    isList: false,
    showDivider: true,
    styleClass: { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '400px' },
    text: 'Permite obtener el úlitmo valor emitido por el observable durante un período de tiempo determinado.',
    title: 'Sample Time',
  };

  sample_time_code: string = `
    import { fromEvent, pipe } from 'rxjs';
    
    const clicks$ = fromEvent(document, 'click');

    clicks$.pipe(
      sampleTime(2000),
      map(({ x, y }) => ({ x, y })),
    ).subscribe(console.log);
  `;
}