import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GenericTableComponent } from './generic-table/generic-table.component';
import { MatTableModule } from '@angular/material';
import { CommonModule } from 'projects/common/src/public_api';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GenericTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
