// Angular.
import { Component } from '@angular/core';

// Modelos.
import { DescriptionCard } from 'src/app/core/models/description-card';



@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent {

  dataCard: DescriptionCard = {
    imageURL: 'assets/images/rxjs.png',
    imageStyle: { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' },
    isList: false,
    showDivider: true,
    styleClass: { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '400px' },
    text: 'Emite el último valor emitido por el observable hasta que el otro observable que está dentro del sample emita un valor.',
    title: 'Sample',
  };

  sample_code: string = `
    import { fromEvent, interval, pipe, sample } from 'rxjs';
    
    const interval$ = interval(1000);
    const click$ = fromEvent(document, 'click');

    interval$.pipe(
      sample(click$)
    ).subscribe(console.log);

    // Resultado: Emite el último valor emitido por el primer observable cuando el segundo observable emitió un valor. 
  `;
}