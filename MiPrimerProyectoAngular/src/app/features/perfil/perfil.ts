import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


interface UsuariosInterface {
  id: number;
  nombre: string;
  apellidos: string;
  curso: string;
  grado?: 'DAW' | 'DAM';
  role?: 'ADMIN' | 'PROFESOR' | 'ALUMNO';
}

type UsuariosType = {
  id: number;
  nombre: string;
  apellidos: string;
  curso: string;
  grado?: 'DAW' | 'DAM';
  role?: "ADMIN" | "PROFESOR" | "ALUMNO";
};


@Component({
  imports: [RouterLink],
  selector: 'app-perfil',
  styleUrl: './perfil.scss',
  templateUrl: './perfil.html',
})
export class Perfil {
  nombre: string | null = null;

  // usuarios: string[] = ['Camilo', 'Juan', 'Pepe', 'Camilo', 'Laura'];
  /*
  [
    {id: number, nombre: "", apellidos: "", curso: ""},
    {id: number, nombre: "", apellidos: "", curso: ""},
    ...
  ]
  * */

  usuarios: UsuariosType[] = [
    {id: 1, nombre: "Concepcion Ayi", apellidos: "Obiang Avomo", curso: "2", grado: "DAM" },
    {id: 2, nombre: "Ruth Obono", apellidos: "Obiang Avomo", curso: "Segundo" },
    {id: 3, nombre: "Ignacio Esono" , apellidos: "Obiang Avomo", curso: "Primero", grado: "DAM" },
    {id: 4, nombre: "Filomena Mokuy", apellidos: "Obiang Nguema", curso: "Primero", grado: "DAM" },
  ];


}
