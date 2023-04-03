// Angular.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes.
import { AsyncSchedulerComponent } from './func/async-scheduler/async-scheduler.component';
import { FromComponent } from './func/from/from.component';
import { FromEventComponent } from './func/from-event/from-event.component';
import { IntervalComponent } from './func/interval/interval.component';
import { ObservablesComponent } from './observables.component';
import { ObserversComponent } from './pages/observers/observers.component';
import { RangeComponent } from './func/range/range.component';
import { SubscribersComponent } from './pages/subscribers/subscribers.component';
import { SubjectComponent } from './pages/subject/subject.component';
import { TimerComponent } from './func/timer/timer.component';



const routes: Routes = [
  { path: '', component: ObservablesComponent },
  { path: 'observers', component: ObserversComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'subscribers', component: SubscribersComponent },
  { path: 'functions/async-scheduler', component: AsyncSchedulerComponent },
  { path: 'functions/from', component: FromComponent },
  { path: 'functions/from-event', component: FromEventComponent },
  { path: 'functions/interval', component: IntervalComponent },
  { path: 'functions/range', component: RangeComponent },
  { path: 'functions/timer', component: TimerComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ObservablesRoutingModule { }
