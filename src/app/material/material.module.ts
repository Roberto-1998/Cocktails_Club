import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';



const modules=[
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatChipsModule,

]



@NgModule({
  
  imports: [
    modules
  ],
  exports:[
    modules
  ]
})
export class MaterialModule { }
