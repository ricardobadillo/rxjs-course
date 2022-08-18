import { Component } from '@angular/core';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent {

  cardStyle = {
    'margin-bottom': '1rem',
    'padding-top': '2rem',
    'width': '400px'
  };

  headerStyle = {
    'font-size': '1.25rem',
    'text-align': 'center'
  };

  imageStyle = {
    'display': 'flex',
    'height': '100px',
    'margin': '0 auto',
    'width': '100px'
  };

  of_code: string = `
    import { of } from 'rxjs';

    of(10, 20, 30).subscribe({
      next: value => console.log('Next:', value),
      error: err => console.log('Error:', err),
      complete: () => console.log('Completado'),
    });
    
    // Outputs: 

    // Next: 10
    // Next: 20
    // Next: 30
  `
}
