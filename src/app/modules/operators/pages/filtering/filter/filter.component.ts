// Angular.
import { Component } from '@angular/core';

// Modelos.
import { DescriptionCard } from 'src/app/core/models/description-card';



@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  dataCard: DescriptionCard = {
    imageURL: 'assets/images/rxjs.png',
    imageStyle: { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' },
    isList: false,
    showDivider: true,
    styleClass: { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '400px' },
    text: 'Permite filtrar las emisiones de los valores que emite el observable.',
    title: 'Filter',
  };

  filter_code: string = `
    import { filter, range } from 'rxjs';
      
    range(1, 5).pipe(
      filter(x => x % 2 === 0)
    ).subscribe(x => console.log(x));

    // Resultado: 2, 4.
  `;
}