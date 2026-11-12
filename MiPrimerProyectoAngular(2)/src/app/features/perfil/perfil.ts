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
    {id: 1, nombre: "Camilo", apellidos: "Quiroz", curso: "Segundo", grado: "DAW" },
    {id: 2, nombre: "Juan", apellidos: "Muñoz", curso: "Segundo" },
    {id: 3, nombre: "Pepe", apellidos: "Perez", curso: "Primero", grado: "DAM" },
    {id: 4, nombre: "Camilo", apellidos: "Qz", curso: "Primero", grado: "DAM" },
  ];


}
