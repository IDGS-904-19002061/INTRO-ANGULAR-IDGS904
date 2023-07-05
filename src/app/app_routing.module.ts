import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IricComponent } from './escuela/iric/iric.component';
import { AlumnoReactiveComponent } from './formularios/alumno-reactive/alumno-reactive.component';
import { OperasbasComponent } from './escuela/formulario/operasbas/operasbas.component';

const routes: Routes =[
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'IricComponent', component: IricComponent},
    {path: 'OperasBas', component: OperasbasComponent},
    {path: 'AlumnoReactiveComponent', component: AlumnoReactiveComponent},
]

@NgModule (
    {
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule],
    }
)export class AppRoutingModule{}