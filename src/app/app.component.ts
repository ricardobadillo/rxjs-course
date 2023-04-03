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
          {
            label: 'Funciones',
            icon: 'pi pi-plus',
            items: [
              {
                label: 'asyncScheduler',
                icon:'pi pi-bolt',
                routerLink: 'observables/functions/async-scheduler',
                command: () => this.closeMenu()
              },
              {
                label: 'from',
                icon:'pi pi-bolt',
                routerLink: 'observables/functions/from',
                command: () => this.closeMenu()
              },
              {
                label: 'fromEvent',
                icon:'pi pi-bolt',
                routerLink: 'observables/functions/from-event',
                command: () => this.closeMenu()
              },
              {
                label: 'interval',
                icon:'pi pi-bolt',
                routerLink: 'observables/functions/interval',
                command: () => this.closeMenu()
              },
              {
                label: 'range',
                icon:'pi pi-bolt',
                routerLink: 'observables/functions/range',
                command: () => this.closeMenu()
              },
              {
                label: 'timer',
                icon:'pi pi-bolt',
                routerLink: 'observables/functions/timer',
                command: () => this.closeMenu()
              },
            ]
          }
        ]
      },
      {
        label: 'Operators',
        icon:'pi pi-cog',
        routerLink: 'operators',
        items: [
          {
            label: 'filter',
            icon:'pi pi-bolt',
            routerLink: 'operators/filter',
            command: () => this.closeMenu()
          },
          {
            label: 'map',
            icon:'pi pi-bolt',
            routerLink: 'operators/map',
            command: () => this.closeMenu()
          },
          {
            label: 'reduce',
            icon:'pi pi-bolt',
            routerLink: 'operators/reduce',
            command: () => this.closeMenu()
          },
          {
            label: 'scan',
            icon:'pi pi-bolt',
            routerLink: 'operators/scan',
            command: () => this.closeMenu()
          },
          {
            label: 'tap',
            icon:'pi pi-bolt',
            routerLink: 'operators/tap',
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
