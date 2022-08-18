import { Component } from '@angular/core';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.scss']
})
export class SubscribersComponent {

  cardStyle = {
    'margin-bottom': '1rem',
    'padding-top': '2rem',
    'width': '400px'
  };

  headerStyle = {
    'font-size': '1.25rem',
    'text-align': 'center'
  };

  imageStyle = {
    'display': 'flex',
    'height': '100px',
    'margin': '0 auto',
    'width': '100px'
  };

  subscriber_code: string = `
  import { Observable } from "rxjs";
  
  const interval$ = new Observable<number>(subscriber => {

      let count: number = 0;   // Crea un contador.
  
      const interval = setInterval( () => {
          count++;
          subscriber.next(count);
  
          /* 
            Si no se cancela la suscripción
            aquí habría una fuga de memoria 😱.
          */
            console.log(count);
      }, 1000);
  
      return () => {
          clearInterval(interval);
          console.log('Intervalo acabado');
      }
  } );
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
