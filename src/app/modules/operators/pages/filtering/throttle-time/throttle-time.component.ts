// Angular.
import { Component } from '@angular/core';

// Modelos.
import { DescriptionCard } from 'src/app/core/models/description-card';



@Component({
  selector: 'app-throttle-time',
  templateUrl: './throttle-time.component.html',
  styleUrls: ['./throttle-time.component.scss']
})
export class ThrottleTimeComponent {

  dataCard: DescriptionCard = {
    imageURL: 'assets/images/rxjs.png',
    imageStyle: { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' },
    isList: false,
    showDivider: true,
    styleClass: { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '400px' },
    text: 'Permite mostrar el primer valor emitido por el observable y luego ignorar los siguientes valores emitidos por el observable durante un período de tiempo determinado.',
    title: 'Throttle Time',
  };

  throttle_time_code: string = `
    import { fromEvent, pipe, throttleTime } from 'rxjs';

    const clicks$ = fromEvent(document, 'click');
  
    clicks$.pipe(
      throttleTime(1000)
    ).subscribe(console.log);

    // Resultado: Emite un valor, luego ignora los siguientes valores emitidos por el observable durante un segundo.
      
    // Configuración para obtener el primer y último valor emitido.

    clicks$.pipe(
      throttleTime(1000, asyncScheduler, { leading: true, trailing: true })
    ).subscribe(console.log);
  `;
}
