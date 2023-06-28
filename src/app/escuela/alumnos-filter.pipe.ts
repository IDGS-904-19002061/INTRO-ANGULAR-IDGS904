import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from './alumnosIr';

@Pipe({
  name: 'alumnosFilter'
})
export class AlumnosFilterPipe implements PipeTransform {

  transform(value: Alumno[], args: string): Alumno[] {
    let filter:string = args ? args.toLocaleLowerCase(): '';
    return filter ? value.filter((alumno:Alumno)=>{
      alumno.nombre.toLocaleLowerCase().indexOf(filter)!=-1
    }): value
  }

}
