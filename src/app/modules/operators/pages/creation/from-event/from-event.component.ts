// Angular.
import { Component } from '@angular/core';



@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent {

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

  fromEvent_code: string = `
    import { fromEvent } from 'rxjs';

    const source$ = fromEvent<MouseEvent>( document, 'click');

    // Un observer.
    const observer = { 
      next: (value) => console.log('Next:', value) 
    };

    // Se emite datos del evento click.
    source$.subscribe(observer);
  `
}