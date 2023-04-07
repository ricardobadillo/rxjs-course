// Angular.
import { Component } from '@angular/core';

// Modelos.
import { DescriptionCard } from 'src/app/core/models/description-card';



@Component({
  selector: 'app-async-scheduler',
  templateUrl: './async-scheduler.component.html',
  styleUrls: ['./async-scheduler.component.scss']
})
export class AsyncSchedulerComponent {

  listContent: string[] = [
    '❗ El Async Scheduler no crea un observable, sino una suscripción.',
    '💡 Una suscripción es el producto de un subscriber.',
    '🧠 Nos permite hacer un setTimeout o un setInterval integrando una suscripción.',
  ];

  dataCard: DescriptionCard = {
    imageURL: 'assets/images/rxjs.png',
    imageStyle: { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' },
    isList: false,
    showDivider: true,
    styleClass: { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '400px' },
    text: 'Permite crear observables en base de un listado de elementos.',
    title: 'Async Scheduler',
  } 

  of_code: string = `
    import { asyncScheduler } from 'rxjs';

    // Así trabaja un asyncScheduler como si fuera un setTimeout.
    const saludar = () => console.log('Hola mundo');
    const saludarPersona = (nombre) => console.log('Hola' + ' ' + nombre);

    // Ejecuta la función saludar en 2 segundos.
    asyncScheduler.schedule(saludar, 2000);

    // Ejecuta la función saludarPersona en 2 segundos.
    asyncScheduler.schedule(saludarPersona, 2000, 'Ricardo');

    // Así trabaja un asyncScheduler como si fuera un setInterval.
    const subs = asyncScheduler.schedule(function(state) {
      console.log('state', state);

      this.schedule(state + 1, 1000);
    }, 3000, 0);

    asyncScheduler.schedule(() => subs.unsubscribe(), 6000);
  `;

  
  constructor() { }
}