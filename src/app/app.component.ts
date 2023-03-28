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
                label: 'Of',
                icon:'pi pi-bolt',
                routerLink: 'operators/of',
                command: () => this.closeMenu()
              },
              {
                label: 'fromEvent',
                icon:'pi pi-bolt',
                routerLink: 'operators/fromEvent',
                command: () => this.closeMenu()
              },
              {
                label: 'range',
                icon:'pi pi-bolt',
                routerLink: 'operators/range',
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
            label: 'map',
            icon:'pi pi-bolt',
            routerLink: 'operators/of',
            command: () => this.closeMenu()
          },
          {
            label: 'pluck',
            icon:'pi pi-bolt',
            routerLink: 'operators/fromEvent',
            command: () => this.closeMenu()
          },
          {
            label: 'mapTo',
            icon:'pi pi-bolt',
            routerLink: 'operators/range',
            command: () => this.closeMenu()
          },
          {
            label: 'filter',
            icon:'pi pi-bolt',
            routerLink: 'operators/range',
            command: () => this.closeMenu()
          },
          {
            label: 'tap',
            icon:'pi pi-bolt',
            routerLink: 'operators/range',
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
