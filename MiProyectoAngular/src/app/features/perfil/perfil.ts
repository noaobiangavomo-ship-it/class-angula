import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface UsuarioInterface {
  id: number;
  nombre: string;
  apellidos: string;
  curso: string;
}
@Component({
  imports: [RouterLink],
  selector: 'app-perfil',
  styleUrl: './perfil.scss',
  templateUrl: './perfil.html',
})
export class Perfil {

 nombre:string|null=null;
 //usuarios:string[]=[
 // "Ignacio Esono",
  // "Ruth Obono",
  // "Concepcion Ayi"
 //];

  usuarios:UsuarioInterface[]=[
    {id: 1, nombre: "Ignacio Esono", apellidos: "Obiang Avomo", curso: "6PEP"}, 
    {id: 2, nombre: "Ruth Obono", apellidos: "Obiang Avomo", curso: "1ESO"}, 
    {id: 3, nombre: "Concepcion Ayi", apellidos: "Obiang Avomo", curso: "2ESO"}];  
  }
