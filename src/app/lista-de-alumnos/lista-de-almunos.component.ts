import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-de-almunos',
  templateUrl: './lista-de-almunos.component.html',
  styleUrls: ['./lista-de-almunos.component.scss']
})
export class ListaDeAlmunosComponent {
  mostrarMsj = false;
  alumnos: Array<any> = [
    {
      nombre: 'Malena Areco',
      edad: 16,
      genero: 'Femenino',
    }
    ,
    {
      nombre: 'Cecilia Almaraz',
      edad: 14,
      genero: 'Femenino',
    }
    ,
    {
      nombre: 'Federico Casas',
      edad: 15,
      genero: 'Masculino',
    }
    ,
    {
      nombre: 'Eliana Meza',
      edad: 17,
      genero: ' Femenino',
    }
    ,
  ]

    getBackgroundColor():object{
      
     
      return{
        backgroundColor: this.mostrarMsj ? '#b1575a' : 'white',
      }
    }
    
};

