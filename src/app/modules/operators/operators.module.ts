// Angular.
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Componentes.
import { FromEventComponent } from './pages/from-event/from-event.component';
import { OfComponent } from './pages/of/of.component';
import { OperatorsComponent } from './operators.component';

// Módulos.
import { OperatorsRoutingModule } from './operators-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { RangeComponent } from './pages/range/range.component';
import { TimerComponent } from './pages/timer/timer.component';
import { IntervalComponent } from './pages/interval/interval.component';
import { AsyncSchedulerComponent } from './pages/async-scheduler/async-scheduler.component';


@NgModule({
  declarations: [
    FromEventComponent,
    OfComponent,
    OperatorsComponent,
    RangeComponent,
    TimerComponent,
    IntervalComponent,
    AsyncSchedulerComponent,
  ],
  imports: [
    CommonModule,
    
    OperatorsRoutingModule,
    SharedModule,
  ]
})
export class OperatorsModule { }
