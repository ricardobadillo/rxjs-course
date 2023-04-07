// Angular.
import { Component } from '@angular/core';

// Modelos.
import { DescriptionCard } from 'src/app/core/models/description-card';



@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styleUrls: ['./skip.component.scss']
})
export class SkipComponent {

  dataCard: DescriptionCard = {
    imageURL: 'assets/images/rxjs.png',
    imageStyle: { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' },
    isList: false,
    showDivider: true,
    styleClass: { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '400px' },
    text: 'Sirve para saltar u omitir X cantidad de emisiones inciales.',
    title: 'Skip',
  };

  skip_code: string = `
    import { from, pipe, skip } from 'rxjs';

    const source$ = from([1, 2, 3, 4, 5]);

    source$.pipe(skip(3)).subscribe(console.log); // 4, 5.
  `;
}