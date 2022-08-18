// Angular.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes.
import { RxjsComponent } from './rxjs.component';

// Módulos.
import { RxjsRoutingModule } from './rxjs-routing.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    RxjsComponent
  ],
  imports: [
    CommonModule,
    
    RxjsRoutingModule,
    SharedModule, 
  ]
})
export class RxjsModule { }
