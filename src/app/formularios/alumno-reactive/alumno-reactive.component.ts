import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-alumno-reactive',
  templateUrl: './alumno-reactive.component.html',
  styleUrls: ['./alumno-reactive.component.css']
})
export class AlumnoReactiveComponent {
  alumnoForm!:FormGroup

  constructor (private readonly fb: FormBuilder){
    this.alumnoForm = this.initForm()
  }

  onSubmit():void{
    this.obtenerDatos()
  }

  initForm():FormGroup{
    return this.fb.group({
      matricula:['', [Validators.required, Validators.minLength(5)]],
      nombre:['', [Validators.required, Validators.minLength(3)]],
      edad:['', [Validators.required]],
      correo:['', [Validators.required]],
      foto:[''],
      calif:['', [Validators.required]],
    })
  }

  obtenerDatos(){
    const mat = this.alumnoForm.get('matricula')?.value
    const nom = this.alumnoForm.get('nombre')?.value
  }
}
