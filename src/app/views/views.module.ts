import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { LoginComponent } from './login/login.component';
import { MaterialSharedModule } from '../shared/material-shared/material-shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ListComponent } from './divisions/list/list.component';
import { EditComponent } from './divisions/edit/edit.component';
import { ItensComponent } from './divisions/itens/itens.component';

@NgModule({
  declarations: [
    LoginComponent,
    ListComponent,
    EditComponent,
    ItensComponent
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
