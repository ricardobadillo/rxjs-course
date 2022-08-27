// Angular.
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes.
import { ObservablesComponent } from './observables.component';
import { ObserversComponent } from './pages/observers/observers.component';
import { SubscribersComponent } from './pages/subscribers/subscribers.component';
import { SubjectComponent } from './pages/subject/subject.component';


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
