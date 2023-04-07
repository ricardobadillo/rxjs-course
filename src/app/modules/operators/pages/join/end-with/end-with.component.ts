// Angular.
import { Component } from '@angular/core';

// Modelos.
import { DescriptionCard } from 'src/app/core/models/description-card';



@Component({
  selector: 'app-end-with',
  templateUrl: './end-with.component.html',
  styleUrls: ['./end-with.component.scss']
})
export class EndWithComponent {

  dataCard: DescriptionCard = {
    imageURL: 'assets/images/rxjs.png',
    imageStyle: { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' },
    isList: false,
    showDivider: true,
    styleClass: { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '400px' },
    text: 'Deja pasar únicamente los valores que no se han previamente emitidos por el observable.',
    title: 'Distinct',
  };

  end_with_code: string = `
    import { endWith, fromEvent, pipe } from 'rxjs';
    
    const source$ = from([1, 2, 3, 4, 5]);
  
    source$.pipe(
      endWith('Finalizado')
    ).subscribe(console.log);

    // Resultado: 1, 2, 3, 4, 5, 'Finalizado'.
  `;
}