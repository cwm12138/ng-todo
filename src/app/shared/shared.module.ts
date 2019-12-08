import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule,MatButtonModule,MatIconModule,MatDividerModule,MatCardModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatDividerModule,
    MatCardModule
  ],
  exports: [
    HeaderComponent,
    ContentComponent
  ]
})
export class SharedModule { }
