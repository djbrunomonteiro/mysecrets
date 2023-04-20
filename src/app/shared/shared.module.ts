import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MaterialSharedModule } from './material-shared/material-shared.module';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MaterialSharedModule
  ],
  exports:[
    MenuComponent
  ]
})
export class SharedModule { }
