// Angular.
import { Component } from '@angular/core';

// Modelos.
import { DescriptionCard } from 'src/app/core/models/description-card';



@Component({
  selector: 'app-audit-time',
  templateUrl: './audit-time.component.html',
  styleUrls: ['./audit-time.component.scss']
})
export class AuditTimeComponent {

  dataCard: DescriptionCard = {
    imageURL: 'assets/images/rxjs.png',
    imageStyle: { 'display': 'flex', 'height': '100px', 'margin': '0 auto', 'width': '100px' },
    isList: false,
    showDivider: true,
    styleClass: { 'margin-bottom': '1rem', 'padding-top': '2rem', 'width': '400px' },
    text: 'Emite el último valor que ha sido emitido por el observable en un período de tiempo determinado.',
    title: 'Audit Time',
  };

  audit_time_code: string = `
    import { auditTime, fromEvent, pipe, tap } from 'rxjs';

    const click$ = fromEvent<MouseEvent>(document, 'click');

    click$.pipe(
      tap(val => console.log('tap: ', val),
      auditTime(2000)
    ).subscribe(console.log);

    // Resultado: Emite el valor más reciente emitido por el observable en un período de tiempo determinado.
  `;
}