// Angular.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes.
import { AsyncSchedulerComponent } from './functions/async-scheduler/async-scheduler.component';
import { FromEventComponent } from './functions/from-event/from-event.component';
import { IntervalComponent } from './functions/interval/interval.component';
import { OfComponent } from './functions/of/of.component';
import { OperatorsComponent } from './operators.component';
import { RangeComponent } from './functions/range/range.component';
import { TimerComponent } from './functions/timer/timer.component';



const routes: Routes = [
  { path: '', component: OperatorsComponent },
  { path: 'async-scheduler', component: AsyncSchedulerComponent },
  { path: 'fromEvent', component: FromEventComponent },
  { path: 'interval', component: IntervalComponent },
  { path: 'of', component: OfComponent },
  { path: 'range', component: RangeComponent },
  { path: 'timer', component: TimerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorsRoutingModule { }
