import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './divisions/list/list.component';
import { EditComponent } from './divisions/edit/edit.component';
import { ItensComponent } from './divisions/itens/itens.component';

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
        path: 'divisions',
        component: ListComponent
      },
      {
        path: 'divisions/itens/:id',
        component: ItensComponent
      },
      {
        path: 'divisions/edit',
        component: EditComponent
      },
    ]
  },
  {
    path: '',
    redirectTo: '/auth/divisions',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
