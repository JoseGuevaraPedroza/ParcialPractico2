import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenciaListComponent } from './conferencia-list/conferencia-list.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConferenciaListComponent,
  ],
  exports: [ConferenciaListComponent]
})
export class ConferenciaModule { }
