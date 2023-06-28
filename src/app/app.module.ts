import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { escuelaComponent } from './escuela/escuela.component';
import { IEVNComponent } from './escuela/ievn.component';
import { IricComponent } from './escuela/iric/iric.component';
import { MenuComponent } from './escuela/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { SumarComponent } from './escuela/formulario/sumar/sumar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OperasbasModule } from './escuela/formulario/operasbas/operasbas.module';
import { AlumnosFilterPipe } from './escuela/alumnos-filter.pipe';
import { CalificacionAlumComponent } from './escuela/calificacion-alum/calificacion-alum.component';

@NgModule({
  declarations: [
    AppComponent,
    escuelaComponent,
    IEVNComponent,
    IricComponent,
    MenuComponent,
    SumarComponent,
    AlumnosFilterPipe,
    CalificacionAlumComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OperasbasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
