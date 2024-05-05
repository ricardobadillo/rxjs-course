// Angular.
import { Component, OnInit } from '@angular/core';

// RXJS.
import { Subject, combineLatest, filter, forkJoin, from, interval, map, mergeMap, reduce, switchMap, take, takeWhile, timer } from 'rxjs';
import { ajax } from 'rxjs/ajax';



@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.capitalizeTest();
    // this.reduceTest();
    // this.randomTest();
    // this.countdownTest();
    // this.combineTest();
    this.R2D2Test();
  }

  // Prueba #1.  
  capitalizeTest(): void {
    /*
      * Ejercicio: El objetivo es realizar la misma impresión, pero usando observables.
      * Nota: No hay que usar el ciclo "for of", usar un observable y llamar la función capitalizar.
    */

    /*
       * Salida esperada:
       * Batman
       * Joker
       * Doble Cara
       * Pingüino
       * Hiedra Venenosa
     */

    const nombres$ = from(['batman', 'joker', 'doble cara', 'pingüino', 'hiedra venenosa']);

    nombres$.pipe(
      map<string, string>(nombre => nombre.replace(/\w\S*/g, (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()))
    ).subscribe(nombre => console.log(nombre));
  }
  
  // Prueba #2.
  reduceTest(): void {
    /*
     * Ejercicio: 
     * Sume todos los números del arreglo usando un reduce.
     * Debe de filtrar para que sólo tome en cuenta los números.
     * La salida debe de ser 32
     
     * Tip:
     * isNan() es una función de JavaScript para determinar si es número
     * Usar filter<any>(...) para no tener problemas de tipado.
    */

    const datos$ = from([1, 2, 'foo', 3, 5, 6, 'bar', 7, 8]);

    datos$.pipe(
      filter<any>(value => typeof value === 'number'),
      reduce<number, number>((accumulator, currentValue) => accumulator + currentValue, 0))
      .subscribe(total => console.log('Total:', total));
  }

  // Prueba #3.
  randomTest(): void {
    /*
      * Ejercicio: Realizar que los dos observables finales, emitan exactamente el mismo valor.
      * Tip: ¿Hot Observable? ¿Subjects?
    */
    
    const reloj$ = interval(1000).pipe(
      take(2),
      map<number, number>(() => Math.round(Math.random() * 100))
    );

    const subject$ = new Subject<number>();
    reloj$.subscribe(subject$);

    // Estos dos observables deben de emitir exactamente los mismos valores
    subject$.subscribe(value => console.log('obs1', value) );
    subject$.subscribe(value => console.log('obs2', value) );
  }

  // Prueba #4.
  countdownTest(): void {
    /*
     * Ejercicio: Realizar una cuenta regresiva empezando de 7.
      
      --> Salida esperada: 7 6 5 4 3 2 1 0.
    */
   
    const start = 7;
    const countdown$ = interval(500).pipe(
      map(value => start - value),
      takeWhile(value => value >= 0)
    );

    countdown$.subscribe(console.log);
  }

  // Prueba #5.
  combineTest(): void {
    /*
      * Ejercicio: Combinar ambos observables para que las emisiones sean la concatenación de los último valores emitidos.
      --> Salida esperada: a1, a2, b2, b3, c3, c4, d4, d5, e5.
    */

    const letras = ['a', 'b', 'c', 'd', 'e'];
    const numeros = [1, 2, 3, 4, 5];

    // Emite letras cada segundo.
    const letras$ = interval(1000).pipe(
      map(value => letras[value]),
      take(letras.length)
    );
    
    // Emite numeros del 1 al 5 cada segundo, pero tiene un delay inicial de 500 milésimas. 
    const numeros$ = timer(500, 1000).pipe(
      map(i => numeros[i]),
      take(numeros.length)
    );
      
    combineLatest([numeros$, letras$]).pipe(
      map(([number, letter]) => letter + number),
    ).subscribe(console.log);
  }

  // Prueba #6.
  R2D2Test(): void {
    /*
      * Ejercicio: 
        - Realizar 2 peticiones HTTP (ajax) una después de otra.
      
      * La primera debe de obtener el personaje de Star Wars: R2-D2, llamando el endpoint: /people/3/
      
      * La segunda petición, debe de ser utilizando el objeto de la petición anterior, y tomar la especie (species).
      * Tomar la primera posición del arreglo y realizar la llamada a ese URL el cual debería de traer información sobre su especie.
        
      Ejemplo de la data esperada: 
        {
          especie: {name: "Human", classification: "mammal", designation: "sentient", average_height: "180", skin_colors: "caucasian, black, asian, hispanic", …} 
          personaje: {name: "Luke Skywalker", height: "172", mass: "77", hair_color: "blond", skin_color: "fair", …}  
        }
      */

    const SW_API = 'https://swapi.dev/api';                     
    const getRequest = (url: string) => ajax.getJSON<any>(url);

    // Solución #1.
    getRequest(`${SW_API}/people/3`)
      .pipe(
        switchMap((personaje: any) => {
          const url = getRequest(`${SW_API}/people/3`);
          return getRequest(personaje.species[0])
            .pipe(
              mergeMap((especie: any) => {
                const data = { personaje, especie };
                return from([data]);
              })
            )
        })
      ).subscribe(console.log);

    // Solución #2.

    // const personaje$ = getRequest(`${SW_API}/people/3`);
    // const especie$ = personaje$.pipe(
    //     switchMap((personaje: any) => {
    //       const url = getRequest(`${SW_API}/people/3`);
    //       return getRequest(personaje.species[0])
    //     })
    //   );

    // forkJoin({ personaje: personaje$, especie: especie$ }).subscribe(console.log);
  }
}