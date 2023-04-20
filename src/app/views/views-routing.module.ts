import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DivisionComponent } from './division/division.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './divisions/list/list.component';
import { EditComponent } from './divisions/edit/edit.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'auth',
    canActivate: [AuthGuard],
    children:[
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'division/:id',
        component: DivisionComponent
      },
      {
        path: 'divisions',
        component: ListComponent
      },
      {
        path: 'divisions/edit',
        component: EditComponent
      },
    ]
  },
  {
    path: '',
    redirectTo: '/auth/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
