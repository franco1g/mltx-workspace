import { NgModule } from '@angular/core';
import { MltxLibComponent } from './mltx-lib.component';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    MltxLibComponent,
  ],
  imports: [
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    MltxLibComponent
  ]
})
export class MltxLibModule { }
