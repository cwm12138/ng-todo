import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DefaultModule { }
