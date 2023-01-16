import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DatabindingComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DatabindingComponent
  ]
})
export class PrincipalModule { }
