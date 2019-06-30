import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { SuccessComponent } from './success.component';

@NgModule({
  declarations: [
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [SuccessComponent]
})
export class SuccessModule { }
