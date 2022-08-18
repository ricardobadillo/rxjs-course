// Angular.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes.
import { ObservablesComponent } from './observables.component';
import { ObserversComponent } from './components/observers/observers.component';
import { SubscribersComponent } from './components/subscribers/subscribers.component';
import { SubjectComponent } from './components/subject/subject.component';


const routes: Routes = [
  { path: '', component: ObservablesComponent },
  { path: 'observers', component: ObserversComponent },
  { path: 'subject', component: SubjectComponent },
  { path: 'subscribers', component: SubscribersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservablesRoutingModule { }
