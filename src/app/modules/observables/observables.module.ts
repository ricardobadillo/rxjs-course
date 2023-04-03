// Angular.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes.
import { AsyncSchedulerComponent } from './func/async-scheduler/async-scheduler.component';
import { FromComponent } from './func/from/from.component';
import { FromEventComponent } from './func/from-event/from-event.component';
import { IntervalComponent } from './func/interval/interval.component';
import { ObservablesComponent } from './observables.component';
import { ObserversComponent } from './pages/observers/observers.component';
import { RangeComponent } from './func/range/range.component';
import { SubjectComponent } from './pages/subject/subject.component';
import { SubscribersComponent } from './pages/subscribers/subscribers.component';
import { TimerComponent } from './func/timer/timer.component';

// Módulos.
import { ObservablesRoutingModule } from './observables-routing.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    AsyncSchedulerComponent,
    FromComponent,
    FromEventComponent,
    IntervalComponent,
    ObservablesComponent,
    ObserversComponent,
    RangeComponent,
    SubjectComponent,
    SubscribersComponent,
    TimerComponent,
    FromComponent,
  ],
  imports: [
    CommonModule,
    
    ObservablesRoutingModule,
    SharedModule,
  ]
})
export class ObservablesModule { }
