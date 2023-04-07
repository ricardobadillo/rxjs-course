// Angular.
import { Component } from '@angular/core';

// PrimeNg.
import { MenuItem, PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  menuItemContent!: MenuItem[]; // Menú del contenido temático.
  menuItemMain!: MenuItem[]; // Menú principal.
  showMenu: boolean = false; // Condicional para mostrar el menú de contenido.

  
  constructor(private primengConfig: PrimeNGConfig) {
    this.primengConfig.ripple = true;
  }

  ngOnInit() {
    this.menuItemMain = [
      {
        label: 'Menú',
        icon: 'pi pi-chevron-down',
        command: () => { this.showMenu = !this.showMenu },
      }
    ];
  
    this.menuItemContent = [
      {
        label: 'Programación Reactiva',
        icon:'pi pi-star',
        routerLink: 'rxjs',
        command: () => this.closeMenu()
      },
      {
        label: 'Observables',
        icon:'pi pi-eye',
        routerLink: 'observables',
        items: [
          {
            label: 'Tópicos',
            icon: 'pi pi-plus',
            items: [
              {
                label: 'asyncScheduler',
                icon:'pi pi-bolt',
                routerLink: 'observables/async-scheduler',
                command: () => this.closeMenu()
              },
              {
                label: 'Observers',
                icon:'pi pi-bolt',
                routerLink: 'observables/observers',
                command: () => this.closeMenu()
              },
              {
                label: 'Subscribers',
                icon:'pi pi-bolt',
                routerLink: 'observables/subscribers',
                command: () => this.closeMenu()
              },
              {
                label: 'Subject',
                icon:'pi pi-bolt',
                routerLink: 'observables/subject',
                command: () => this.closeMenu()
              },
            ],
          },
        ]
      },
      {
        label: 'Operadores de creación',
        icon:'pi pi-cog',
        items: [
          {
            label: 'ajax',
            icon:'pi pi-bolt',
            routerLink: 'operators/creation/ajax',
            command: () => this.closeMenu()
          },
          {
            label: 'from',
            icon:'pi pi-bolt',
            routerLink: 'operators/creation/from',
            command: () => this.closeMenu()
          },
          {
            label: 'fromEvent',
            icon:'pi pi-bolt',
            routerLink: 'operators/creation/from-event',
            command: () => this.closeMenu()
          },
          {
            label: 'interval',
            icon:'pi pi-bolt',
            routerLink: 'operators/creation/interval',
            command: () => this.closeMenu()
          },
          {
            label: 'range',
            icon:'pi pi-bolt',
            routerLink: 'operators/creation/range',
            command: () => this.closeMenu()
          },
          {
            label: 'timer',
            icon:'pi pi-bolt',
            routerLink: 'operators/creation/timer',
            command: () => this.closeMenu()
          },
        ]
      },
      {
        label: 'Operadores de filtrado',
        icon:'pi pi-cog',
        routerLink: 'operators',
        items: [
          {
            label: 'auditTime',
            icon:'pi pi-bolt',
            routerLink: 'operators/filtering/audit-time',
            command: () => this.closeMenu()
          },
          {
            label: 'debounceTime',
            icon:'pi pi-bolt',
            routerLink: 'operators/filtering/debounce-time',
            command: () => this.closeMenu()
          },
          {
            label: 'distinct',
            icon:'pi pi-bolt',
            routerLink: 'operators/filtering/distinct',
            command: () => this.closeMenu()
          },
          {
            label: 'distinctUntilChanged',
            icon:'pi pi-bolt',
            routerLink: 'operators/filtering/distinct-until-changed',
            command: () => this.closeMenu()
          },
          {
            label: 'distinctUntilKeyChanged',
            icon:'pi pi-bolt',
            routerLink: 'operators/filtering/distinct-until-key-changed',
            command: () => this.closeMenu()
          },
          {
            label: 'filter',
            icon:'pi pi-bolt',
            routerLink: 'operators/filtering/filter',
            command: () => this.closeMenu()
          },
          {
            label: 'first',
            icon:'pi pi-bolt',
            routerLink: 'operators/filtering/first',
            command: () => this.closeMenu()
          },
          {
            label: 'sample',
            icon:'pi pi-bolt',
            routerLink: 'operators/filtering/sample',
            command: () => this.closeMenu()
          },
          {
            label: 'sampleTime',
            icon:'pi pi-bolt',
            routerLink: 'operators/filtering/sample-time',
            command: () => this.closeMenu()
          },
          {
            label: 'skip',
            icon:'pi pi-bolt',
            routerLink: 'operators/filtering/skip',
            command: () => this.closeMenu()
          },
          {
            label: 'take',
            icon:'pi pi-bolt',
            routerLink: 'operators/filtering/take',
            command: () => this.closeMenu()
          },
          {
            label: 'takeUntil',
            icon:'pi pi-bolt',
            routerLink: 'operators/filtering/take-until',
            command: () => this.closeMenu()
          },
          {
            label: 'takeWhile',
            icon:'pi pi-bolt',
            routerLink: 'operators/filtering/take-while',
            command: () => this.closeMenu()
          },
          {
            label: 'throttleTime',
            icon:'pi pi-bolt',
            routerLink: 'operators/filtering/throttle-time',
            command: () => this.closeMenu()
          },
        ]
      },
      {
        label: 'Operadores de combinación',
        icon:'pi pi-cog',
        items: [
          {
            label: 'combineLatest',
            icon:'pi pi-bolt',
            routerLink: 'operators/join/combine-latest',
            command: () => this.closeMenu()
          },
          {
            label: 'endWith',
            icon:'pi pi-bolt',
            routerLink: 'operators/join/end-with',
            command: () => this.closeMenu()
          },
          {
            label: 'forkJoin',
            icon:'pi pi-bolt',
            routerLink: 'operators/join/fork-join',
            command: () => this.closeMenu()
          },
          {
            label: 'mergeAll',
            icon:'pi pi-bolt',
            routerLink: 'operators/join/merge-all',
            command: () => this.closeMenu()
          },
          {
            label: 'startWith',
            icon:'pi pi-bolt',
            routerLink: 'operators/join/start-with',
            command: () => this.closeMenu()
          },
        ]
      },
      {
        label: 'Operadores matemáticos',
        icon:'pi pi-cog',
        items: [
          {
            label: 'reduce',
            icon:'pi pi-bolt',
            routerLink: 'operators/mathematical/reduce',
            command: () => this.closeMenu()
          },
        ]
      },
      {
        label: 'Operadores de transformación',
        icon:'pi pi-cog',
        items: [
          {
            label: 'concatMap',
            icon:'pi pi-bolt',
            routerLink: 'operators/transform/concat-map',
            command: () => this.closeMenu()
          },
          {
            label: 'exhaustMap',
            icon:'pi pi-bolt',
            routerLink: 'operators/transform/exhaust-map',
            command: () => this.closeMenu()
          },
          {
            label: 'map',
            icon:'pi pi-bolt',
            routerLink: 'operators/transform/map',
            command: () => this.closeMenu()
          },
          {
            label: 'mergeMap',
            icon:'pi pi-bolt',
            routerLink: 'operators/transform/merge-map',
            command: () => this.closeMenu()
          },
          {
            label: 'scan',
            icon:'pi pi-bolt',
            routerLink: 'operators/transform/scan',
            command: () => this.closeMenu()
          },
          {
            label: 'switchMap',
            icon:'pi pi-bolt',
            routerLink: 'operators/transform/switch-map',
            command: () => this.closeMenu()
          },
        ]
      },
      {
        label: 'Operadores de utilidad',
        icon:'pi pi-cog',
        items: [
          {
            label: 'tap',
            icon:'pi pi-bolt',
            routerLink: 'operators/utility/tap',
            command: () => this.closeMenu()
          },
        ]
      },
    ];
  }

  closeMenu(): void {
    this.showMenu = false;
  }
}
