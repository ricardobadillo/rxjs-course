// Angular.
import { Component, OnInit } from '@angular/core';

// Modelos.
import { DescriptionCard } from 'src/app/core/models/description-card';

// RXJS.
import { ajax } from 'rxjs/ajax';
import { catchError, from, map } from 'rxjs';



@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.scss']
})
export class AjaxComponent implements OnInit {

  url: string = 'https://api.github.com/userss?per_page=5';
  fetchPromesa: Promise<Response> = fetch(this.url);

  constructor() { }

  ngOnInit(): void {
    // this.fetchPromesa
    //   .then(response => this.handleError(response))
    //   .then(response => response.json())
    //   .then(response => console.log('Respuesta: ', response))
    //   .catch(error => console.log('Error: ', error)); // No carga el error.


    // Ejemplo de ajax.
    ajax(this.url)
      .pipe(map(response => response.response),
        catchError(error => {
          console.warn('Error: ', error);
          return from([]);
        }))
      .subscribe(console.log);
  }

  handleError(response: Response): Response {
    if (!response.ok) {
      throw new Error(response.statusText);
      }

    return response;
  }
}