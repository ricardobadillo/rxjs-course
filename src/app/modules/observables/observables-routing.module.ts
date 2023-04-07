// Angular.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes.
import { AsyncSchedulerComponent } from './pages/async-scheduler/async-scheduler.component';
import { ObservablesComponent } from './observables.component';
import { ObserversComponent } from './pages/observers/observers.component';
import { SubscribersComponent } from './pages/subscribers/subscribers.component';
import { SubjectComponent } from './pages/subject/subject.component';



const routes: Routes = [
  { path: '', component: ObservablesComponent },
  { path: 'async-scheduler', component: AsyncSchedulerComponent },
  { path: 'observers', component: ObserversComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'subscribers', component: SubscribersComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ObservablesRoutingModule { }