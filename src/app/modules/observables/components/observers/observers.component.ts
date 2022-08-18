import { Component } from '@angular/core';

@Component({
  selector: 'app-observers',
  templateUrl: './observers.component.html',
  styleUrls: ['./observers.component.scss']
})
export class ObserversComponent {

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

  observer_code: string = `
  import { Observer } from 'rxjs';

  // Los observer suelen lucir de esta manera:
  
  const observer: Observer<any> = {
    next: 
      value => console.log('Next: ' + value),
    error: 
      error => console.error('Error: ' + error),
    complete: 
      () => console.log('Complete'),
  };
  `

  observer: string = `
    observable.subscribe(observer);
  `;

  first_form: string = `
    observable.subscribe(respuesta => {
      console.log(respuesta);
    });
  `;
  
  second_form: string = `
  
    observable.subscribe(
      value => console.log('Next':, value),
      error => console.warn('Error:', error),
      () => console.info('Completado')
    );
  `;
}
