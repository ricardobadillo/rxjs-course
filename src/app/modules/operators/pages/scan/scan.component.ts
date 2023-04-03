// Angular.
import { Component } from '@angular/core';

// Modelos.
import { DescriptionCard } from 'src/app/core/models/description-card';



@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent {

  dataCard: DescriptionCard = {
    imageURL: 'assets/images/rxjs.png',
    imageStyle: { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' },
    isList: false,
    showDivider: true,
    styleClass: { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '400px' },
    text: 'Es exactamente al reduce. La única diferencia es que cuando los valores son emitidos por el observable, inmediatamente van saliendo conforme van ingresando, pero regresa su valor acumulado.',
    title: 'Scan',
  };

  scan_code: string = `
    import { scan } from 'rxjs';

    const source = [1, 2, 3, 4, 5];

    const total = from(source).
      pipe(
        scan((accumulator, currentValue) => accumulator + currentValue, 0))
        .subscribe(x => console.log(x)); // 1, 3, 6, 10, 15.
  `;
}
