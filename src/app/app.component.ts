import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro-angular-idgs904';

  dupliValor(x:number) {
    return x*2
    
  }
  Alumnos={
    matricula:1234,
    nombre:'Angel',
    fechaNacimiento:new Date()
  }
}