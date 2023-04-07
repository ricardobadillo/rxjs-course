// Angular.
import { Component } from '@angular/core';

// Modelos.
import { DescriptionCard } from 'src/app/core/models/description-card';



@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent {

  dataCard: DescriptionCard = {
    imageURL: 'assets/images/rxjs.png',
    imageStyle: { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' },
    isList: false,
    showDivider: true,
    styleClass: { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '400px' },
    text: 'Es un operador de aplanamiento que nos permite ejecutar un observable dentro de otro observable. Si se ejecuta un nuevo observable, el anterior se cancela.',
    title: 'switchMap',
  } 

  switch_map_code: string = `
    import { interval, fromEvent, switchMap } from 'rxjs';

    fromEvent(document, 'click').pipe(
      switchMap(() => interval(1000))
    ).subscribe(console.log);


    // Resultado: Se reinicia el intervalo cada vez que se hace click.
  `;
  
  
  constructor() { }
}