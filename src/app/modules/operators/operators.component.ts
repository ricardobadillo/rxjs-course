import { Component } from '@angular/core';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent {

  cardStyle = {
    'padding-top': '2rem',
    'width': '400px'
  };

  imageStyle = {
    'display': 'flex',
    'height': '100px',
    'margin': '0 auto',
    'width': '100px'
  };

  js_code: string = `
  import { Observable } from 'rxjs';

  const observable = new Observable(subscriber => {
    subscriber.next('Hola');
    subscriber.next('soy');
    subscriber.next('un fucking');
    subscriber.next('observable');
    setTimeout(() => {
      subscriber.next('chao');
      subscriber.complete();
    }, 1000);
  });
  `
}
