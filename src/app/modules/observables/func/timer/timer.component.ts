// Angular.
import { Component } from '@angular/core';

// Modelos.
import { DescriptionCard } from 'src/app/core/models/description-card';



@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {

  dataCard: DescriptionCard = {
    imageURL: 'assets/images/rxjs.png',
    imageStyle: { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' },
    isList: false,
    showDivider: true,
    styleClass: { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '400px' },
    text: 'Es un observable que trabaja con intervalos de tiempo. Crea un observable que empieza a emitir valores después de un tiempo determinado y luego emite valores cada cierto tiempo.',
    title: 'Timer',
  } 

  timer_code: string = `
    import { timer } from 'rxjs';

    const observer = {
      next: value => console.log('Next:', value),
      complete: () => console.log('Completado'),
    };

    const timer$ = timer(2000);

    // Emite 0 después de 2 segundos y luego se completa.
    timer$.subscribe(observer);

    // Otra configuración 👀

    const timer$ = timer(2000, 1000);

    // Emite números cada segundo después de 2 segundos.
    timer$.subscribe(observer);
  `;

  timer_code_v2: string = `
    import { timer } from 'rxjs';

    const observer = {
      next: value => console.log('Next:', value),
      complete: () => console.log('Completado'),
    };

    const hoyEn5 = new Date(); // ahora

    // Establecer fecha con día y hora actual sumándole 5 segundos.
    hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

    const timer$ = timer(hoyEn5);
    // Emite 0 después de 5 segundos y luego se completa.
    // Es útil cuando queremos que un observable se ejecute en un momento determinado.
    // Es equivalente a setTimeout(() => {}, 5000);
  `;


  constructor() { }
}