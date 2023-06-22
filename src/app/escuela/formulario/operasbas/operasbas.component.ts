import { Component } from '@angular/core';

@Component({
  selector: 'app-operasbas',
  templateUrl: './operasbas.component.html',
  styleUrls: ['./operasbas.component.css']
})
export class OperasbasComponent {
  num1=''
  num2=''
  resultado:number=0
  tipoOperaciones:string[] = ['Sumar', 'Restar', 'Dividir', 'Multiplicar']
  operacionSeleccionada = 'Sumar'

  calcular() {
    switch(this.operacionSeleccionada){
      case 'Sumar':
          this.resultado=parseInt(this.num1)+parseInt(this.num2)
        break
        case 'Restar':
          this.resultado=parseInt(this.num1)-parseInt(this.num2)
        break
        case'Dividir':
          this.resultado=parseInt(this.num1)/parseInt(this.num2)
        break
        case 'Multiplicar':
          this.resultado=parseInt(this.num1)*parseInt(this.num2)
        break
    }
  }
}
