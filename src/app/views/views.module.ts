import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialSharedModule } from '../shared/material-shared/material-shared.module';
import { DivisionComponent } from './division/division.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ListComponent } from './divisions/list/list.component';
import { EditComponent } from './divisions/edit/edit.component';

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    DivisionComponent,
    ListComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ViewsRoutingModule,
    MaterialSharedModule
  ]
})
export class ViewsModule { }
