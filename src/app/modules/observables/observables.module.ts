// Angular.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes.
import { ObservablesComponent } from './observables.component';
import { ObserversComponent } from './pages/observers/observers.component';
import { SubscribersComponent } from './pages/subscribers/subscribers.component';

// Módulos.
import { ObservablesRoutingModule } from './observables-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { SubjectComponent } from './pages/subject/subject.component';


@NgModule({
  declarations: [
    ObservablesComponent,
    ObserversComponent,
    SubscribersComponent,
    SubjectComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    
    ObservablesRoutingModule
  ]
})
export class ObservablesModule { }
