// Angular.
import { Component } from '@angular/core';

// Modelos.
import { DescriptionCard } from 'src/app/core/models/description-card';



@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
  styleUrls: ['./start-with.component.scss']
})
export class StartWithComponent {

  dataCard: DescriptionCard = {
    imageURL: 'assets/images/rxjs.png',
    imageStyle: { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' },
    isList: false,
    showDivider: true,
    styleClass: { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '400px' },
    text: 'Permite hacer una emisión de un valor antes de que se emitan los valores del observable.',
    title: 'Start With',
  };

  start_with_code: string = `
    import { from, pipe, startWith } from 'rxjs';
    
    const source$ = from([1, 2, 3, 4, 5]);

    source$.pipe(
      startWith(0)
    ).subscribe(console.log);
  
    // Resultado: 0, 1, 2, 3, 4, 5.
  `;
}