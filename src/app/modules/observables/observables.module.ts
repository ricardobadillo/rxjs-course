// Angular.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes.
import { ObservablesComponent } from './observables.component';
import { ObserversComponent } from './pages/observers/observers.component';
import { SubjectComponent } from './pages/subject/subject.component';
import { SubscribersComponent } from './pages/subscribers/subscribers.component';

// Módulos.
import { ObservablesRoutingModule } from './observables-routing.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ObservablesComponent,
    ObserversComponent,
    SubjectComponent,
    SubscribersComponent,
  ],
  imports: [
    CommonModule,
    
    ObservablesRoutingModule,
    SharedModule,
  ]
})
export class ObservablesModule { }
