import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import { OperasbasComponent } from './operasbas.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OperasbasComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    NgIf,
    FormsModule
  ],
  exports:[
    OperasbasComponent
  ]
})
export class OperasbasModule { }
