// Angular.
import { Component } from '@angular/core';

// Modelos.
import { DescriptionCard } from 'src/app/core/models/description-card';
import { FieldSet } from 'src/app/core/models/field-set';



@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.scss']
})
export class SubscribersComponent {

  showTeardown: boolean = true;

  dataCard: DescriptionCard = {
    imageURL: 'assets/images/rxjs.png',
    imageStyle: { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' },
    isList: false,
    resume: 'Una suscripción tiene un método llamado unsubscribe, que no acepta argumentos y simplemente libera recursos y cancela ejecuciones observables.',
    showDivider: true,
    styleClass: { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '400px' },
    text: `
      Una suscripción es un objeto que representa un recurso desechable, normalmente la ejecución de un Observable. 
      <br> <br>

      Es importante saber que cuando uno se suscribe, <span class="special">se crea una instancia del observable.</span>
    `,
    title: '¿Qué es una Subscription?'
  };

  tearDownData: FieldSet = {
    classStyle: 'definition-container',
    content: `Se refiere al proceso de limpieza y eliminación de los recursos creados por una suscripción a un Observable. Cuando se crea una suscripción a un Observable, se pueden crear recursos como procesos, conexiones de red, temporizadores, escuchas de eventos, entre otros. 
    <br> <br>
    
    Estos recursos deben ser liberados una vez que la suscripción ya no es necesaria, para evitar fugas de memoria y otros problemas. 
    <br> <br>
    El proceso de <span class="special">"teardown"</span> ocurre cuando se llama al método <span class="italic special">unsubscribe</span> de la suscripción. 
    Este método deshace la suscripción y libera todos los recursos asociados a ella.`,
    legend: '¿Qué es un Teardown?',
    styleClass: 'definition-container'
  };

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

  subscriber_code: string = `
  import { Observable } from "rxjs";
  
    const interval$ = new Observable<number>(subscriber => {

    let count: number = 0;   // Crea un contador.
  
      const interval = setInterval(() => {
          count++;
          subscriber.next(count);
          
          /* 
            Si no se cancela la suscripción
            aquí habría una fuga de memoria 😱.
          */

          console.log(count);
      }, 1000);

      setTimeout(() => { 
        // Se dispara el return. 
        // Limpiando así el intervalo.
        subscriber.complete();
      }, 2500);
  
      return () => {
        clearInterval(interval);
        console.log('Intervalo acabado');
      }
    });
  `;

  double_subscriber: string = `
    import { interval } from 'rxjs';
  
    const observable$ = interval(100);
    const otherObservable$ = interval(200);
    
    const subscription = observable$
      .subscribe(respuesta => console.log('Respuesta: ', respuesta));

    const otherSubscription = otherObservable$
      .subscribe(respuesta => console.log('Respuesta: ' + respuesta));
    
    subscription.add(otherSubscription$);
    
    setTimeout(() => {
      // Se cancelan ambas suscripciones ⚡.
      subscription.unsubscribe();
    }, 1000);
  `;


  constructor() { }

  toggleTeardown(): void {
    this.showTeardown = !this.showTeardown;
  }
}