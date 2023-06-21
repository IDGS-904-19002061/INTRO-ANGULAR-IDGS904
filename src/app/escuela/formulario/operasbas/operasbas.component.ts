import { Component } from '@angular/core';

@Component({
  selector: 'app-operasbas',
  templateUrl: './operasbas.component.html',
  styleUrls: ['./operasbas.component.css']
})
export class OperasbasComponent {
  value='Clear me'
  num1=''
  num2=''
  resultado:number=0

  sumar() {
    this.resultado=parseInt(this.num1)+parseInt(this.num2)
  }
  restar() {
    this.resultado=parseInt(this.num1)-parseInt(this.num2)
  }
  dividir() {
    this.resultado=parseInt(this.num1)/parseInt(this.num2)
  }
  multiplicar() {
    this.resultado=parseInt(this.num1)*parseInt(this.num2)
  }
}
