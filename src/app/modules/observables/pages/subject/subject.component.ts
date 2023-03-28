// Angular.
import { Component } from '@angular/core';



@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent {

  cardStyle = {
    'margin-bottom': '1rem',
    'padding-top': '2rem',
    'width': '400px'
  };

  imageStyle = {
    'display': 'flex',
    'height': '100px',
    'margin': '0 auto',
    'width': '100px'
  };

  subject_code: string = `
    import { Observable, Subject } from 'rxjs';

    const interval$ = new Observable(subscriber => {
      const intervalID = setInterval(
        () => subscriber.next(Math.random()), 1000);

      return () => clearInterval(intervalID);
    });
  
    // Se imprime los valores emitidos para los dos suscriptores.
    // Y son los mismos para ambos 👀.
    
    const subscriptor = interval$.subscribe(console.log);
    const otherSubscriptor = interval$.subscribe(console.log);
  `;

  subject_code_v2: string = `
    import { Observable, Subject } from 'rxjs';

    const interval$ = new Observable(subscriber => {
      const intervalID = setInterval(
        () => subscriber.next(Math.random()), 1000);

      return () => clearInterval(intervalID);
    });

    // Se imprime los valores emitidos para los dos suscriptores.
    // Y ahora son diferentes 👀.
    
    const subject$ = new Subject();
    interval$.subscribe(subject$);

    const subscriptor = subject$.subscribe(console.log);
    const otherSubscriptor = subject$.subscribe(console.log);
  `;
}