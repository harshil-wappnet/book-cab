import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DirectivesComponent } from './directives/directives.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PipesComponent } from './pipes/pipes.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'pipes', component: PipesComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

