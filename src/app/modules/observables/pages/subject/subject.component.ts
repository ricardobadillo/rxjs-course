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
    import { Observable } from 'rxjs';

    const interval = new Observable(subscriber => {
      const intervalID = setInterval(
        () => subscriber.next( Math.random() ), 1000);

      return () => clearInterval( intervalID );
    });
  
    // Se imprime los valores emitidos para los dos suscriptores.
    // Y son los mismos para ambos 👀.
    
    const subscriptor = interval.subscribe(console.log);
    const other_subscriptor = interval.subscribe(console.log);
  `

  double_subscriber: string = `
    import { interval } from 'rxjs';
  
    const observable = interval(100);
    const other_observable = interval(200);
    
    const subscription = observable
      .subscribe(respuesta => console.log('Respuesta: ', respuesta));

    const other_subscription = other_observable
      .subscribe(respuesta => console.log('Respuesta: ' + respuesta));
    
    subscription.add(other_subscription);
    
    setTimeout(() => {

      // Se cancelan ambas suscripciones ⚡.
      subscription.unsubscribe();
    }, 1000);
  `;
}
