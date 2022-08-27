import { Component } from '@angular/core';
import { DescriptionCard } from 'src/app/core/models/description-card';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.scss']
})
export class SubscribersComponent {

  dataCard: DescriptionCard = {
    imageURL: 'assets/images/rxjs.png',
    isList: false,
    resume: 'Una suscripción tiene un método llamado unsubscribe, que no acepta argumentos y simplemente libera recursos y cancela ejecuciones observables.',
    text: 'Una suscripción es un objeto que representa un recurso desechable, normalmente la ejecución de un Observable. Es importante saber que cuando uno se suscribe, se crea una instancia del observable.',
    title: '¿Qué es una Subscription?'
  };

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
import { DescriptionCard } from '../../../../core/models/description-card';
  
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
