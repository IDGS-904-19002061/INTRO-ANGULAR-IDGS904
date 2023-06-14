import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-alumno',
    template:`
    <div class="container">
    <h2>Alumno IDGS904</h2>
        <div>Matricula: {{Alumnos.matricula}}</div>
        <div>Nombre: {{Alumnos.nombre}}</div>
        <div>Fecha de nacimiento: {{Alumnos.fechaNacimiento  | date}}</div>
        <div>Pago: {{Alumnos.pagoIns | currency}}</div>
    </div>
    `
})

export class IEVNComponent implements OnInit {
    constructor() { }

    Alumnos={
        matricula:1234,
        nombre:'Angel',
        fechaNacimiento:new Date(),
        pagoIns:2759.23
      }

    ngOnInit() {
        
     }
}